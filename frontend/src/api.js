import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const generateContent = async (prompt) => {
    const response = await axios.post(`${API_URL}/generate`, { prompt });
    return response.data;
};

export const verifyContent = async (data) => {
    const response = await axios.post(`${API_URL}/verify`, data);
    return response.data;
};
