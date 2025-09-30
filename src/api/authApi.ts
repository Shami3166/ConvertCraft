import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api"

// Configure axios to include credentials (cookies) in all requests
axios.defaults.withCredentials = true;

export async function loginUser(email: string, password: string) {
    const res = await axios.post(`${API_URL}/auth/login`, { email, password })
    return res.data
}

export async function registerUser(name: string, email: string, password: string) {
    const res = await axios.post(`${API_URL}/auth/register`, {
        name,
        email,
        password,
    })
    return res.data
}

export async function logoutUser() {
    try {
        await axios.post(`${API_URL}/auth/logout`);
        console.log("✅ Logout API call successful");
        return true;
    } catch (error) {
        console.error("❌ Logout API error:", error);
        // Still return true to clear frontend state even if API call fails
        return true;
    }
}

export const getUserInfo = async () => {
    try {
        const response = await axios.get(`${API_URL}/user/info`);
        return response.data;
    } catch {
        throw new Error("Failed to fetch user info");
    }
};