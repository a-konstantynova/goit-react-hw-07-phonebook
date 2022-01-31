import axios from 'axios';

axios.defaults.baseURL = 'https://61f7bc8239431d0017eaf9b1.mockapi.io';

export const fetchContacts = () => {
  return axios.get('/contacts').then(response => response.data);
};

export const addContact = contact => {
  return axios.post('/contacts', contact).then(({ data }) => data);
};

export const deleteContact = contactId => {
  return axios.delete(`/contacts/${contactId}`);
};
