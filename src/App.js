import './App.css';
import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  }

  addContact = ({ name, number }) => {
    if (this.state.contacts.find((contact) => contact.name === name)) {
      alert(`${name} already in contacts`);
      return;
    }

    const item = { id: shortid.generate(), name: name, number:number };
    this.setState((state) => ({
      contacts: [item, ...state.contacts]
    }))
  }

  nameSearch = () => {
    const { filter, contacts } = this.state;
    const lowerFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(lowerFilter)
    );
  }

   filterChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    }

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const { filter } = this.state;
    const contacts = this.nameSearch();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter
          filter={filter}
          handleChange={this.filterChange}/>
        <ContactList
          contacts={contacts}
          onDeleteContact={this.deleteContact}/>
      </div>
    )
  }
}

export default App;
