import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

import { useEffect } from 'react';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <GlobalStyle />
      <h1>Tweet cards</h1>
      {/* <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <h2>Contacts</h2>
      <Filter />
      <ContactList /> */}
    </Layout>
  );
}
