import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './components/Form';
import Section from './components/Section';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
import Loader from './components/Loader';
import { fetchContacts } from './redux/contacts/contacts-operations';
import s from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.loading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <Section>
        <Form />
      </Section>
      <h2 className={s.title_contacts}>Contacts</h2>
      <Section>
        <Filter />
        {isLoading && <Loader />}
        <ContactsList />
      </Section>
    </div>
  );
}
