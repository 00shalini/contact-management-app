import React, { useState ,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, editContact, deleteContact } from '../redux/reducers/contactReducer';
import ContactList from '../Components/ContactList';
import ContactForm from '../Components/ContactForm';

interface Contact {
  id: number;
  name: string;
  email: string;
}

function ContactsPage() {
  const contacts = useSelector((state : any) => state.contacts.contacts);
  
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  const handleEditContact = (contact : any) => {
    //console.log(contact)
    setSelectedContact(contact);

  };

  const handleDeleteContact = (contactId : number) => {
    dispatch(deleteContact(contactId));
  };

  const handleFormSubmit = (formData: any) => {
    if (selectedContact) {
      // If a contact is selected, update it
      const updatedContact = { ...selectedContact, ...formData };
      dispatch(editContact(updatedContact));
      setSelectedContact(null);
    } else {
      // If no contact is selected, add a new contact
      dispatch(addContact(formData));
    }
  };

  const handleFormCancel = () => {
    setSelectedContact(null);
  };

  return (
    <div>
      <h1>Contact Management</h1>
      {selectedContact && (
        <ContactForm
          contact={selectedContact}
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
        />
      )}
       {!selectedContact && (
      <ContactForm onSubmit={handleFormSubmit} onCancel={handleFormCancel} />
       )}
      <ContactList contacts={contacts} handleDeleteContact={handleDeleteContact} handleEditContact={handleEditContact}/>
      
    </div>
  );
}

export default ContactsPage;
