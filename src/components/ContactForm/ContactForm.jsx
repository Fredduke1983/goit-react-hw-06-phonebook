import {
  FormBtn,
  FormContact,
  InputContact,
  LabelContact,
} from './contactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'store/store';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(({ contacts }) => contacts);

  const onSubmit = e => {
    const {
      target: { name, number },
    } = e;
    e.preventDefault();

    const valueName = name.value;
    const valueNumber = number.value;
    name.value = '';
    number.value = '';
    if (
      contacts.find(({ name }) => {
        return name === valueName;
      })
    ) {
      alert('Its allready in case');
      return;
    }
    dispatch(
      addContact({
        valueName,
        valueNumber,
      })
    );
  };

  return (
    <FormContact onSubmit={onSubmit}>
      <LabelContact>
        <InputContact
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="name"
          required
        />
        <InputContact
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="number"
          required
        />
      </LabelContact>
      <FormBtn type="submit">Add contact</FormBtn>
    </FormContact>
  );
}
