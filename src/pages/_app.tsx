import '../styles/globals.css';
import { UserProvider } from '../context/user-context';

const MyApp = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
};

export default MyApp;
