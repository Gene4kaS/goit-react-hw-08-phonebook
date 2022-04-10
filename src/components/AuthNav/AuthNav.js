import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      className={s.link}
      activeStyle={{ color: 'red' }}
      style={({ isActive }) => ({
        color: isActive ? '#f50057' : '#212121',
      })}
    >
      Sign up
    </NavLink>
    <NavLink
      to="/login"
      className={s.link}
      activeStyle={{ color: 'red' }}
      style={({ isActive }) => ({
        color: isActive ? '#f50057' : '#212121',
      })}
    >
      Log in
    </NavLink>
  </div>
);

export default AuthNav;
