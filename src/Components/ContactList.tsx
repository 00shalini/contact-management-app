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
    editContact(contact);
  };
  return (
    <div>
      <h2 className="text-center font-mono text-2xl font-semibold mt-4">Contact List</h2>
      {contacts.length === 0 ? (
        <p className="text-center fot-mono text-xl ">No contacts available.</p>
      ) : (
        <ul className="w-4/5 h-auto ml-28 ">
          {contacts.map((contact) => (
            <li key={contact.id} className="ml-28 mt-4 font-mono">
              <div>
               <strong>Name:</strong> {contact.name}
              </div>
              <div><strong>Email:</strong> {contact.email}</div>
              <div><strong>Phone:</strong> {contact.phone}</div>
              <button className="w-32 mr-3 h-8 bg-cyan-900 rounded-md text-white font-mono" onClick={() => handleEdit(contact)}>Edit</button>
              <button className="w-32 h-8 bg-cyan-900 rounded-md text-white font-mono" onClick={() => handleDelete(contact.id)}>
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
