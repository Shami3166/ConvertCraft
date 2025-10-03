/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  useState,
  useRef,
  type DragEvent,
  type ChangeEvent,
  useEffect,
} from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { uploadFile } from "@/api/conversionApi";
import { useAuth } from "@/context/AuthContext";
import { History, Sparkles, ArrowRight, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";

// ✅ FIXED: Import images directly
import mediaImage from "@/assets/images/media.webp";
import media2Image from "@/assets/images/media2.webp";
import media3Image from "@/assets/images/media3.webp";
import media4Image from "@/assets/images/media4.jpg";

// ✅ ADD THIS FUNCTION RIGHT ABOVE YOUR Converter COMPONENT
const getConverterSpecificKeywords = (converter: Converter): string => {
  const keywords: { [key: string]: string } = {
    // PNG to JPG
    "png-to-jpg": `
      png to jpg converter online, convert png to jpg free, png to jpg without quality loss, 
      change png to jpg format, png to jpg batch converter, png to jpg for website,
      convert png images to jpg, png to jpg high quality, png to jpg online tool,
      how to convert png to jpg, png to jpg free download alternative, png to jpg for smaller size,
      png to jpg for email, png to jpg for social media, best png to jpg converter
    `,

    // JPG to PNG
    "jpg-to-png": `
      jpg to png converter online, convert jpg to png free, jpg to png transparent background,
      change jpg to png format, jpg to png batch converter, jpg to png for logos,
      convert jpg images to png, jpg to png high quality, jpg to png online tool,
      how to convert jpg to png, jpg to png free download alternative, jpg to png for printing,
      jpg to png for web design, best jpg to png converter
    `,

    // PNG to WebP
    "png-to-webp": `
      png to webp converter online, convert png to webp free, png to webp for website optimization,
      png to webp batch converter, png to webp for faster loading, png to webp online tool,
      convert png to webp for seo, png to webp compression, png to webp quality preservation,
      best png to webp converter, png to webp for modern browsers
    `,

    // WebP to PNG
    "webp-to-png": `
      webp to png converter online, convert webp to png free, webp to png for compatibility,
      webp to png batch converter, webp to png for editing, webp to png online tool,
      convert webp to png for photoshop, webp to png for legacy software, webp to png high quality,
      best webp to png converter, webp to png for social media
    `,

    // JPG to WebP
    "jpg-to-webp": `
      jpg to webp converter online, convert jpg to webp free, jpg to webp for website speed,
      jpg to webp batch converter, jpg to webp for seo benefits, jpg to webp online tool,
      convert jpg to webp for smaller files, jpg to webp compression ratio, jpg to webp quality,
      best jpg to webp converter, jpg to webp for modern web
    `,

    // WebP to JPG
    "webp-to-jpg": `
      webp to jpg converter online, convert webp to jpg free, webp to jpg for universal compatibility,
      webp to jpg batch converter, webp to jpg for sharing, webp to jpg online tool,
      convert webp to jpg for printing, webp to jpg for older devices, webp to jpg high quality,
      best webp to jpg converter, webp to jpg for email attachments
    `,

    // SVG to PNG
    "svg-to-png": `
      svg to png converter online, convert svg to png free, svg to png for web use,
      svg to png batch converter, svg to png high resolution, svg to png online tool,
      convert svg to png for printing, svg to png for social media, svg to png vector to raster,
      best svg to png converter, svg to png for logos
    `,

    // SVG to JPG
    "svg-to-jpg": `
      svg to jpg converter online, convert svg to jpg free, svg to jpg for photographs,
      svg to jpg batch converter, svg to jpg for documents, svg to jpg online tool,
      convert svg to jpg for presentations, svg to jpg compression, svg to jpg quality,
      best svg to jpg converter, svg to jpg for web publishing
    `,

    // HEIC to JPG
    "heic-to-jpg": `
      heic to jpg converter online, convert heic to jpg free, heic to jpg from iphone,
      heic to jpg batch converter, heic to jpg for windows, heic to jpg online tool,
      convert heic photos to jpg, heic to jpg for sharing, heic to jpg universal format,
      best heic to jpg converter, heic to jpg for social media, iphone heic to jpg converter
    `,

    // HEIC to PNG
    "heic-to-png": `
      heic to png converter online, convert heic to png free, heic to png from iphone,
      heic to png batch converter, heic to png for transparency, heic to png online tool,
      convert heic photos to png, heic to png for editing, heic to png lossless format,
      best heic to png converter, heic to png for graphic design
    `,

    // PDF to PNG
    "pdf-to-png": `
      pdf to png converter online, convert pdf to png free, pdf to png images extraction,
      pdf to png batch converter, pdf to png for web use, pdf to png online tool,
      convert pdf pages to png, pdf to png high resolution, pdf to png for editing,
      best pdf to png converter, pdf to png for social media
    `,
  };

  return keywords[converter.url] || "";
};

// ---- Converter Interface ----
interface Converter {
  title: string;
  description: string;
  url: string;
  sourceFormat: string;
  targetFormat: string;
  sourceMimeType: string;
  targetMimeType: string;
}

// ---- All Converters ----
const allConverters: Converter[] = [
  {
    title: "PNG to JPG",
    description: "Convert a PNG image to a JPG format.",
    url: "png-to-jpg",
    sourceFormat: "png",
    targetFormat: "jpg",
    sourceMimeType: "image/png",
    targetMimeType: "image/jpeg",
  },
  {
    title: "JPG to PNG",
    description: "Convert a JPG image to a PNG format.",
    url: "jpg-to-png",
    sourceFormat: "jpg",
    targetFormat: "png",
    sourceMimeType: "image/jpeg",
    targetMimeType: "image/png",
  },
  {
    title: "PDF to PNG",
    description: "Convert a PDF document to PNG images.",
    url: "pdf-to-png",
    sourceFormat: "pdf",
    targetFormat: "png",
    sourceMimeType: "application/pdf",
    targetMimeType: "image/png",
  },
  {
    title: "WebP to JPG",
    description: "Convert a WebP image to JPG format.",
    url: "webp-to-jpg",
    sourceFormat: "webp",
    targetFormat: "jpg",
    sourceMimeType: "image/webp",
    targetMimeType: "image/jpeg",
  },
  {
    title: "PNG to WebP",
    description: "Convert PNG to WebP",
    url: "png-to-webp",
    sourceFormat: "png",
    targetFormat: "webp",
    sourceMimeType: "image/png",
    targetMimeType: "image/webp",
  },
  {
    title: "WebP to PNG",
    description: "Convert WebP to PNG",
    url: "webp-to-png",
    sourceFormat: "webp",
    targetFormat: "png",
    sourceMimeType: "image/webp",
    targetMimeType: "image/png",
  },
  {
    title: "JPG to WebP",
    description: "Convert JPG to WebP",
    url: "jpg-to-webp",
    sourceFormat: "jpg",
    targetFormat: "webp",
    sourceMimeType: "image/jpeg",
    targetMimeType: "image/webp",
  },
  {
    title: "SVG to PNG",
    description: "Convert SVG to PNG",
    url: "svg-to-png",
    sourceFormat: "svg",
    targetFormat: "png",
    sourceMimeType: "image/svg+xml",
    targetMimeType: "image/png",
  },
  {
    title: "SVG to JPG",
    description: "Convert SVG to JPG",
    url: "svg-to-jpg",
    sourceFormat: "svg",
    targetFormat: "jpg",
    sourceMimeType: "image/svg+xml",
    targetMimeType: "image/jpeg",
  },
  {
    title: "HEIC to JPG",
    description: "Convert HEIC to JPG",
    url: "heic-to-jpg",
    sourceFormat: "heic",
    targetFormat: "jpg",
    sourceMimeType: "image/heic",
    targetMimeType: "image/jpeg",
  },
  {
    title: "HEIC to PNG",
    description: "Convert HEIC to PNG",
    url: "heic-to-png",
    sourceFormat: "heic",
    targetFormat: "png",
    sourceMimeType: "image/heic",
    targetMimeType: "image/png",
  },
];

// Reusable Button
const Button: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}> = ({ children, onClick, disabled, className }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
  >
    {children}
  </button>
);

// Feature Section Component with alternating layout
const FeatureSection: React.FC<{
  reverse?: boolean;
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
}> = ({ reverse = false, title, description, imageUrl, features }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className={`flex flex-col md:flex-row items-center gap-12 mb-20 ${
      reverse ? "md:flex-row-reverse" : ""
    }`}
  >
    {/* Image Section */}
    <motion.div
      className="flex-1"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-96 object-cover rounded-3xl shadow-2xl"
      />
    </motion.div>

    {/* Content Section */}
    <motion.div
      className="flex-1 space-y-6"
      initial={{ opacity: 0, x: reverse ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h3>
      <p className="text-lg text-gray-600">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            className="flex items-center gap-3 text-gray-700"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
            {feature}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </motion.div>
);

// Converter Page
const Converter: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { userRole, fetchUserInfo, isAuthenticated } = useAuth();

  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [convertedFileUrl, setConvertedFileUrl] = useState<string | null>(null);
  const [sourceFilePreviewUrl, setSourceFilePreviewUrl] = useState<
    string | null
  >(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const converter =
    allConverters.find((conv) => conv.url === id) || allConverters[0];

  // ✅ NEW: Client-side file validation function
  const validateFileBeforeUpload = (selectedFile: File): string | null => {
    // Check file size (800MB max)
    const maxSize = 800 * 1024 * 1024;
    if (selectedFile.size > maxSize) {
      return `File too large. Maximum size is 800MB. Your file: ${(
        selectedFile.size /
        (1024 * 1024)
      ).toFixed(2)}MB`;
    }

    // Check if file is empty
    if (selectedFile.size === 0) {
      return "File is empty. Please select a valid file.";
    }

    // Check file type matches converter
    const allowedTypes = [
      converter.sourceMimeType,
      `image/${converter.sourceFormat}`,
      `application/${converter.sourceFormat}`,
    ];

    const fileExtension = selectedFile.name.toLowerCase().split(".").pop();
    if (
      !allowedTypes.includes(selectedFile.type) &&
      fileExtension !== converter.sourceFormat
    ) {
      return `Please upload a ${converter.sourceFormat.toUpperCase()} file. Selected: ${
        selectedFile.type || fileExtension
      }`;
    }

    return null; // No errors
  };

  const handleBack = () => {
    navigate("/tools");
  };

  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  // ---- Drag and Drop Handlers ----
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) {
      processFile(droppedFile);
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    if (selectedFile) {
      processFile(selectedFile);
    }
  };

  const processFile = (selectedFile: File) => {
    // ✅ NEW: Validate file before processing
    const validationError = validateFileBeforeUpload(selectedFile);
    if (validationError) {
      setError(validationError);
      setFile(null);
      setSourceFilePreviewUrl(null);
      setConvertedFileUrl(null);
      return;
    }

    if (
      selectedFile.type === converter.sourceMimeType ||
      selectedFile.name.toLowerCase().endsWith(`.${converter.sourceFormat}`)
    ) {
      setFile(selectedFile);
      setError(null);
      setConvertedFileUrl(null);
      setSourceFilePreviewUrl(URL.createObjectURL(selectedFile));
    } else {
      setError(
        `Unsupported file type. Please upload a ${converter.sourceFormat.toUpperCase()} file.`
      );
      setFile(null);
      setSourceFilePreviewUrl(null);
      setConvertedFileUrl(null);
    }
  };

  const convertFile = async (inputFile: File) => {
    try {
      const blob = await uploadFile(inputFile, converter.targetFormat);
      return URL.createObjectURL(blob);
    } catch (e: any) {
      // ✅ CATCH ALL ERRORS FROM API
      console.error("Conversion API error:", e.message);
      throw new Error(e.message);
    }
  };

  const handleConvert = async () => {
    if (!file) {
      setError("Please select a file to convert.");
      return;
    }

    // ✅ RESET STATES - Backend will handle all limits
    setError(null);
    setIsLoading(true);
    setConvertedFileUrl(null);

    try {
      const url = await convertFile(file);
      setConvertedFileUrl(url);
      setShowSuccess(true);

      // Auto-hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);

      // Refresh user info
      setTimeout(() => fetchUserInfo(), 1000);
    } catch (e: any) {
      // ✅ PROPERLY DISPLAY ERROR IN UI
      console.error("Conversion error in UI:", e.message);
      setError(e.message);

      // Show limit modal for limit-related errors
      if (
        e.message.includes("limit") ||
        e.message.includes("Limit") ||
        e.message.includes("guest") ||
        e.message.includes("free plan") ||
        e.message.includes("MB")
      ) {
        setShowLimitModal(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (convertedFileUrl && file) {
      const a = document.createElement("a");
      a.href = convertedFileUrl;
      const originalFileName = file.name.split(".")[0];
      a.download = `${originalFileName}-converted.${converter.targetFormat}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <>
      <Helmet>
        <title>{converter.title} - Free Online Converter | ConvertCraft</title>
        <meta
          name="description"
          content={`Convert ${converter.sourceFormat.toUpperCase()} to ${converter.targetFormat.toUpperCase()} instantly for free. ${
            converter.description
          } No registration required, preserve quality, batch conversion support.`}
        />
        <meta
          name="keywords"
          content={`
            ${converter.title.toLowerCase()}, ${converter.sourceFormat} to ${
            converter.targetFormat
          }, free ${converter.sourceFormat} to ${
            converter.targetFormat
          } converter, 
            online ${converter.sourceFormat} to ${
            converter.targetFormat
          } converter, convert ${converter.sourceFormat} to ${
            converter.targetFormat
          } free,
            ${converter.sourceFormat} to ${
            converter.targetFormat
          } online tool, ${converter.sourceFormat} ${
            converter.targetFormat
          } conversion,
            ${getConverterSpecificKeywords(converter)}
          `}
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content={`${converter.title} - Free Online Converter | ConvertCraft`}
        />
        <meta
          property="og:description"
          content={`Convert ${converter.sourceFormat.toUpperCase()} to ${converter.targetFormat.toUpperCase()} instantly. Free, fast, and no registration required.`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://ConvertCraft.vercel.app/converter/${converter.url}`}
        />
        <meta
          property="og:image"
          content="https://ConvertCraft.vercel.app/converter-og-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${converter.title} Converter | ConvertCraft`}
        />
        <meta
          name="twitter:description"
          content={`Free online ${converter.sourceFormat} to ${converter.targetFormat} converter. Instant results, no registration.`}
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href={`https://ConvertCraft.vercel.app/converter/${converter.url}`}
        />
      </Helmet>

      <div className="flex flex-col items-center min-h-screen bg-gray-100 text-gray-900 font-sans p-4">
        {/* Success Notification */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              <span>Conversion completed successfully!</span>
            </div>
          </motion.div>
        )}

        {/* Hero Section with History Link */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full text-center py-20 md:py-32 bg-gradient-to-r from-pink-500 to-purple-600 rounded-b-3xl text-white shadow-xl relative"
        >
          {/* History Link Banner */}
          {isAuthenticated && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute top-6 right-6"
            >
              <Link
                to="/history"
                className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 rounded-2xl px-6 py-3 flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex items-center gap-2">
                  <History className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">View History</span>
                </div>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-7xl font-extrabold tracking-tight"
          >
            {converter.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-lg md:text-2xl font-light max-w-3xl mx-auto"
          >
            {converter.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <Button
              onClick={handleBack}
              className="px-6 py-3 rounded-full text-sm font-bold bg-white/20 hover:bg-white/30 border border-white/30"
            >
              &larr; Back to Tools
            </Button>
          </motion.div>
        </motion.div>

        {/* History Quick Access Card */}
        {isAuthenticated && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-4xl mb-4 mt-4 px-4"
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Track Your Conversions
                    </h3>
                    <p className="text-blue-100 text-sm">
                      Access your complete conversion history
                    </p>
                  </div>
                </div>
                <Link
                  to="/history"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <History className="h-4 w-4" />
                  View History
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Upload Section */}
        <main className="-mt-8 w-full max-w-6xl px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Upload Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 bg-white shadow-2xl rounded-3xl border border-gray-200 p-8 md:p-12 flex flex-col items-center gap-8"
            >
              <h2 className="text-2xl font-semibold text-center text-gray-900">
                Upload Your {converter.sourceFormat.toUpperCase()} File
              </h2>

              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
                accept={`${converter.sourceMimeType},.${converter.sourceFormat}`}
              />

              <div
                className={`w-full p-8 md:p-12 border-4 border-dashed rounded-2xl transition-colors duration-300 cursor-pointer text-center
                ${
                  isDragging
                    ? "border-pink-500 bg-pink-50"
                    : "border-gray-300 bg-gray-50"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H16a4 4 0 01-4-4v-12m16-4h.008v.008h-.008z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="mt-2 text-sm text-gray-600">
                  <span className="font-medium text-pink-600 hover:text-pink-500">
                    Click to upload
                  </span>{" "}
                  or drag and drop
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  {converter.sourceFormat.toUpperCase()} files only
                </p>
              </div>

              {sourceFilePreviewUrl && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full text-center mt-4"
                >
                  <img
                    src={sourceFilePreviewUrl}
                    alt="uploading image"
                    className="max-w-full max-h-64 mx-auto rounded-lg"
                  />
                  <p className="text-sm text-gray-500 mt-2">{file?.name}</p>
                </motion.div>
              )}

              <Button
                onClick={handleConvert}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                disabled={isLoading || !file}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Converting...
                  </div>
                ) : (
                  "Convert File"
                )}
              </Button>

              {/* ✅ IMPROVED ERROR DISPLAY - FIXED VISIBILITY */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full mt-4 p-4 bg-red-50 border border-red-200 rounded-xl"
                >
                  <p className="text-red-700 font-semibold text-center text-sm md:text-base">
                    {error}
                  </p>
                  {(error.includes("guest") ||
                    error.includes("free plan") ||
                    error.includes("limit") ||
                    error.includes("MB")) && (
                    <div className="mt-2 flex justify-center">
                      <button
                        onClick={() => {
                          setShowLimitModal(true);
                        }}
                        className="text-red-600 hover:text-red-800 text-sm font-medium underline"
                      >
                        View Details
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </motion.div>

            {/* Converted File Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 bg-white shadow-2xl rounded-3xl border border-gray-200 p-8 md:p-12 flex flex-col items-center justify-center"
            >
              <h2 className="text-2xl font-semibold text-center text-gray-900">
                Converted {converter.targetFormat.toUpperCase()} File
              </h2>
              {convertedFileUrl ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <img
                    src={convertedFileUrl}
                    alt="result image"
                    className="max-w-full max-h-64 rounded-lg"
                  />
                  <Button
                    onClick={handleDownload}
                    className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white"
                  >
                    Download {converter.targetFormat.toUpperCase()} File
                  </Button>

                  {/* Success Message */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <p className="text-green-700 text-sm font-medium">
                      ✅ Conversion saved to your history!
                    </p>
                  </motion.div>
                </motion.div>
              ) : (
                <p className="text-gray-500 mt-4">
                  Converted {converter.targetFormat.toUpperCase()} file will
                  appear here.
                </p>
              )}
            </motion.div>
          </div>
        </main>

        {/* Feature Sections */}
        <section className="w-full max-w-6xl mt-20 px-4">
          <FeatureSection
            title="Fast and Reliable Conversion"
            description="Our advanced conversion technology ensures your files are converted quickly without compromising quality."
            imageUrl={mediaImage}
            features={[
              "Lightning-fast conversion process",
              "Maintains original quality",
              "Secure file handling",
              "Batch processing available",
            ]}
          />

          <FeatureSection
            reverse
            title="Professional Quality Results"
            description="Get professional-grade converted files suitable for any project or platform."
            imageUrl={media2Image}
            features={[
              "High-quality output",
              "Multiple format support",
              "Optimized for web and print",
              "Preserves metadata",
            ]}
          />

          <FeatureSection
            title="Easy to Use Interface"
            description="Simple drag-and-drop interface makes converting files effortless for everyone."
            imageUrl={media3Image}
            features={[
              "Intuitive drag-and-drop",
              "Real-time preview",
              "One-click conversion",
              "Mobile-friendly design",
            ]}
          />

          <FeatureSection
            reverse
            title="Secure and Private"
            description="Your files are safe with us. We automatically delete converted files after download."
            imageUrl={media4Image}
            features={[
              "End-to-end encryption",
              "Automatic file deletion",
              "No third-party sharing",
              "Privacy guaranteed",
            ]}
          />
        </section>

        {/* CTA Banner with History Emphasis */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-6xl mt-12 mb-20 px-4"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white rounded-full"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white rounded-full"></div>
            </div>

            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 relative z-10"
            >
              Track Your Progress
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg mb-6 relative z-10"
            >
              Every conversion is saved to your personal history. Review,
              download, and manage your files anytime.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            >
              <Link
                to="/history"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center"
              >
                <History className="h-5 w-5" />
                View Conversion History
              </Link>
              <Button
                onClick={handleBack}
                className="bg-transparent border-2 border-white text-white hover:bg-white/10"
              >
                Explore More Tools
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Limit Reached Modal */}
        {showLimitModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl max-w-lg w-full text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {userRole === "guest"
                  ? "Guest User Limit Reached"
                  : "Daily Limit Reached"}
              </h3>
              <p className="mt-2 text-gray-700">
                {userRole === "guest"
                  ? "You have hit the free guest user limit. Please log in to continue converting files with higher limits."
                  : "You've reached your daily conversion limit. It will reset tomorrow."}
              </p>

              <div className="mt-6 w-full flex flex-col gap-3">
                {userRole === "guest" && (
                  <Button
                    onClick={() => {
                      setShowLimitModal(false);
                      navigate("/login");
                    }}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                  >
                    Log In to Continue
                  </Button>
                )}
                <button
                  onClick={() => {
                    setShowLimitModal(false);
                    setError(null);
                  }}
                  className="text-gray-600 hover:text-gray-800 font-semibold py-2"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Converter;
