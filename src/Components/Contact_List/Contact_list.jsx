import React from 'react';
import './Contact_List.css';
import ContactItem from '../Contact_Item/Contact_Item.jsx';

export default function ContactList({ contacts, deleteContact }) {
    const contactList = contacts.map( contact =>
          <ContactItem 
            contactItem = {contact.contactItem} 
            key = {`${contact.contactItem}`}
            deleteContact ={deleteContact} />
          );  
        
  return (
      <section 
        className = "jsx-list-item-container">
        {contactList}
      </section>
  )
};