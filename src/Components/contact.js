import './Contact.css';
import React,{ useState } from 'react';
import AddContact from './Add_Contact/Add_Contact.jsx';
import ContactList from '';


function Contact() {
  const [contactList,setContacts] = useState([
  ]);
  
  const addNewContactItem = (contact) => {
    const newContactItem = [...contactList,{contactItem: contact}];
    setContacts(newContactItem);
  }
  const deleteContact = (contactItem) => {
    const updatedContactList = contactList.filter(contact => 
          contact.contactItem !== contactItem);
    setContacts(updatedContactList);
  }
 
   return (
    <div className="ContactList">
      <nav className="nav justify-content-center">
        <a className="nav-link todo" href="#">To Do List</a>
        <a className="nav-link contact" href="#">Contact List</a>
      </nav>
      <header className="Contact-header">
        <h1>Contact List</h1>
      </header>
      <main className = "jsx-contact-form">
        <AddContact addNewContactItem = {addNewContactItem}  />
        <ContactList Contacts = {contactList} deleteContact = {deleteContact} /> 
      </main>
    </div>
  );
}

export default Contact;