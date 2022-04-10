import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        exact="true"
        className={s.link}
        activeclassname={s.activeLink}
      >
        Home
      </NavLink>

      <NavLink
        to="/contacts"
        exact="true"
        className={s.link}
        activeclassname={s.activeLink}
      >
        Contacts
      </NavLink>
    </nav>
  );
}

export default Navigation;
