import './App.css';
import React,{ useState } from 'react';
import AddTask from './Components/Add_Task/Add_Task.jsx';
import TaskList from './Components/Task_List/Task_List.jsx';
import ListItem from './Components/List_Item/List_Item';

function App() {
  const [taskList,setTasks] = useState([
    {taskItem:"Pick Up Dry Cleaning"},
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
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo or Not ToDo</h1>
      </header>
      <main className = "jsx-task-form">
        <AddTask addNewTaskItem = {addNewTaskItem}  />
        <TaskList tasks = {taskList}  />
        <ListItem taskItem = "Pick Up Dry Cleaning"/>
        <ListItem taskItem = "Bring in Cat"/>
      </main>
    </div>
  );
}

export default App;
