import { useState } from 'react';
import './List_Item.css';

export default function ListItem({taskStatus,TaskComplete}) {
  const[task, setTaskComplete ] = useState(false);

  const itemStatus = 
        TaskComplete ? 
        <div className = "jsx-list-item-incomplete"><ul> <li>{task}</li></ul></div> :
        <div className = "jsx-list-item-complete"><ul> <li>{task}</li></ul></div>;
  const handleStatus = (/* e*/) => {
    setTaskComplete(!TaskComplete);
  }
  
  /* const handleItem = ()*/ 
        return (
    <div className = "jsx-list-item">
        {itemStatus}
        <input type="button" value="Done" className = "btn-Done" onClick = {handleStatus}/>
        <input type="button" value="Remove" className = "btn-Remove" /* onClick = {handleItem}*/ />
    </div>
  )
}
