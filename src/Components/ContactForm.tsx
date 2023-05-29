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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  var editedContact = contact;

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
      <h2 className="text-center font-mono text-2xl font-semibold">{contact.length > 0 ? "Edit Contact" : "Add Contact"}</h2>
      <form onSubmit={handleSubmit} className="w-4/5 text-center ml-28 mt-5">
        <div className="m-5">
          <label className="m-5 font-mono">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-60 h-8 border-blue-950 outline-teal-900 shadow-2xl"
          />
        </div>
        <div className="m-5  font-mono">
          <label className="m-5">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-60 h-8 border-blue-950 outline-teal-900 shadow-2xl"
          />
        </div>
        <div className="m-5  font-mono">
          <label className="m-5">Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-60 h-8 border-blue-950 outline-teal-900 shadow-2xl"
          />
        </div>
        <button type="submit" className="w-64 h-8 bg-cyan-900 rounded-md text-white font-mono">
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
