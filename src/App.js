import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './screens/WelcomeScreen';
import AboutScreen from './screens/AboutScreen';
import { ChakraProvider } from '@chakra-ui/react';
import { AlertProvider } from './context/alertContext';

import './style.css';
import BookATable from './screens/BookATable';

export default function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <div style={styles.container}>
          <BookATable />
          <WelcomeScreen />
          <AboutScreen />
        </div>
        <div style={styles.footerContainer}>
          <LittleLemonFooter />
        </div>
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
