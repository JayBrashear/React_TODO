import React from 'react';
import './Task_list.css';
import ListItem from '../List_Item/List_Item';

export default function TaskList({ tasks, deleteTask, filterTask  }) {
    const taskList = tasks.map( task =>
          <ListItem 
            taskItem = {task.taskItem} 
            key = {`${task.taskItem}`}
            deleteTask ={deleteTask}
            filterTask = {filterTask}/>
          );
    return (
      <section 
        className = "jsx-list-item-container">
        {taskList}
      </section>
  )
};