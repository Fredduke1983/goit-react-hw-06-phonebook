import {
  FormBtn,
  FormContact,
  InputContact,
  LabelContact,
} from './contactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, stateValueName, stateValueNumber } from 'store/store';

export function ContactForm() {
  const dispatch = useDispatch();
  const valueName = useSelector(({ valueName }) => valueName);
  const valueNumber = useSelector(({ valueNumber }) => valueNumber);
  const contacts = useSelector(({ contacts }) => contacts);

  const onChange = ({ target: { name, value } }) => {
    console.log(value);
    switch (name) {
      case 'name':
        dispatch(stateValueName(value));
        break;
      case 'number':
        dispatch(stateValueNumber(value));
        break;

      default:
        return;
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ valueName, valueNumber }));
    if (
      contacts.find(({ name }) => {
        return name === valueName;
      })
    ) {
      alert('Its allready in case');
      // resetForm();
      return;
    }

    // resetForm();
  };

  return (
    <FormContact onSubmit={onSubmit}>
      <LabelContact>
        <InputContact
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={onChange}
          value={valueName}
          placeholder="name"
          required
        />
        <InputContact
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={onChange}
          value={valueNumber}
          placeholder="number"
          required
        />
      </LabelContact>
      <FormBtn type="submit">Add contact</FormBtn>
    </FormContact>
  );
}
