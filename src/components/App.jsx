import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { P } from './ContactList/ContactList.styled';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const initialContacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      setContacts(prev => [...prev, ...JSON.parse(savedContacts)]);
    } else setContacts(prev => [...prev, ...initialContacts]);
  }, []);

  useEffect(
    prevState => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    },
    [contacts]
  );

  const addContact = (name, number) => {
    if (
      contacts.find(option => option.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} is already in contacts list`);
      return false;
    } else {
      setContacts([...contacts, { id: nanoid(), name, number }]);
      return true;
    }
  };
  const deleteContacts = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };
  const getContacts = () => {
    if (filter === '') {
      return [...contacts];
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const filterContacts = event => {
    setFilter(event.target.value.toLowerCase());
  };

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        {contacts.length <= 0 ? (
          <P>No contacts in Phonebook</P>
        ) : (
          <>
            <Filter filterContacts={filterContacts} />
            <ContactList
              contacts={getContacts()}
              deleteContacts={deleteContacts}
            />
          </>
        )}
      </Section>
    </div>
  );
};
