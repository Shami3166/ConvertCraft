/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
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

    try {
        const response = await axios.post(`${API_URL}/convert`, formData, {
            responseType: 'blob',
            timeout: 120000,
        });

        console.log("✅ Conversion response received successfully");
        return response.data;

    } catch (err: any) {
        console.error("❌ Conversion API Error:", err);

        if (axios.isAxiosError(err) && err.response) {
            let errorMessage = 'Conversion failed. Please try again.';

            // Handle error response
            if (err.response.data instanceof Blob) {
                try {
                    const errorText = await err.response.data.text();
                    console.error("❌ Backend error response text:", errorText);

                    // Try to parse JSON from the text
                    try {
                        const errorJson = JSON.parse(errorText);
                        errorMessage = errorJson.message || errorMessage;
                    } catch {
                        // If it's not JSON, use the text directly if it looks like an error message
                        if (errorText && errorText.length < 500) { // reasonable error message length
                            errorMessage = errorText;
                        }
                    }
                } catch (blobError) {
                    console.error("❌ Error reading blob response:", blobError);
                }
            } else if (err.response.data && typeof err.response.data === 'object') {
                errorMessage = err.response.data.message || errorMessage;
            } else if (typeof err.response.data === 'string') {
                errorMessage = err.response.data;
            }

            console.log("🔍 Final error message:", errorMessage);

            // ✅ UPDATED: New user-friendly error messages
            if (errorMessage.includes('guest') && (errorMessage.includes('limit') || errorMessage.includes('50 MB'))) {
                errorMessage = "You've hit the guest user daily limit (50MB). Please login for 500MB daily limit.";
            } else if (errorMessage.includes('user') && errorMessage.includes('limit') && !errorMessage.includes('guest')) {
                errorMessage = "You've reached your daily conversion limit (500MB). It will reset tomorrow.";
            }

            throw new Error(errorMessage);
        } else {
            console.error("❌ Network error:", err.message);
            throw new Error('Network error. Please try again.');
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