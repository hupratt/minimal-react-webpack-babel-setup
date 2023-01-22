import LittleLemonFooter from '../components/LittleLemonFooter';
import { AlertProvider } from '../context/alertContext';
import React, { useState, useReducer } from 'react';
import './style.css';
import Alert from '../components/Alert';

import littleLemonHeader from '../images/littleLemonHeader.png';
import { Outlet, Link } from 'react-router-dom';
import reducer from '../reducers';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';

const initializeTimes = () => {
  let randomDates = [];
  for (var j = 21; j < 31; j++) {
    for (var i = 15; i < 22; i++) {
      randomDates.push(new Date(2023, 1, j, i, 0));
    }
  }
  return randomDates;
};

const initialState = {
  startDate: setHours(setMinutes(new Date(), 30), 16),
  availableTimes: initializeTimes(),
};

export default function Main() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { startDate, availableTimes } = state;
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
            <Outlet context={[startDate, availableTimes, dispatch]} />
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
