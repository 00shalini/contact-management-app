// src/reducers/contactReducer.ts

import { Contact } from "../types/types";
import {
  ContactActionTypes,
  ADD_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
} from "../actions/contactActions";

export interface ContactState {
  contact: any;
  selectedContact: any;
  contacts: Contact[];
  
}

const initialState: ContactState = {
  contacts: [],
  selectedContact: [],
  contact: []
};

const contactReducer = (
  state = initialState,
  action: ContactActionTypes
): ContactState => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case EDIT_CONTACT:
  
      return {
        
        ...state,
        
        contact: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
       
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
        
      };
    default:
      return state;
  }
};

export default contactReducer;
