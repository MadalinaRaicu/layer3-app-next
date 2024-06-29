import axios from 'axios';

const ETHERSCAN_API_KEY = 'V45VNRVH8K516B33KJ7JF12YVZD5YVF977';
const ETHERSCAN_API_URL = 'https://api.etherscan.io/api';

export const fetchUserBalance = async (address) => {
    const response = await axios.get(`${ETHERSCAN_API_URL}?module=account&action=balance&address=${address}&tag=latest&apikey=${ETHERSCAN_API_KEY}`);
    return response.data.result / 1e18;
};

export const fetchUserTransactions = async (address) => {
    const response = await axios.get(`${ETHERSCAN_API_URL}?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&apikey=${ETHERSCAN_API_KEY}`);
    return response.data.result;
};

export const fetchUserNFTs = async (address) => {
    // Use a third-party API like OpenSea to fetch NFTs
    // This is a placeholder function
    return [];
};
