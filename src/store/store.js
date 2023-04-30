import { createSlice, configureStore } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filteredContacts: [],
  valueFilter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: ({ contacts }, { payload: { valueName, valueNumber } }) => {
      return {
        contacts: [
          ...contacts,
          {
            id: nanoid(),
            name: valueName,
            number: valueNumber,
          },
        ],
        valueFilter: '',
      };
    },
    delContact: ({ contacts }, { payload }) => {
      const contactsDeleted = [...contacts].filter(contact => {
        return !contact.id.includes(payload);
      });
      return {
        contacts: [...contactsDeleted],
        valueFilter: '',
      };
    },
    filterContacts: ({ contacts }, { payload }) => {
      const filtered = [...contacts].filter(contact => {
        return contact.name.toLowerCase().includes(payload);
      });
      return {
        contacts: [...contacts],
        filteredContacts: [...filtered],
        valueFilter: payload,
      };
    },
    stateValueName: ({ contacts, valueFilter }) => {
      return {
        contacts: [...contacts],
        valueFilter: '',
      };
    },
    stateValueNumber: ({ contacts, valueFilter }) => {
      return {
        contacts: [...contacts],
        valueFilter: '',
      };
    },
  },
});

export const {
  addContact,
  delContact,
  filterContacts,
  stateValueName,
  stateValueNumber,
} = contactsSlice.actions;

export const store = configureStore({
  reducer: contactsSlice.reducer,
});
