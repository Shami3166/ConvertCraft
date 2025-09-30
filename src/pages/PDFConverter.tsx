/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  useState,
  useRef,
  type ChangeEvent,
  type MouseEvent,
  useEffect,
} from "react";

// Declare the global variables that will be loaded from the CDN
declare global {
  interface Window {
    PDFDocument: any;
    pdfjsLib: any;
  }
}

const PDFConverter: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loadScripts = () => {
      const script1 = document.createElement("script");
      script1.src = "https://unpkg.com/pdf-lib/dist/pdf-lib.min.js";
      script1.onload = () => {
        const script2 = document.createElement("script");
        script2.src =
          "https://cdn.jsdelivr.net/npm/pdfjs-dist@4.3.136/build/pdf.min.js";
        script2.onload = () => {
          if (window.pdfjsLib) {
            window.pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@4.3.136/build/pdf.worker.min.js`;
            setIsScriptLoaded(true);
          }
        };
        document.body.appendChild(script2);
      };
      document.body.appendChild(script1);
    };

    if (!isScriptLoaded) {
      loadScripts();
    }
  }, [isScriptLoaded]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    setFile(selectedFile);
    setStatus("");
  };

  const handleConvert = async (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    if (!file || !isScriptLoaded) {
      setStatus("Please wait for libraries to load...");
      return;
    }

    setLoading(true);
    setStatus("Reading file...");

    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdfDocument = await window.pdfjsLib.getDocument({
        data: arrayBuffer,
      }).promise;
      const numPages = pdfDocument.numPages;

      setStatus(`Processing ${numPages} pages...`);

      const renderedImages: Blob[] = [];

      for (let i = 1; i <= numPages; i++) {
        const page = await pdfDocument.getPage(i);
        const viewport = page.getViewport({ scale: 2 });
        const canvas = document.createElement("canvas");
        const canvasContext = canvas.getContext("2d");
        if (!canvasContext) {
          throw new Error("Could not get 2D canvas context.");
        }

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({ canvasContext, viewport }).promise;

        const imageBlob: Blob | null = await new Promise((resolve) =>
          canvas.toBlob(resolve, "image/png")
        );
        if (imageBlob) {
          renderedImages.push(imageBlob);
        }

        setStatus(`Converted page ${i} of ${numPages}`);
      }

      setStatus("Combining images into a new PDF...");

      const newPdfDoc = await window.PDFDocument.create();

      for (const imageBlob of renderedImages) {
        const imageBytes = await imageBlob.arrayBuffer();
        const embeddedImage = await newPdfDoc.embedPng(imageBytes);

        const { width, height } = embeddedImage;
        const page = newPdfDoc.addPage([width, height]);
        page.drawImage(embeddedImage, { x: 0, y: 0, width, height });
      }

      const pdfBytes = await newPdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `converted-${file.name}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setStatus("Conversion complete! Your file has been downloaded.");
    } catch (error) {
      console.error("Conversion failed:", error);
      setStatus(
        `Error: ${
          error instanceof Error ? error.message : "An unknown error occurred"
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">
          PDF to Images & Back
        </h1>
        <p className="text-gray-600">
          Select a PDF file to convert its pages into images, then combine them
          into a new PDF. This process happens entirely in your browser, keeping
          your files secure.
        </p>

        <input
          type="file"
          id="pdfFile"
          accept=".pdf"
          onChange={handleFileChange}
          ref={fileInputRef}
          className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100
                    hover:cursor-pointer transition duration-300"
        />

        <button
          onClick={handleConvert}
          disabled={!file || loading || !isScriptLoaded}
          className="w-full px-6 py-3 rounded-full text-white font-semibold shadow-lg
                     bg-blue-600 hover:bg-blue-700 transition duration-300
                     disabled:bg-blue-300 disabled:cursor-not-allowed"
        >
          {loading ? "Converting..." : "Convert PDF"}
        </button>

        <div id="status" className="text-sm text-gray-500 mt-4">
          {isScriptLoaded ? status : "Loading libraries..."}
        </div>
      </div>
    </div>
  );
};

export default PDFConverter;
