export interface NFT {
    tokenId: string;
    name: string;
    description?: string;
    image?: string;
    owner?: string;
    price?: number;
    likes?: number;
    tags?: string[];
}