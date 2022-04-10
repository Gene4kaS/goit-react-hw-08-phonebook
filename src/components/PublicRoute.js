import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

export const PublicRoute = ({
  restricted = false,
  children,
  ...routeProps
}) => {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return !restricted && isLoggedIn ? <Navigate to="/" /> : children;
};
