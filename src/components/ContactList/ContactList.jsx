import * as React from 'react';
import PropTypes from 'prop-types';

import phone from '../../icons/phone.svg';
import dumpster from '../../icons/dumpster.svg';

import styles from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles['list-contacts']}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles['item-contact-list']}>
          <div className={styles['svg-info']}>
            <a href={`tel:${number}`}>
              <img src={phone} alt="svg phone" />
            </a>
            <div className={styles['contact-info']}>
              <span>{name}</span>
              <span className={styles['number']}>{number}</span>
            </div>
          </div>
          <img
            src={dumpster}
            alt="svg dumpster"
            onClick={() => {
              if (
                window.confirm('Ви впевнені, що хочете видалити цей контакт?')
              ) {
                onDeleteContact(id);
              }
            }}
          />
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
