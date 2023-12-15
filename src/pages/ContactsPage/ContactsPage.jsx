import { Toaster } from 'react-hot-toast';
import Form from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useFilter } from 'hooks/useFilter';
import { useContacts } from 'hooks/useContacts';

import styles from './ContactsPage.module.css';

function ContactsPage() {
  const [filter, onSetFilter] = useFilter();
  const [contacts, onAddContact, onDeleteContact] = useContacts();

  const empty = () => contacts.length > 0;

  return (
    <section className={styles['add-search-contacts']}>
      <div className={styles['add-contacts']}>
        <h2>Phonebook</h2>
        <Form onData={onAddContact} />
      </div>

      <div className={styles['search-contacts']}>
        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={onSetFilter} />
        {empty() ? (
          <>
            <ContactList
              contacts={contacts}
              onDeleteContact={onDeleteContact}
            />
          </>
        ) : (
          <p>
            There is no such contact! <br /> Add a contact.
          </p>
        )}
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </section>
  );
}

export default ContactsPage;
