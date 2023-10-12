import './Contact_Item.css';

export default function ContactItem({ContactItem, deleteContact}) {
   const contactContent = 
        <span className = "ContactItem">{ContactItem}</span> ;
   
   
  const handleContactDelete = (e) => {
        e.preventDefault();
        deleteContact(ContactItem);
      }

    return (
    <div className = "jsx-list-Container">  
        
          <div className = "jsx-list-item">
              {contactContent}
              <input type="button" value="Remove" className = "btn-Remove"  onClick = {handleContactDelete} />
          </div> 
              
    </div>   
  )
}
