import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
  id: number;
  name: string;
  email: string;
}

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const { id } = action.payload;
      const existingContact = state.contacts.find(contact => contact.id === id);
      if (existingContact) {
        Object.assign(existingContact, action.payload);
        localStorage.setItem('contacts', JSON.stringify(state.contacts));
      }
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
  },
});

export const { addContact, editContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
