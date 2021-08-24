import './App.css';
import React, { Component } from 'react';
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
    name: '',
    number: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    this.addContact(this.state);
    this.reset();
  }

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({[name]:value});
  }

  addContact = ({ name, number }) => {
    const item = { id: shortid.generate(), name: name, number:number };
    this.setState((state) => ({
      contacts: [item, ...state.contacts]
    }))
  }

  reset = () => {
    this.setState({ name: '', number: '' });
  }

  nameSearch = () => {
    const { filter, contacts } = this.state;
    const lowerFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(lowerFilter)
    );
  }

  render() {
    const { name, number, filter } = this.state;
    const contacts = this.nameSearch();
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name<br />
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={name}
              onChange={this.handleChange}
            />
          </label><br />
          <label>Number<br />
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={number}
              onChange={this.handleChange}
            />
          </label> <br />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <label>Find contacts by name <br />
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={this.handleChange}/>
        </label>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}
              <span>: </span>
              {contact.number}
            </li>))}
        </ul>
      </div>
    )
  }
}

export default App;
