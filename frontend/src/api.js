import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1';

export const generateContent = async (prompt) => {
    try {
        const response = await axios.post(`${API_URL}/generate`, { prompt });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || error.message);
    }
};

export const verifyContent = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/verify`, data);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || error.message);
    }
};
