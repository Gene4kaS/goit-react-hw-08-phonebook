import './App.css';
import React from 'react';
import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
import { ToastContainer } from 'react-toastify';

export default function App() {
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
