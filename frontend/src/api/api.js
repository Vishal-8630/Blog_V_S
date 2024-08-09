import axios from 'axios';

// Function to make a GET request
export const get = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Function to make a POST request
export const post = async (url, data) => {
    try {
        const response = await axios.post(url, data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Function to make a PUT request
export const put = async (url, data) => {
    try {
        const response = await axios.put(url, data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Function to make a DELETE request
export const del = async (url) => {
    try {
        const response = await axios.delete(url);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};