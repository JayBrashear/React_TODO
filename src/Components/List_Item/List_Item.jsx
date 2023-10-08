import { useState } from 'react';
import './List_Item.css';

export default function ListItem({taskItem}) {
 /*
  const[isComplete, setTaskComplete ] = useState(false);

  const itemContent = 
        isComplete ?
       <div className = "TaskItem-incomplete">{taskItem}</div> :
       <div className = "TaskItem-complete">{taskItem}</div>;

  const handleStatus = ( e) => {    setTaskComplete(!isComplete);  } */  
   /*const handleItemDelete = (e) =>
        e.preventDefault();
        deleteTaskItem(taskItem);
*/

    return (
      <div className = "jsx-list-item">
            <span className = "TaskItem-incomplete">{taskItem}</span>
            <input type="button" value="Done" className = "btn-Done" /*onClick = {handleStatus} *//>
            <input type="button" value="Remove" className = "btn-Remove"  /*onClick = {handleItemDelete} *//>
    </div>    
  )
}
