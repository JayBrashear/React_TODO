import React from 'react'
import ListItem from '../List_Item/List_Item';

export default function TaskList({ tasks, deleteTaskItem  }) {
    const taskList = tasks.map( taskItems => 
        <ListItem 
          tasks ={tasks.taskItems}
          taskStatus = {taskItems.taskStatus}
          deleteTaskItem = {deleteTaskItem} />
        );
  
    return (
      <section 
        className = "jsx-list-item-container">
        {taskList}
      </section>
  )
}
