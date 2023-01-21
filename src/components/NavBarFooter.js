import LittleLemonFooter from './LittleLemonFooter';
import WelcomeScreen from '../screens/WelcomeScreen';
import AboutScreen from '../screens/AboutScreen';
import { ChakraProvider } from '@chakra-ui/react';
import { AlertProvider } from '../context/alertContext';

import './style.css';
import BookATable from '../screens/BookATable';
import Alert from './Alert';
import littleLemonHeader from '../images/littleLemonHeader.png';
import { Link } from 'react-router-dom';

export default function NavBarFooter({ children }) {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <header>
            <img src={littleLemonHeader} />
          </header>
          <nav className="stroke">
            <ul>
              <li>
                <Link to="/" className="active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="about/" className="">
                  About
                </Link>
              </li>
              <li>
                <Link to="menu/" className="">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="book/" className="">
                  Book
                </Link>
              </li>
            </ul>
          </nav>

          <div style={styles.container}>{children}</div>
          <div style={styles.footerContainer}>
            <LittleLemonFooter />
          </div>
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  footerContainer: { backgroundColor: '#fff' },
};
