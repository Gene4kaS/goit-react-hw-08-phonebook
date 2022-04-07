import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from '../../components/ContactForm';
import ContactsList from '../../components/ContactsList';
import Filter from '../../components/Filter';
import { ToastContainer } from 'react-toastify';
import { contactsOperations } from '../../redux/contacts';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <>
      <div className="phonebook">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
        <ToastContainer autoClose={2000} />
      </div>
    </>
  );
}
