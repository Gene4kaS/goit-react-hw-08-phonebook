import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

export const PublicRoute = ({
  redirectTo = '/user-page',
  children,
  ...routeProps
}) => {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  if (!isLoggedIn) {
    return <Navigate to={redirectTo} replace />;
  }
  return children;
};
