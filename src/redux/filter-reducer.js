import { createReducer, createAction } from '@reduxjs/toolkit';

export const filterContacts = createAction('phonebook/filterContacts');

export const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});
