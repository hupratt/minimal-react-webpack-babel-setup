import LittleLemonFooter from './LittleLemonFooter';
import WelcomeScreen from '../screens/WelcomeScreen';
import AboutScreen from '../screens/AboutScreen';
import { AlertProvider } from '../context/alertContext';
import React, { useState, useEffect } from 'react';
import './style.css';
import BookingForm from '../components/BookingForm';
import Alert from './Alert';

import littleLemonHeader from '../images/littleLemonHeader.png';
import { Outlet, Link } from 'react-router-dom';

export default function NavBarFooter() {
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
            <Outlet />
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
