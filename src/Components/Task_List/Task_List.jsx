import React from 'react'
import ListItem from '../List_Item/List_Item';

export default function TaskList({ tasks  }) {
    const taskList = tasks.map( taskItems => 
        <ListItem />
        );
  
    return (
      <section 
        className = "jsx-list-item-container">
        {taskList}
      </section>
  )
};
