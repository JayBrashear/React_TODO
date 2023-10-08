import { useState } from 'react';
import './List_Item.css';

export default function ListItem({taskItem, deleteTask, filterTask}) {
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
  const handleItemFilter = (e) => {
        e.preventDefault();
        filterTask(taskItem);
      }
    return (
    <div className = "jsx-list-Container">  
        <div className = "jsx-list-item">
            {itemContent}
            <input type="button" value="Complete" className = "btn-Done" onClick = {handleStatus} />
            <input type="button" value="Remove" className = "btn-Remove"  onClick = {handleItemDelete} />
        </div> 
      <input type="button" value="Completed Item" className = "btn-Filter"  onClick = {handleItemFilter} />
      <input type="button" value="Incomplete Item" className = "btn-Filter"  onClick = {handleItemFilter} />
      <input type="button" value="All Items" className = "btn-Filter"  onClick = {handleItemFilter} />
    </div>   
  )
}
