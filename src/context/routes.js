import * as React from 'react';
import NavBarFooter from '../components/NavBarFooter';
import BookATable from '../screens/BookATable';
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
} from 'react-router-dom';

export default function ReactRouterRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  React.useEffect(() => {
    console.log(location.pathname);
    //navigate(location.pathname);
  }, [location]);
  return (
    <Routes>
      <Route path="/" element={<NavBarFooter />}>
        <Route path="*" element={<ErrorPage />} />
        <Route index element={<WelcomeScreen />} />
        <Route exact path="book" element={<BookATable />} />
        <Route exact path="about" element={<AboutScreen />} />
        <Route exact path="menu" element={<MenuItems />} />
      </Route>
    </Routes>
  );
}
