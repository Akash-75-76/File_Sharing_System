import axios from 'axios';

// Use relative URL when in production (same server)
// Use full URL when in development (localhost)
const API_URL = process.env.REACT_APP_API_URL || '';

export const uploadFile=async (data)=>{
    try {
        let response= await axios.post(`${API_URL}/upload`,data);
        return response.data;
    } catch (error) {
        console.log("Error while calling the api",error.message)
    }
}