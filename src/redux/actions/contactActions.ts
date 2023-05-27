export const addContact = (contact: any) => {
    return {
      type: 'ADD_CONTACT',
      payload: contact,
    };
  };
  
  export const deleteContact = (id: number) => {
    return {
      type: 'DELETE_CONTACT',
      payload: id,
    };
  };
  