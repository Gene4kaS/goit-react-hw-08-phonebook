import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';

import AppBar from './components/AppBar';
import Spinner from './components/Spinner';

import { authOperations } from './redux/auth';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-view" */),
);

const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "register-view" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "login-view" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "contacts-view" */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />

      <Suspense fallback={<Spinner />}>
        <PublicRoute path="/" exact>
          <HomeView />
        </PublicRoute>

        <PublicRoute path="/register" restricted redirectTo="/contacts">
          <RegisterView />
        </PublicRoute>

        <PublicRoute path="/login" restricted redirectTo="/contacts">
          <LoginView />
        </PublicRoute>

        <PrivateRoute path="/contacts" redirectTo="/login">
          <ContactsView />
        </PrivateRoute>
      </Suspense>

      <ToastContainer autoClose={3700} position="top-center" />
    </div>
  );
}
