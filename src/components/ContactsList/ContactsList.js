import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './ContactsList.module.css';

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ul className={styles.contactlist}>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={styles.itemtext}>
            <div>
              {contact.name} {contact.number}{' '}
            </div>
            <div>
              <Button
                className={styles.button}
                variant="outlined"
                size="small"
                type="button"
                startIcon={<DeleteIcon />}
                onClick={() => deleteContact(contact.id)}
              >
                Delete
              </Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactsList;
