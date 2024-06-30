import axios from 'axios';

// This would normally be taken out of an .env.local file
const ETHERSCAN_API_KEY = 'V45VNRVH8K516B33KJ7JF12YVZD5YVF977';
const OPENSEA_API_KEY = '0a8e01919bf8457596413ab05125791e';

const ETHERSCAN_API_URL = 'https://api.etherscan.io/api';
const OPENSEA_API_URL = 'https://api.opensea.io/api/v2/chain/ethereum/account';

export const fetchUserBalance = async (address) => {
    const response = await axios.get(`${ETHERSCAN_API_URL}?module=account&action=balance&address=${address}&tag=latest&apikey=${ETHERSCAN_API_KEY}`);
    return response.data.result / 1e18;
};

export const fetchUserTransactions = async (address) => {
    const response = await axios.get(`${ETHERSCAN_API_URL}?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&apikey=${ETHERSCAN_API_KEY}`);
    return response.data.result;
};

export const fetchUserNFTs = async (address: string) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'X-API-KEY': OPENSEA_API_KEY,
        },
    };

    try {
        const response = await fetch(`${OPENSEA_API_URL}/${address}/nfts`, options);
        const data = await response.json();

        console.log('opensea data:', data)

        const nfts = data.nfts?.map((asset) => ({
            tokenId: asset.token_id,
            name: asset.name || asset.description,
            imageUrl: asset.opensea_url,
            description: asset.description,
        }));

        return nfts;
    } catch (error) {
        console.error('Error fetching NFTs:', error);
        return [];
    }
};
