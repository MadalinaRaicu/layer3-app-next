import { useRouter } from 'next/router';
import { UserDetails } from '../../components/user-details';
import { useUsers } from '../../context/user-context';

const UserPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { users, loading, error } = useUsers();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const user = users.find((user) => user.address === id);

  if (!user) {
    return <div>User not found</div>;
  }

  return <UserDetails user={user} />;
};

export default UserPage;
