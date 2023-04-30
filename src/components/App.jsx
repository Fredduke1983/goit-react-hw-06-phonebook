import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { PhoneBookStyle } from './app.styled';

export function App() {
  return (
    <PhoneBookStyle>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactFilter />
    </PhoneBookStyle>
  );
}
