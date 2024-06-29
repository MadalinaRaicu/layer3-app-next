import React from 'react';
import Link from 'next/link';

export const UserCard = ({ user }) => (
  <div className='border p-4 rounded-lg grid grid-cols-3'>
    <h2>{user.username}</h2>
    <p>XP: {user.xp}</p>
    <Link
      href={`/user/${user.address}`}
      className='text-blue-500'
    >
      View Details
    </Link>
  </div>
);
