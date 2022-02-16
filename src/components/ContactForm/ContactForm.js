import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from '../../redux/contactsSlice';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data } = useFetchContactsQuery();
  const [createContact] = useCreateContactMutation();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const isInContacts = contact => {
    const normalizedName = contact.name.toLowerCase();
    const allNames = data.map(el => el.name.toLowerCase());
    const existingContact = allNames.find(name => name === normalizedName);
    return existingContact;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    if (!isInContacts(contact)) {
      createContact(contact);
      toast.success('Number added to the contacts');
    } else {
      return toast.error(`Sorry, ${name} is already in contacts`);
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formcontacts}>
      <div className={styles.phonebookdata}>
        <label htmlFor="">
          <TextField
            id="standard-basic"
            label="Name"
            size="small"
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
      </div>
      <div className={styles.phonebookdata}>
        <label htmlFor="">
          <TextField
            id="standard-basic"
            label="Phone"
            size="small"
            onChange={handleChange}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>
      <Button variant="text" type="submit">
        Add contact
      </Button>
    </form>
  );
}
