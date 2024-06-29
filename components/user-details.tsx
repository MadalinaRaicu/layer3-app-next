import { useEffect, useState } from 'react';
import {
  fetchUserBalance,
  fetchUserTransactions,
  fetchUserNFTs
} from '../utils/etherscan';

export const UserDetails = ({ user }) => {
  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [nfts, setNFTs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  if (!user) return null;

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
  }, [user?.address]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{user.username}</h1>
      <p>XP: {user.xp}</p>
      <div>
        <h2>Balance</h2>
        <p>{balance} ETH</p>
      </div>
      <div>
        <h2>Latest Transactions</h2>
        <ul>
          {transactions.map((tx) => (
            <li key={tx.hash}>
              {tx.hash} - {tx.value} ETH
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>NFTs</h2>
        <ul>
          {nfts.map((nft) => (
            <li key={nft.tokenId}>{nft.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
