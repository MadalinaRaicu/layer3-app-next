import Link from 'next/link';
import type { User } from '../types/user';

interface UserCardProps {
  user: User;
  place: number;
}

export const UserCard = ({ user, place }: UserCardProps) => (
  <Link href={`/user/${user.address}`}>
    <div className='card group text-center'>
      <h2 className='text-xl font-semibold mb-2'>
        #{place} {user.username}
      </h2>
      <p className='text-gray-300 mb-4'>XP: {user.xp}</p>
      <span className='text-blue-500 group-hover:underline underline-offset-4'>
        View Details
      </span>
    </div>
  </Link>
);
