import React from 'react';
import { useContacts } from '../api';

function ContactsPage() {
  const { data: contacts, isLoading } = useContacts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Contact Management</h1>
      {/* Contact form and contact list */}
    </div>
  );
}

export default ContactsPage;
