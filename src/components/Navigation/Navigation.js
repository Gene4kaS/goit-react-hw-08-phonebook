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
        className={s.link}
        activeStyle={{ color: 'red' }}
        style={({ isActive }) => ({
          color: isActive ? '#f50057' : '#212121',
        })}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={s.link}
          activeStyle={{ color: 'red' }}
          style={({ isActive }) => ({
            color: isActive ? '#f50057' : '#212121',
          })}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
