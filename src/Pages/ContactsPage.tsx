import React, { useState ,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, editContact, deleteContact } from '../redux/reducers/contactReducer';

function ContactsPage() {
  const contacts = useSelector((state : any) => state.contacts.contacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
 
  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    const newContacts = storedContacts.filter((storedContact: any) =>
    contacts.every((contact: any) => contact.id !== storedContact.id)
  );
  newContacts.forEach((contact: any) => dispatch(addContact(contact)));

  }, [dispatch]);

  const handleAddContact = () => {
    const newContact = {
      id: Date.now(),
      name,
      email,
    };
    dispatch(addContact(newContact));
    setName('');
    setEmail('');
  };

  const handleEditContact = (contact : any) => {
    const updatedContact = {
      ...contact,
      name,
      email,
    };
    dispatch(editContact(updatedContact));
    setName('');
    setEmail('');
  };

  const handleDeleteContact = (contactId : number) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <h1>Contact Management</h1>
      <div>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button onClick={handleAddContact}>Add Contact</button>
      </div>
      {contacts.map((contact:any) => (
        <div key={contact.id}>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <button onClick={() => handleEditContact(contact)}>Edit</button>
          <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ContactsPage;
