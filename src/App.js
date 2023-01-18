import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './screens/WelcomeScreen';
import AboutScreen from './screens/AboutScreen';

import './style.css';
import BookATable from './screens/BookATable';


export default function App() {
  return (
    <>
      <div style={styles.container}>
        {/* <BookATable /> */}
        <WelcomeScreen />
        {/* <AboutScreen /> */}

      </div>
      <div style={styles.footerContainer}>
        <LittleLemonFooter />
      </div>
    </>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  footerContainer: { backgroundColor: '#fff' },
};
