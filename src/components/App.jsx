import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { P } from './ContactList/ContactList.styled';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
export class App extends Component {
  static defaultProps = {
    initialContacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    } else {
      this.setState({
        contacts: this.props.initialContacts,
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    if (
      this.state.contacts.find(
        option => option.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts list`);
      return false;
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { id: nanoid(), name, number }],
      }));
      return true;
    }
  };
  deleteContacts = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };
  getContacts = () => {
    if (this.state.filter === '') {
      return [...this.state.contacts];
    }
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };

  filterContacts = event => {
    this.setState({
      filter: event.target.value.toLowerCase(),
    });
  };

  render() {
    const { addContact, deleteContacts, getContacts, filterContacts } = this;
    const { contacts } = this.state;
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
  }
}
