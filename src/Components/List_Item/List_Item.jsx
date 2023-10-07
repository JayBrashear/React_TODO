import { useState } from 'react';
import './List_Item.css';

export default function ListItem({taskStatus,taskItem, deleteTaskItem } ) {
  const[isComplete, setTaskComplete ] = useState(false);

  const itemContent = 
        isComplete ?
       <p className = "Task-Incomplete">{taskItem}</p> :
       <p className = "Task-Complete">{taskItem}</p>;

  const handleStatus = (/* e*/) => {
    setTaskComplete(!isComplete);
  };
  
   const handleItemDelete = (e) =>
        e.preventDefault();
        deleteTaskItem(taskItem);

    return (
      <div className = "jsx-list-item">
            {itemContent}
            <input type="button" value="Done" className = "btn-Done" onClick = {handleStatus}/>
            <input type="button" value="Remove" className = "btn-Remove"  onClick = {handleItemDelete} />
    </div>    
  )
}
