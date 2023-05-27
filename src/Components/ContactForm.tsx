import React from 'react';

function ContactForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Contact</h2>
      {/* Form fields */}
      <button type="submit">Add</button>
    </form>
  );
}

export default ContactForm;
