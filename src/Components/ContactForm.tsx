// components/ContactForm.tsx

import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Contact } from "../redux/types/types";
import { addContact, deleteContact, editContact } from "../redux/actions/contactActions";

interface ContactFormProps {
  addContact: (contact: Contact) => void;
  editContact: (contact: Contact) => void;
  deleteContact: (id: string) => void;
  selectedContact?: Contact[];
  contact: Contact[]
}

const ContactForm: React.FC<ContactFormProps> = ({
  addContact,
  editContact,
  selectedContact,
  contact,
  deleteContact
}) => {
  console.log(contact);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  var editedContact = contact;
  console.log(editedContact)
  useEffect(() => {
    if (editedContact.length> 0) {
      setName(editedContact[0]?.name);
      setEmail(editedContact[0]?.email);
      setPhone(editedContact[0]?.phone);
    }
  },[editedContact[0]]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const contact: Contact = {
      id: editedContact[0]?.id ?  editedContact[0].id:  String(Date.now()),
      name,
      email,
      phone,
    };

    if (editedContact[0]?.id) {
      console.log(contact);
      deleteContact(editedContact[0]?.id)
      addContact(contact);
    } else {
      addContact(contact);
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  return (
    <div>
      <h2>{contact.length > 0 ? "Edit Contact" : "Add Contact"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit">
          {contact.length > 0 ? "Save Changes" : "Add Contact"}
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  selectedContact: state?.contact?.selectedContact,
});

export default connect(mapStateToProps, { addContact, editContact, deleteContact })(
  ContactForm
);
