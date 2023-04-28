import { FilterDelBtn, FilterListItem } from './contactFilter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { delContact, filterContacts } from 'store/store';

export function ContactFilter() {
  const dispatch = useDispatch();
  const contacts = useSelector(({ contacts }) => contacts);
  const filteredContacts = useSelector(
    ({ filteredContacts }) => filteredContacts
  );
  const valueFilter = useSelector(({ valueFilter }) => valueFilter);
  console.log(valueFilter);

  const onChangeFilter = e => {
    dispatch(filterContacts(e.target.value));
  };

  const onDeleteContact = e => {
    dispatch(delContact(e.target.id));
  };

  function onFilterContacts(filterContact) {
    return filterContact.map(contact => {
      return (
        <FilterListItem id={contact.id} key={contact.id}>
          {contact.name}: {contact.number}
          <FilterDelBtn onClick={onDeleteContact} id={contact.id}>
            delete
          </FilterDelBtn>
        </FilterListItem>
      );
    });
  }

  return (
    <>
      <input
        placeholder="search"
        onChange={onChangeFilter}
        value={valueFilter}
        name="filter"
      ></input>
      <ul>
        {valueFilter
          ? onFilterContacts(filteredContacts)
          : onFilterContacts(contacts)}
      </ul>
    </>
  );
}
