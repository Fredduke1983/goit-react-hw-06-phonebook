import { createSlice, configureStore } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialContacts = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filteredContacts: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: (state, { payload }) => {
      return {
        contacts: [
          ...state.contacts,
          { id: nanoid(), name: payload.writeName, number: payload.number },
        ],
      };
    },
    delContact: (state, { payload }) => {
      const contactsDeleted = [...state.contacts].filter(contact => {
        return !contact.id.includes(payload);
      });
      return {
        contacts: [...contactsDeleted],
      };
    },
    filterContacts: (state, { payload }) => {
      const filtered = [...state.contacts].filter(contact => {
        return contact.name.toLowerCase().includes(payload);
      });
      return { contacts: [...state.contacts], filteredContacts: [...filtered] };
    },
  },
});

export const { addContact, delContact, filterContacts } = contactsSlice.actions;

export const store = configureStore({
  reducer: contactsSlice.reducer,
});
