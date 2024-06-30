import axios from 'axios';

const API_URL = '/api/assignment/users';
// const API_URL = 'https://layer3.xyz/api/assignment/users';

export const fetchUsers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data.users; // Adjust this based on the actual response structure
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};