import React from 'react';
import { useSelector } from 'react-redux';
import ContactsListItem from '../ContactsListItem/ContactsListItem';
import styles from './ContactsList.module.css';
import { getFilter } from '../../redux/contacts/phonebook-selector';
import contactsFilter from '../../utils/contactFilter';
import { useFetchContactsQuery } from '../../redux/contacts/contactsSlice';

export default function ContactsList({ contacts }) {
  const filter = useSelector(getFilter);
  const { data } = useFetchContactsQuery();

  return (
    <ul className={styles.list}>
      {data &&
        contactsFilter(data, filter).map(({ name, number, id }) => (
          <ContactsListItem key={id} name={name} number={number} id={id} />
        ))}
    </ul>
  );
}
