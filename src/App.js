import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './screens/WelcomeScreen';
import AboutScreen from './screens/AboutScreen';
import { ChakraProvider } from '@chakra-ui/react';
import { AlertProvider } from './context/alertContext';

import './style.css';
import BookATable from './screens/BookATable';
import Alert from './components/Alert';

export default function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <div style={styles.container}>
            <BookATable />
            <WelcomeScreen />
            <AboutScreen />
          </div>
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
