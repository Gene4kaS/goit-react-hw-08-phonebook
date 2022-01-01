import React, { Component } from 'react';
import styles from './ContactForm.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact({ ...this.state });

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.formcontacts}>
        <div className={styles.phonebookdata}>
          <label htmlFor="">
            <TextField
              id="standard-basic"
              label="Name"
              size="small"
              onChange={this.handleChange}
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
        </div>
        <div className={styles.phonebookdata}>
          <label htmlFor="">
            <TextField
              id="standard-basic"
              label="Phone"
              size="small"
              onChange={this.handleChange}
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        </div>
        <Button variant="text" type="submit">
          Add contact
        </Button>
      </form>
    );
  }
}

export default ContactForm;
