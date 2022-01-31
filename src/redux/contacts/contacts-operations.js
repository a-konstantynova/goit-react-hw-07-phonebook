import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as contactsAPI from '../../api-services/contacts-api';
axios.defaults.baseURL = 'https://61f7bc8239431d0017eaf9b1.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await contactsAPI.fetchContacts();
    return contacts;
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async name => {
    const contact = await contactsAPI.addContact(name);
    return contact;
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    const {
      data: { id },
    } = await contactsAPI.deleteContact(contactId);
    return id;
  },
);
