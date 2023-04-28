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
  valueName: '',
  valueNumber: '',
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
        valueNumber: '',
        valueName: '',
        valueFilter: '',
      };
    },
    delContact: (
      { contacts, valueNumber, valueName, valueFilter },
      { payload }
    ) => {
      const contactsDeleted = [...contacts].filter(contact => {
        return !contact.id.includes(payload);
      });
      return {
        contacts: [...contactsDeleted],
        valueNumber,
        valueName,
        valueFilter,
      };
    },
    filterContacts: ({ contacts, valueNumber, valueName }, { payload }) => {
      const filtered = [...contacts].filter(contact => {
        return contact.name.toLowerCase().includes(payload);
      });
      return {
        contacts: [...contacts],
        filteredContacts: [...filtered],
        valueFilter: payload,
        valueNumber,
        valueName,
      };
    },
    stateValueName: ({ contacts, valueNumber, valueFilter }, { payload }) => {
      return {
        contacts: [...contacts],
        valueName: payload,
        valueNumber,
        valueFilter,
      };
    },
    stateValueNumber: ({ contacts, valueName, valueFilter }, { payload }) => {
      return {
        contacts: [...contacts],
        valueNumber: payload,
        valueName,
        valueFilter,
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
