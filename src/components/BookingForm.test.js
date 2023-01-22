import {
  RouterProvider,
  createMemoryRouter,
  createBrowserRouter,
} from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import routesConfig from '../context/routes';
import Main from '../screens/Main';
import ErrorPage from '../components/ErrorPage';

test('click ', async () => {
  render(
    <RouterProvider
      router={createMemoryRouter({
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
      })}
    />
  );

  // make assertions, await changes, etc...
});
