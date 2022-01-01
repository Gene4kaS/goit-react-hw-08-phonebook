import React from 'react';
import Input from '@mui/material/Input';
import styles from './Filter.module.css';

const ariaLabel = { 'aria-label': 'description' };

const Filter = ({ filter, onChange }) => (
  <label className={styles.filter}>
    <p className={styles.filtername}>Find contacts by name</p>
    <Input
      inputProps={ariaLabel}
      type="text"
      value={filter}
      onChange={onChange}
    />
  </label>
);

export default Filter;
