import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import s from './Navigation.module.css';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <nav>
      <NavLink
        to="/"
        exact="true"
        className={s.link}
        activeclassname={s.activeLink}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact="true"
          className={s.link}
          activeclassname={s.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
