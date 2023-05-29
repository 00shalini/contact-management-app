import React  from 'react';
import ContactForm from '../Components/ContactForm';
import ContactList from '../Components/ContactList';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const ContactsPage: React.FC =() => {
 
  const contact = useSelector((state: RootState) => state.contact)
  return (
    <div>
      <h1>Contact Management</h1>
      <ContactForm contact={contact}/>
      <ContactList />
    </div>
  );
}

export default ContactsPage;
