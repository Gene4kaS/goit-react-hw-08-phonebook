import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/phonebook-actions';
import { getVisibleContacts } from '../../redux/phonebook-selector';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './ContactsList.module.css';

export default function ContactsList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(actions.deleteContact(id));
  };

  return (
    <ul className={styles.contactlist}>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={styles.itemtext}>
            <div>
              {contact.name} {contact.number}
            </div>
            <div>
              <Button
                className={styles.button}
                variant="outlined"
                size="small"
                type="button"
                startIcon={<DeleteIcon />}
                onClick={() => onDeleteContact(contact.id)}
              >
                Delete
              </Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     }),
//   ),
// };
