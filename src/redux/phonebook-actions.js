import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('phonebook/addContact', ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const deleteContact = createAction('phonebook/deleteContact');
const onFilter = createAction('phonebook/filterChange');

const actions = { addContact, deleteContact, onFilter };

export default actions;
