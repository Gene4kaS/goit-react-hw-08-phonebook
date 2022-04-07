import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './ContactsListItem.module.css';
import { useDeleteContactMutation } from '../../redux/contactsSlice';
import Spinner from '../Spinner';

export default function ContactsListItem({ name, number, id }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <li className={styles.itemtext}>
      <div>
        {name} {number}
      </div>
      <div>
        <Button
          className={styles.button}
          variant="outlined"
          size="small"
          type="button"
          startIcon={<DeleteIcon />}
          onClick={() => deleteContact(id)}
          disabled={isDeleting}
        >
          {isDeleting && <Spinner size={12} />}
          Delete
        </Button>
      </div>
    </li>
  );
}
