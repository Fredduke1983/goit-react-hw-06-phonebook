import PropTypes from 'prop-types';
import { FilterDelBtn, FilterListItem } from './contactFilter.styled';
import { useSelector } from 'react-redux';

export function ContactFilter({
  onChangeFilter,
  filter,

  deleteContact,
}) {
  const contacts = useSelector(({ contacts }) => contacts);
  const filteredContacts = useSelector(contacts => contacts.filteredContacts);
  console.log(filteredContacts);

  function onFilterContacts(filterContact) {
    return filterContact.map(contact => {
      return (
        <FilterListItem id={contact.id} key={contact.id}>
          {contact.name}: {contact.number}
          <FilterDelBtn onClick={deleteContact} id={contact.id}>
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
        value={filter}
        name="filter"
      ></input>
      <ul>
        {filter
          ? onFilterContacts(filteredContacts)
          : onFilterContacts(contacts)}
      </ul>
    </>
  );
}

ContactFilter.propTypes = {
  onChangeFilter: PropTypes.func,
  filter: PropTypes.string,
  filteredContacts: PropTypes.array,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    }).isRequired
  ),
  deleteContact: PropTypes.func,
};
