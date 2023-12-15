import * as React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles['list-contacts']}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles['item-contact-list']}>
          <div className={styles['contact-info']}>
            <span>📞{name}</span>
            <span className={styles['number']}>{number}</span>
          </div>
          <Button
            variant="contained"
            size="small"
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
