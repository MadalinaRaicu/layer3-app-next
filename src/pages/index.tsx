import { useState } from 'react';
import { UserCard } from '@/components/user-card';
import { useUsers } from '@/context/user-context';

const HomePage = () => {
  const { users, loading, error } = useUsers();
  const [searchTerm, setSearchTerm] = useState('');

  if (loading) return <div className='text-center'>Loading...</div>;
  if (error)
    return <div className='text-center text-red-500'>Error: {error}</div>;

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container mx-auto p-4 flex flex-col gap-6 lg:gap-12'>
      <h1 className='text-3xl font-bold mb-6 text-center'>
        Layer3 Leaderboard
      </h1>
      <input
        type='text'
        placeholder='Search users'
        className='w-full p-2 mb-4 bg-gray-800 text-white rounded-lg'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {filteredUsers.map((user, i) => (
          <UserCard
            key={user.address}
            user={user}
            place={i + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
