import './App.css';
import React,{ useState } from 'react';
import AddTask from './Components/Add_Task/Add_Task.jsx';
import TaskList from './Components/Task_List/Task_List.jsx';
import ListItem from './Components/List_Item/List_Item';

function App() {
  const [taskList,setTasks] = useState([
    {taskItem:"Get the cat"},
  ]);
  const addNewTaskItem = (task) => {
    const newTaskItem = [...taskList,{task}];
    setTasks(newTaskItem);
/*
  const deleteTaskItem = (task) => {
    const updatedTaskList = taskList.filter(task => task.task !== task);
    setTasks(updatedTaskList);
  }
*/
  
  }
 
  const testList = taskList.map( task =>
  <ListItem 
    taskItem = {task.taskItem} 
    key = {`${task.taskItem}`}/>
  );

 
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo or Not ToDo</h1>
      </header>
      <main className = "jsx-task-form">
        <AddTask addNewTaskItem = {addNewTaskItem}  />
        {testList}                
      </main>
    </div>
  );
}

export default App;
