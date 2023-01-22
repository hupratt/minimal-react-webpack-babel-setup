import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './screens/WelcomeScreen';
import AboutScreen from './screens/AboutScreen';
import { AlertProvider } from './context/alertContext';
import React, { useState, useEffect } from 'react';
import './style.css';
import BookingForm from './components/BookingForm';
import Alert from './components/Alert';

import littleLemonHeader from './images/littleLemonHeader.png';
import { Outlet, Link } from 'react-router-dom';

let randomDates = [];

for (var j = 21; j < 31; j++) {
  for (var i = 15; i < 22; i++) {
    randomDates.push(new Date(2023, 1, j, i, 0));
  }
}

export default function Main() {
  const [availableTimes, setavailableTimes] = useState(randomDates);
  return (
    <React.Fragment>
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
                  Book A Table
                </Link>
              </li>
            </ul>
          </nav>

          <div style={styles.container}>
            <Outlet
              availableTimes={availableTimes}
              setavailableTimes={setavailableTimes}
            />
          </div>
          <div style={styles.footerContainer}>
            <LittleLemonFooter />
          </div>
          <Alert />
        </main>
      </AlertProvider>
    </React.Fragment>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  footerContainer: { backgroundColor: '#fff' },
};
