export interface NFT {
    tokenId: string;
    name: string;
    description?: string;
    imageUrl?: string;
    owner?: string;
    price?: number;
    likes?: number;
    tags?: string[];
}