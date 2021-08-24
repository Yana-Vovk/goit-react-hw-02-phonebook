import React, { Component } from 'react';
    
class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }
    
    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }
    
    reset = () => {
        this.setState({ name: '', number: '' });
    }

    
    render() {
         const { name, number } = this.state;
        return (
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
        );
    }
}

export default ContactForm;