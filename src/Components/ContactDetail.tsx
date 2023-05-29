import React from 'react';


type Contact = {
    id: number;
    name: string;
    email: string;
  };
  
type ContactDetailProps = {
  contact: Contact;
};

const ContactDetail: React.FC<ContactDetailProps> = ({ contact }) => {
  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
    </div>
  );
};

export default ContactDetail;
