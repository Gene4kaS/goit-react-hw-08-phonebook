import './App.css';
import React, { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm';
import shortid from 'shortid';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';

export default function App() {
  const oldContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? oldContacts;
  });

  //componentDidMount

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      setContacts(JSON.parse(contacts));
    } else setContacts(oldContacts);
  }, []);

  // componentDidUpdate

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    if (contacts.some(({ contact }) => contact === data.name)) {
      alert(`Sorry, ${data.name} already exists`);
      return;
    }

    setContacts(contacts => {
      const newContact = {
        id: shortid.generate(),
        ...data,
      };
      return [newContact, ...contacts];
    });
    setName('');
    setNumber('');
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  const onFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const visibleContacts = (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
  };

  return (
    <>
      <div className="phonebook">
        <h1>Phonebook</h1>
        <ContactForm onAddContact={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={onFilter} />
        <ContactsList
          contacts={visibleContacts(contacts, filter)}
          deleteContact={deleteContact}
        />
      </div>
    </>
  );
}
