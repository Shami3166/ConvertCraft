/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "https://imageconverter-acsq.onrender.com/api";

export async function submitContactMessage(contactData: any) {
    const token = localStorage.getItem("token");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    const res = await axios.post(`${API_URL}/contact`, contactData, { headers });
    return res.data;
}
