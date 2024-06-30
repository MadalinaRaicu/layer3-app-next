import { useEffect, useState } from 'react';
import {
  fetchUserBalance,
  fetchUserTransactions,
  fetchUserNFTs
} from '../utils/etherscan';
import type { NFT, Transaction } from '../types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const UserDetails = ({ user }) => {
  const [balance, setBalance] = useState<number | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [nfts, setNFTs] = useState<NFT[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (hash: string) => {
    setCopied(hash);
    setTimeout(() => setCopied(null), 2000); // Clear the copied state after 2 seconds
  };

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

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>{user.username}</h1>
      <p className='text-gray-300 mb-4'>XP: {user.xp}</p>
      <div className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>Balance</h2>
        <p className='text-gray-300'>{balance} ETH</p>
      </div>
      <div className='flex flex-row gap-6'>
        <div>
          <h2 className='text-xl font-semibold mb-2'>NFTs</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {nfts.map((nft) => (
              <div
                key={nft.imageUrl}
                className='card'
              >
                <img
                  src={nft.imageUrl}
                  alt={nft.name}
                  className='w-full h-48 object-cover mb-2 rounded-lg'
                />
                <h3 className='text-lg font-semibold'>{nft.name}</h3>
                {/* <p className='text-gray-400'>{nft.description}</p> */}
              </div>
            ))}
          </div>
        </div>
        <div className='mb-6'>
          <h2 className='text-xl font-semibold mb-2'>Latest Transactions</h2>
          <div className='table overflow-x-auto'>
            <table className='min-w-full bg-gray-800'>
              <thead>
                <tr>
                  <th className='py-2 px-4 border-b border-gray-700'>Hash</th>
                  <th className='py-2 px-4 border-b border-gray-700'>Value</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr key={tx.hash}>
                    <td className='py-2 px-4 border-b border-gray-700'>
                      <div className='flex items-center'>
                        <span className='truncate w-32'>{tx.hash}</span>
                        <CopyToClipboard
                          text={tx.hash}
                          onCopy={() => handleCopy(tx.hash)}
                        >
                          <button
                            type='button'
                            className='ml-2 text-blue-500 hover:text-blue-300'
                            onClick={() => handleCopy(tx.hash)}
                          >
                            Copy
                          </button>
                        </CopyToClipboard>
                        {copied === tx.hash && (
                          <span className='ml-2 text-green-500'>Copied!</span>
                        )}
                      </div>
                    </td>
                    <td className='py-2 px-4 border-b border-gray-700'>
                      {tx.value} ETH
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
