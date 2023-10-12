import './Contact.css';
import React,{ useState } from 'react';
import AddContact from './Components/Add_Contact/Add_Contact.jsx';
import ContactList from './Components/Contact_List/Contact_list.jsx';


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