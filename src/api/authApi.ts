/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL || "https://imageconverter-acsq.onrender.com/api";

// ✅ CRITICAL: Configure axios for cross-domain cookies
axios.defaults.withCredentials = true;
axios.defaults.baseURL = API_URL;

// ✅ Add response interceptor to debug cookie issues
axios.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API Error:", error.response?.status, error.response?.data);
        if (error.response?.status === 401) {
            console.log("🛑 401 Unauthorized - Cookie issue detected");
        }
        return Promise.reject(error);
    }
);

export async function loginUser(email: string, password: string) {
    const res = await axios.post(`/auth/login`, { email, password }, {
        withCredentials: true // ✅ Ensure credentials are sent
    });
    return res.data;
}

export async function registerUser(name: string, email: string, password: string) {
    const res = await axios.post(`/auth/register`, {
        name,
        email,
        password,
    }, {
        withCredentials: true // ✅ Ensure credentials are sent
    });
    return res.data;
}

export async function logoutUser() {
    try {
        await axios.post(`/auth/logout`, {}, {
            withCredentials: true // ✅ Ensure credentials are sent
        });
        console.log("✅ Logout API call successful");
        return true;
    } catch (error) {
        console.error("❌ Logout API error:", error);
        return true;
    }
}

export const getUserInfo = async () => {
    try {
        const response = await axios.get(`/user/info`, {
            withCredentials: true // ✅ Ensure credentials are sent
        });
        return response.data;
    } catch (error: any) {
        console.error("❌ getUserInfo failed:", error.response?.status);
        throw error;
    }
};