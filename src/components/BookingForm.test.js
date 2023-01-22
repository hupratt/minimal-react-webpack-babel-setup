import { render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage';
import BookingForm from '../components/BookingForm';

test('click ', async () => {
  render(
    <RouterProvider
      router={createMemoryRouter({
        path: '/',
        element: <BookingForm />,
        errorElement: <ErrorPage />,
      })}
    />
  );

  // make assertions, await changes, etc...
});
