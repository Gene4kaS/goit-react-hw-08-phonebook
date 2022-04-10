import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact="true"
      className={s.link}
      activeclassname={s.activeLink}
    >
      Sign up
    </NavLink>
    <NavLink
      to="/login"
      exact="true"
      className={s.link}
      activeclassname={s.activeLink}
    >
      Log in
    </NavLink>
  </div>
);

export default AuthNav;
