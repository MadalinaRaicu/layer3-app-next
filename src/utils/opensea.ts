// Temporary keys: This would normally be taken out of an .env file
const OPENSEA_API_KEY = '0a8e01919bf8457596413ab05125791e';
const OPENSEA_API_URL = 'https://api.opensea.io/api/v2/chain/ethereum/account';

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

        const nfts = data.nfts?.map((asset) => ({
            name: asset.name || asset.description,
            imageUrl: asset.display_image_url,
            description: asset.description,
            tokenId: asset.identifier,
        }));

        return nfts;
    } catch (error) {
        console.error('Error fetching NFTs:', error);
        return [];
    }
};
