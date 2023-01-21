import * as React from 'react';
import NavBarFooter from '../components/NavBarFooter';
import BookingForm from '../components/BookingForm';
import WelcomeScreen from '../screens/WelcomeScreen';
import AboutScreen from '../screens/AboutScreen';
import MenuItems from '../components/MenuItems';
import ErrorPage from '../components/ErrorPage';
import {
  BrowserRouter,
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
  useNavigate,
  useRouteError,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBarFooter />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <BookingForm />,
      },
      {
        path: 'book',
        element: <BookingForm />,
      },
      {
        path: 'about',
        element: <AboutScreen />,
      },
      {
        path: 'menu',
        element: <MenuItems />,
      },
    ],
  },
]);

export default function ReactRouterRoutes() {
  return <RouterProvider router={router} />;
}
