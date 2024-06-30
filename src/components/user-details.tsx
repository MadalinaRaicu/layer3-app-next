import { useEffect, useState } from 'react';
import { fetchUserBalance, fetchUserTransactions } from '../utils/etherscan';
import type { NFT, Transaction } from '../types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { fetchUserNFTs } from '../utils/opensea';

export const UserDetails = ({ user }) => {
  const [balance, setBalance] = useState<number | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [nfts, setNFTs] = useState<NFT[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('NFTs');

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

  if (loading) return <div className='text-center mt-6'>Loading...</div>;
  if (error)
    return <div className='text-center text-red-500 mt-6'>Error: {error}</div>;

  return (
    <div>
      <div className='relative flex h-72 w-full items-center justify-center ng-star-inserted'>
        <div className='absolute top-0 left-0 h-full w-full object-cover object-center bg-gray-100 dark:bg-gray-700'>
          <div className='absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900' />
        </div>
      </div>

      <div className='container mx-auto p-4 w-full flex flex-col gap-8 lg:gap-12'>
        <div className='flex flex-col gap-6 w-full'>
          <h1 className='text-2xl md:text-4xl font-bold'>{user.username}</h1>

          <div className='flex items-center gap-4 lg:gap-8 flex-wrap'>
            <div className='flex flex-col gap-1'>
              <h2 className='text-xl font-medium'>XP</h2>
              <p className='text-md text-gray-300'>{user.xp}</p>
            </div>
            <div className='flex flex-col gap-1'>
              <h2 className='text-xl font-medium'>Balance</h2>
              <p className='text-md text-gray-300'>{balance} ETH</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='border-b border-b-gray-800 flex gap-6 items-center justify-start md:overflow-x-visible overflow-x-scroll w-full whitespace-nowrap'>
            <button
              type='button'
              className={`py-2 px-4 ${
                activeTab === 'NFTs'
                  ? 'border-b border-b-white text-white'
                  : 'text-gray-200'
              }`}
              onClick={() => setActiveTab('NFTs')}
            >
              NFTs
            </button>
            <button
              type='button'
              className={`py-2 px-4 ${
                activeTab === 'Transactions'
                  ? 'border-b border-b-white text-white'
                  : 'text-gray-200'
              }`}
              onClick={() => setActiveTab('Transactions')}
            >
              Latest Transactions
            </button>
          </div>

          {activeTab === 'NFTs' && (
            <div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {nfts.map((nft, i) => (
                  <div
                    key={i}
                    className='card'
                  >
                    <img
                      src={nft.imageUrl}
                      alt={nft.name}
                      className='w-full h-48 object-cover mb-2 rounded-lg'
                    />
                    <h3 className='text-lg font-semibold text-ellipsis'>
                      {nft.name}
                    </h3>
                    {/* <p className='text-gray-400'>{nft.description}</p> */}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Transactions' && (
            <div>
              <div className='table overflow-x-auto'>
                <table className='min-w-full bg-gray-800'>
                  <thead>
                    <tr>
                      <th className='py-2 px-4 border-b border-gray-700 text-left'>
                        Hash
                      </th>
                      <th className='py-2 px-4 border-b border-gray-700 text-right'>
                        Value
                      </th>
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
                              <span className='ml-2 text-green-500'>
                                Copied!
                              </span>
                            )}
                          </div>
                        </td>
                        <td className='py-2 px-4 border-b border-gray-700 text-right'>
                          {tx.value} ETH
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
