import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import logo from './images/logo.png';
import NavBarFooter from './components/NavBarFooter';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import BookATable from './screens/BookATable';
import WelcomeScreen from './screens/WelcomeScreen';
import AboutScreen from './screens/AboutScreen';
import MenuItems from './components/MenuItems';
import ErrorPage from './components/ErrorPage';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <NavBarFooter>
        <WelcomeScreen />
      </NavBarFooter>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/book/',
    element: (
      <NavBarFooter>
        <BookATable />
      </NavBarFooter>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/about/',
    element: (
      <NavBarFooter>
        <AboutScreen />
      </NavBarFooter>
    ),
    errorElement: <ErrorPage />,
  },

  {
    path: '/menu/',
    element: (
      <NavBarFooter>
        <MenuItems />
      </NavBarFooter>
    ),
    errorElement: <ErrorPage />,
  },
]);

root.render(
  <StrictMode>
    <link rel="icon" href={logo} />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
    />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="This is the website of the little lemon restaurant"
    />
    <meta name="og:title" content="Little lemon website" />
    <meta
      name="og:description"
      content="Come check out our menu, book a table and even order online"
    />
    <meta name="og:image" content={logo} />
    <link rel="apple-touch-icon" href={logo} />
    <link rel="manifest" href="/manifest.json" />

    <RouterProvider router={router} />
  </StrictMode>
);
