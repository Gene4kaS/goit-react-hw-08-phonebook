import React from 'react';
import ContactForm from '../../components/ContactForm';
import ContactsList from '../../components/ContactsList';
import Filter from '../../components/Filter';
import { ToastContainer } from 'react-toastify';
import s from './ContactsView.module.css';

export default function ContactsView() {
  return (
    <>
      <div className={s.phonebook}>
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
