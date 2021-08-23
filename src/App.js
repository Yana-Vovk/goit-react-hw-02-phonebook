import './App.css';
import React, { Component } from 'react';
import shortid from 'shortid';

class App extends Component {

  state = {
    contacts: [],
    name: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    this.addContact(this.state);
    console.log(this.state.name);
  }

  handleChange = e => {
    this.setState({name:e.currentTarget.value});
  }

  addContact = ({ name }) => {
    const item = { id: shortid.generate(), name: name };
    // this.setState({ contacts: [item] });
    this.setState((state) => ({
      contacts: [item, ...state.contacts]
    }))
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name<br/>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={name}
              onChange={this.handleChange}
            />
          </label><br/>
          <button type="submit">Add contact</button>
        </form>
      </div>
    )
  }
}

export default App;
