import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/phonebook-selector';
import { filterContacts } from '../../redux/contacts/filter-reducer';
import Input from '@mui/material/Input';
import styles from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const ariaLabel = { 'aria-label': 'description' };

  return (
    <label className={styles.filter}>
      <p className={styles.filtername}>Find contacts by name</p>
      <Input
        inputProps={ariaLabel}
        type="text"
        value={value}
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </label>
  );
}
