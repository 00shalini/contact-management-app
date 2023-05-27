import React, {useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, editContact, deleteContact } from '../redux/reducers/contactReducer';

type ContactFormProps = {
  contact?: Contact;
  onSubmit: (formData: any) => void;
  onCancel: () => void;
};

function ContactForm({contact , onSubmit,onCancel}: ContactFormProps) {

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (contact) {
      setName(contact.name);
      setEmail(contact.email);
    }
  }, [contact]);


  const handleSaveContact = () => {
    const formData = {
      id: contact ? contact.id : Date.now(),
      name,
      email,
    };

    if (contact) {
      // Dispatch editContact action if editing an existing contact
      dispatch(editContact(formData));
    } else {
      // Dispatch addContact action if adding a new contact
      dispatch(addContact(formData));
    }

    // Clear the form fields
    setName('');
    setEmail('');

    // Call the onSubmit callback to notify the parent component
    onSubmit(formData);
  };

  return (
    <div>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button onClick={handleSaveContact}>{contact ? 'Update Contact' : 'Add Contact'}</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
  );
}

export default ContactForm;
