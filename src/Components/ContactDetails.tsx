// components/ContactDetails.tsx

import React from "react";
import { connect } from "react-redux";
import { RootState } from "../redux/store";
import { Contact } from "../redux/types/types";

interface ContactDetailsProps {
  selectedContact?: Contact;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({ selectedContact }) => {
  return (
    <div>
      <h2>Contact Details</h2>
      {selectedContact ? (
        <div>
          <div>
            <strong>{selectedContact.name}</strong>
          </div>
          <div>Email: {selectedContact.email}</div>
          <div>Phone: {selectedContact.phone}</div>
        </div>
      ) : (
        <p>No contact selected.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  selectedContact: state.contact.selectedContact,
});

export default connect(mapStateToProps)(ContactDetails);
