import React from 'react';
import { UserCard } from '../components/user-card';
import { useUsers } from '../context/user-context';
const HomePage = () => {
  const { users, loading, error } = useUsers();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log('Users:', users);

  return (
    <div>
      <h1>Top Users</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {users.map((user) => (
          <UserCard
            key={user.address}
            user={user}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
