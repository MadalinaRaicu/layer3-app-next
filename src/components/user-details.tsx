import { useEffect, useState } from 'react';
import {
  fetchUserBalance,
  fetchUserTransactions,
  fetchUserNFTs
} from '../utils/etherscan';
import type { User } from '../types/user';
import type { Transaction } from 'ethers';
import type { NFT } from '../types/nft';

interface UserDetailsProps {
  user: User;
}

export const UserDetails = ({ user }: UserDetailsProps) => {
  const [balance, setBalance] = useState<number>();
  const [transactions, setTransactions] = useState([]);
  const [nfts, setNFTs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const balanceData = await fetchUserBalance(user.address);
        setBalance(balanceData);

        const transactionsData = await fetchUserTransactions(user.address);
        setTransactions(transactionsData);

        const nftsData = await fetchUserNFTs(user.address);
        setNFTs(nftsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user.address]);

  if (loading) return <div className='text-center'>Loading...</div>;
  if (error)
    return <div className='text-center text-red-500'>Error: {error}</div>;

  console.log({ balance, transactions, nfts });

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>{user.username}</h1>
      <p className='text-gray-700 mb-4'>XP: {user.xp}</p>
      <div className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>Balance</h2>
        <p className='text-gray-700'>{balance} ETH</p>
      </div>
      <div className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>Latest Transactions</h2>
        <ul className='list-disc pl-5'>
          {transactions.map((tx: Transaction) => (
            <li
              key={tx.hash}
              className='text-gray-700'
            >
              {tx.hash} - {tx.value} ETH
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className='text-xl font-semibold mb-2'>NFTs</h2>
        <ul className='list-disc pl-5'>
          {nfts.map((nft: NFT) => (
            <li
              key={nft.tokenId}
              className='text-gray-700'
            >
              {nft.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
