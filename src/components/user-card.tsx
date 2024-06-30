import Link from 'next/link';
import type { User } from '../types/user';

interface UserCardProps {
  user: User;
  place: number;
}

export const UserCard = ({ user, place }: UserCardProps) => (
  <div className='border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200'>
    <h2 className='text-xl font-semibold mb-2'>
      #{place} {user.username}
    </h2>
    <p className='text-gray-300 mb-4'>XP: {user.xp}</p>
    <Link href={`/user/${user.address}`}>
      <span className='text-blue-500 hover:underline'>View Details</span>
    </Link>
  </div>
);
