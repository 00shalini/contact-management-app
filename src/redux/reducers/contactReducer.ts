interface Contact {
    id: number;
    name: string;
    email: string;
  }
  
  interface ContactState {
    contacts: Contact[];
  }
  
  const initialState: ContactState = {
    contacts: [],
  };
  
  const contactReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'ADD_CONTACT':
        return {
          ...state,
          contacts: [...state.contacts, action.payload],
        };
      case 'DELETE_CONTACT':
        return {
          ...state,
          contacts: state.contacts.filter((contact) => contact.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default contactReducer;
  