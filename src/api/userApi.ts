/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "https://imageconverter-acsq.onrender.com/api";

// Configure axios to include credentials (cookies) in all requests
axios.defaults.withCredentials = true;

export interface Conversion {
    id: string;
    fileName: string;
    originalFormat: string;
    convertedFormat: string;
    size: number;
    date: string;
    user?: {
        name: string;
        email: string;
        role: string;
    };
}

export const getConversionHistory = async (): Promise<Conversion[]> => {
    try {
        const response = await axios.get(`${API_URL}/user/history`);
        return response.data;
    } catch (error: any) {
        if (error.response?.status === 401) {
            // User is not authenticated (guest) - this is normal
            return [];
        }
        console.error("❌ API Error:", error.response?.data || error.message);
        return [];
    }
};

export const getUserInfo = async () => {
    try {
        const response = await axios.get(`${API_URL}/user/info`);
        return response.data;
    } catch (error: any) {
        if (error.response?.status === 401) {
            // User is not authenticated - return guest data
            return { role: "guest", conversionCount: 0 };
        }
        console.error("Failed to fetch user info:", error);
        return { role: "guest", conversionCount: 0 };
    }
};

export const upgradePlan = async (): Promise<{ success: boolean }> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("Mock API: Request to upgrade plan received.");
    return { success: true };
};