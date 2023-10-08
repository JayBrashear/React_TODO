import { useState } from 'react';
import './List_Item.css';

export default function ListItem({taskItem}) {
   const[isTaskComplete, setTaskComplete ] = useState(false);

  const itemContent = 
        isTaskComplete ?
       <span className = "TaskItem-incomplete">{taskItem}</span> :
       <span className = "TaskItem-complete">{taskItem}</span>;

  const handleStatus = (e) => {    
        setTaskComplete(!isTaskComplete);  
      } 
   /*const handleItemDelete = (e) =>
        e.preventDefault();
        deleteTaskItem(taskItem);
*/
    return (
      <div className = "jsx-list-item">
            {itemContent}
            <input type="button" value="Done" className = "btn-Done" onClick = {handleStatus} />
            <input type="button" value="Remove" className = "btn-Remove"  /*onClick = {handleItemDelete} *//>
    </div>    
  )
}
