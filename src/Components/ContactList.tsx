import React from 'react';
import { useSelector } from 'react-redux';

// interface Contact {
//   id: number;
//   name: string;
//   email: string;
// }

// interface ContactListProps {
//   contacts: Contact[];
// }

function ContactList({ contacts, handleDeleteContact,handleEditContact }: any) {

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact: any) => (
          <div key={contact.id}>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <button onClick={() => handleEditContact(contact)}>Edit</button>
          <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
        </div>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
