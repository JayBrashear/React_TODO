import React from 'react';
import '../Add_Contact/Add_Contact.css'

const AddContact = ({ addNewContactItem }) => {
  const handleSubmit = (e) => {
        e.preventDefault();
        
        const NewContactField = document.querySelector('[name = contactItem]');
        const NewContactValue = NewContactField.value;
    
        NewContactField.value = '';
              
       addNewContactItem(NewContactValue);
  }
    return (
    <div className = "Contact-form">
     <h2>Add A New Contact</h2>
      <form action ="#" method='GET' onSubmit = {handleSubmit}>
        <div className="form-row">
           <label>
            <input
              type="text" 
              name="contactItem"   
              className = "Contact-field"
              placeholder=""></input>
            <button className="btn btn-primary" >Add Contact</button>
            </label>
        </div>
      </form>
  </div>
  )
}
export default AddContact;
