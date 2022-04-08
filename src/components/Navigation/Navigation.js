import React from 'react';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import { useSelector } from 'react-redux';
import s from './Navigation.module.css';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={s.link}
        activeStyle={{ color: 'red' }}
        style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })}
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={s.link}
          activeStyle={{ color: 'red' }}
          style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
