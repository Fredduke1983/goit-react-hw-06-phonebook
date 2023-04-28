import { useState, useEffect } from 'react';

// import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { PhoneBookStyle } from './app.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, delContact } from 'store/store';

// let firstRunStorage = true;

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(({ contacts }) => contacts);

  const [writeName, setWriteName] = useState('');
  const [number, setNumber] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   if (localStorage.getItem('contacts') && firstRunStorage) {
  //     firstRunStorage = false;

  //     const storage = JSON.parse(localStorage.getItem('contacts'));
  //     setContacts([...storage]);
  //   }

  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  function resetForm() {
    setWriteName('');
    setNumber('');
  }

  const onSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ writeName, number }));
    if (
      contacts.find(({ name }) => {
        return name === writeName;
      })
    ) {
      alert('Its allready in case');
      resetForm();
      return;
    }

    resetForm();
  };

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setWriteName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onChangeFilter = e => {
    setFilter(e.target.value);
    setFilteredContacts(() => {
      return contacts.filter(contact => {
        return contact.name.toLowerCase().includes(e.target.value);
      });
    });
  };

  const onDeleteContact = e => {
    dispatch(delContact(e.target.id));
  };

  return (
    <PhoneBookStyle>
      <h1>Phonebook</h1>
      <ContactForm
        onSubmit={onSubmit}
        onChange={onChange}
        valueName={writeName}
        valueNumber={number}
      />
      <h2>Contacts</h2>
      <ContactFilter
        onChange={onChange}
        onChangeFilter={onChangeFilter}
        filter={filter}
        filteredContacts={filteredContacts}
        contacts={contacts}
        deleteContact={onDeleteContact}
      />
    </PhoneBookStyle>
  );
}
