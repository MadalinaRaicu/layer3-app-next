import Link from 'next/link';
import type { User } from '../types/user';

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => (
  <div className='border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200'>
    <h2 className='text-xl font-semibold mb-2'>{user.username}</h2>
    <p className='text-gray-300 mb-4'>XP: {user.xp}</p>
    <Link href={`/user/${user.address}`}>
      <span className='text-blue-500 hover:underline'>View Details</span>
    </Link>
  </div>
);
