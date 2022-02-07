import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/phonebook-actions';
import { getFilter } from '../../redux/phonebook-selector';
import Input from '@mui/material/Input';
import styles from './Filter.module.css';

const ariaLabel = { 'aria-label': 'description' };

export default function Filter() {
  const value = useSelector(getFilter);

  const dispatch = useDispatch();
  return (
    <label className={styles.filter}>
      <p className={styles.filtername}>Find contacts by name</p>
      <Input
        inputProps={ariaLabel}
        type="text"
        value={value}
        onChange={e => dispatch(actions.onFilter(e.target.value))}
      />
    </label>
  );
}
