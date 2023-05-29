// components/ContactList.tsx

import React from "react";
import { connect } from "react-redux";
import { RootState } from "../redux/store";
import { Contact } from "../redux/types/types";
import { deleteContact ,editContact } from "../redux/actions/contactActions";

interface ContactListProps {
  contacts: Contact[];
  deleteContact: (id: string) => void;
  editContact: (contact: Contact) => void;
}

const ContactList: React.FC<ContactListProps> = ({
  contacts,
  deleteContact,
  editContact,
}) => {
  const handleDelete = (id: string) => {
    deleteContact(id);
  };
  const handleEdit = (contact: Contact) => {
    console.log(contact);
    editContact(contact);
  };
  return (
    <div>
      <h2>Contact List</h2>
      {contacts.length === 0 ? (
        <p>No contacts available.</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <div>
                <strong>{contact.name}</strong>
              </div>
              <div>Email: {contact.email}</div>
              <div>Phone: {contact.phone}</div>
              <button onClick={() => handleEdit(contact)}>Edit</button>
              <button onClick={() => handleDelete(contact.id)}>
                Delete
              </button>
              {/* Add button or link to view/edit contact details */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps, { deleteContact ,editContact})(ContactList);
