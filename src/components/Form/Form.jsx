import Button from '@mui/material/Button';
import { useState } from 'react';

import styles from './Form.module.css';

function Form({ onData }) {
  const initialState = {
    name: '',
    number: '',
  };

  const [state, setState] = useState({ ...initialState });
  const { name, number } = state;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onData({ ...state });
    setState({ ...initialState });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={styles['label-add-contacts']}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="&#128221;"
          onChange={handleChange}
          className={styles['input-add-contacts']}
        />
      </label>
      <label className={styles['label-add-contacts']}>
        Phone number
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="&#9743;"
          onChange={handleChange}
          className={styles['input-add-contacts']}
        />
      </label>
      <Button
        variant="contained"
        size="small"
        type="submit"
        disabled={!name || !number}
      >
        Add contact
      </Button>
    </form>
  );
}

export default Form;
