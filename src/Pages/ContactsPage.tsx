import React from "react";
import ContactForm from "../Components/ContactForm";
import ContactList from "../Components/ContactList";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Navbar from '../Components/Navbar';

const ContactsPage: React.FC = () => {
  const contact = useSelector((state: RootState) => state.contact);
  return (
    <div >
      <h1 className="text-center w-screen h-20 pt-5 text-white font-bold text-4xl font-mono bg-teal-950">Contact Management</h1>
      <div className="flex">
        <Navbar />
        <div className="border-black border w-screen">
          <ContactForm contact={contact} />
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
