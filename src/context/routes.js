import * as React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  createMemoryRouter,
} from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import ErrorPage from '../components/ErrorPage';
import MenuItems from '../components/MenuItems';
import ConfirmedBooking from '../components/ConfirmedBooking';
import AboutScreen from '../screens/AboutScreen';
import Main from '../screens/Main';

const routesConfig = [
  {
    path: '/',
    element: <Main />,
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
      {
        path: 'bookingconfirmed',
        element: <ConfirmedBooking />,
      },
    ],
  },
];

const router = createBrowserRouter(routesConfig, {
  initialEntries: ['/'],
});

export default function ReactRouterRoutes() {
  return <RouterProvider router={router} />;
}
