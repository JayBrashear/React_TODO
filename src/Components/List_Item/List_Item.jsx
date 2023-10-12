import { useState } from 'react';
import './List_Item.css';

export default function ListItem({taskItem, deleteTask}) {
   const[isTaskComplete, setTaskComplete ] = useState(true);
    
   const itemContent = 
        isTaskComplete ?
       <span className = "TaskItem-incomplete">{taskItem}</span> :
       <span className = "TaskItem-complete">{taskItem}</span>;
  
    const handleStatus = (e) => {    
        setTaskComplete(!isTaskComplete);  
      } 
  
  const handleItemDelete = (e) => {
        e.preventDefault();
        deleteTask(taskItem);
      }

    return (
    <div className = "jsx-list-Container">  
        
          <div className = "jsx-list-item">
              {itemContent}
              <input type="button" value="Complete" className = "btn-Done" onClick = {handleStatus} />
              <input type="button" value="Remove" className = "btn-Remove"  onClick = {handleItemDelete} />
          </div> 
              
    </div>   
  )
}
