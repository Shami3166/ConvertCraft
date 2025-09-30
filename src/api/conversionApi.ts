/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || "https://imageconverter-acsq.onrender.com/api";
axios.defaults.withCredentials = true;

export const uploadFile = async (file: File, targetFormat: string): Promise<Blob> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('targetFormat', targetFormat);

    console.log("📤 Sending conversion request:", {
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
        targetFormat: targetFormat
    });

    // ✅ NEW: Client-side file validation
    if (file.size === 0) {
        throw new Error("The selected file is empty. Please choose a valid file.");
    }

    if (file.size > 800 * 1024 * 1024) { // 800MB max
        throw new Error("File too large. Maximum size is 800MB. Please choose a smaller file.");
    }

    try {
        const response = await axios.post(`${API_URL}/convert`, formData, {
            responseType: 'blob',
            timeout: 120000, // 2 minutes timeout
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: (progressEvent) => {
                const percentCompleted = Math.round(
                    (progressEvent.loaded * 100) / (progressEvent.total || 1)
                );
                if (percentCompleted % 25 === 0) { // Log every 25% to avoid spam
                    console.log(`📤 Upload Progress: ${percentCompleted}%`);
                }
            },
        });

        console.log("✅ Conversion response received successfully");

        // ✅ Verify the response is actually a file
        if (response.data.size === 0) {
            throw new Error("Server returned an empty file. Conversion may have failed.");
        }

        return response.data;

    } catch (err: any) {
        console.error("❌ Conversion API Error:", err);

        // ✅ IMPROVED: Better error handling for different scenarios
        if (axios.isAxiosError(err) && err.response) {
            let errorMessage = 'Conversion failed. Please try again.';

            // Handle blob error responses
            if (err.response.data instanceof Blob) {
                try {
                    const errorText = await err.response.data.text();
                    console.error("❌ Backend error response:", errorText);

                    // Try to parse JSON from the text
                    try {
                        const errorJson = JSON.parse(errorText);
                        errorMessage = errorJson.message || errorMessage;
                    } catch {
                        // If it's not JSON, use the text directly if it looks reasonable
                        if (errorText && errorText.length < 500 && errorText.length > 0) {
                            errorMessage = errorText;
                        } else {
                            errorMessage = "Server returned an error but no clear message.";
                        }
                    }
                } catch (blobError) {
                    console.error("❌ Error reading blob response:", blobError);
                    errorMessage = "Server error during conversion.";
                }
            } else if (err.response.data && typeof err.response.data === 'object') {
                errorMessage = err.response.data.message || errorMessage;
            } else if (typeof err.response.data === 'string') {
                errorMessage = err.response.data;
            }

            console.log("🔍 Final error message:", errorMessage);

            // ✅ IMPROVED: User-friendly error messages
            if (errorMessage.includes('corrupted') || errorMessage.includes('premature') || errorMessage.includes('JPEG')) {
                errorMessage = "The image file appears to be corrupted. Please try with a different image file.";
            } else if (errorMessage.includes('empty')) {
                errorMessage = "The uploaded file is empty. Please select a valid file.";
            } else if (errorMessage.includes('unsupported') || errorMessage.includes('format')) {
                errorMessage = "The file format is not supported. Please check the file and try again.";
            } else if (errorMessage.includes('guest') && errorMessage.includes('limit')) {
                errorMessage = "Guest users are limited to 100MB files. Please log in for 800MB limit.";
            } else if (errorMessage.includes('user') && errorMessage.includes('limit')) {
                errorMessage = "File size exceeds 800MB limit. Please choose a smaller file.";
            }

            throw new Error(errorMessage);
        } else if (err.code === 'ECONNABORTED') {
            throw new Error("Conversion timeout - the server took too long to process. Please try again with a smaller file.");
        } else if (err.message === 'Network Error') {
            throw new Error("Network connection failed. Please check your internet and try again.");
        } else {
            console.error("❌ Unknown error:", err.message);
            throw new Error('Conversion failed. Please try again.');
        }
    }
};

/**
 * Fetches the list of all available converters from the backend.
 * @returns An array of converter objects.
 */
export const getAllConverters = async (): Promise<{ title: string; description: string; url: string }[]> => {
    try {
        const response = await axios.get(`${API_URL}/converters`);
        return response.data;
    } catch (err) {
        console.error('Failed to fetch converters, using fallback:', err);
        // Fallback to hardcoded list
        return [
            {
                title: "PNG to JPG",
                description: "Convert PNG images to high-quality JPG format.",
                url: "png-to-jpg",
            },
            {
                title: "JPG to PNG",
                description: "Convert JPG images to lossless PNG format.",
                url: "jpg-to-png",
            },
            {
                title: "PNG to WebP",
                description: "Convert PNG to modern WebP format for smaller file sizes.",
                url: "png-to-webp",
            },
            {
                title: "WebP to PNG",
                description: "Convert WebP images back to PNG format.",
                url: "webp-to-png",
            },
            {
                title: "JPG to WebP",
                description: "Convert JPG images to efficient WebP format.",
                url: "jpg-to-webp",
            },
            {
                title: "WebP to JPG",
                description: "Convert WebP images to universal JPG format.",
                url: "webp-to-jpg",
            },
            {
                title: "SVG to PNG",
                description: "Convert scalable SVG vectors to PNG raster images.",
                url: "svg-to-png",
            },
            {
                title: "SVG to JPG",
                description: "Convert SVG vectors to JPG raster images.",
                url: "svg-to-jpg",
            },
            {
                title: "HEIC to JPG",
                description: "Convert iPhone HEIC photos to universal JPG format.",
                url: "heic-to-jpg",
            },
            {
                title: "HEIC to PNG",
                description: "Convert HEIC images to lossless PNG format.",
                url: "heic-to-png",
            }
        ];
    }
};