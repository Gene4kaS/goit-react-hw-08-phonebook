import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';

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
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route path="/" element={<HomeView />} />
            <Route
              path="register"
              element={
                <PublicRoute path="/register">
                  <RegisterView />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute path="/login">
                  <LoginView />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute path="/contacts">
                  <ContactsView />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>

      <ToastContainer autoClose={3700} position="top-center" />
    </div>
  );
}
