import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { PhoneBookStyle } from './app.styled';

// let firstRunStorage = true;

export function App() {
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   if (localStorage.getItem('contacts') && firstRunStorage) {
  //     firstRunStorage = false;

  //     const storage = JSON.parse(localStorage.getItem('contacts'));
  //     setContacts([...storage]);
  //   }

  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // function resetForm() {
  //   setWriteName('');
  //   setNumber('');
  // }

  return (
    <PhoneBookStyle>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactFilter />
    </PhoneBookStyle>
  );
}
