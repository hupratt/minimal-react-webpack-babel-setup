import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import logo from './images/logo.png';
import ReactRouterRoutes from './context/routes';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

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
    <ReactRouterRoutes />
  </StrictMode>
);
