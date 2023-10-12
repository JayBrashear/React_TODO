import './App.css';
import React,{ useState } from 'react';
import AddTask from './Components/Add_Task/Add_Task.jsx';
import TaskList from './Components/Task_List/Task_List.jsx';


function App() {
  const [taskList,setTasks] = useState([
  ]);
  
  const addNewTaskItem = (task) => {
    const newTaskItem = [...taskList,{taskItem: task}];
    setTasks(newTaskItem);
  }
  const deleteTask = (taskItem) => {
    const updatedTaskList = taskList.filter(task => 
          task.taskItem !== taskItem);
    setTasks(updatedTaskList);
  }
 
   return (
    <div className="App">
      <nav className="nav justify-content-center">
        <a className="nav-link todo" href="#">To Do List</a>
        <a className="nav-link contact" href="#">Contact List</a>
      </nav>
      <header className="App-header">
        <h1>ToDo or Not ToDo</h1>
      </header>
      <main className = "jsx-task-form">
        <AddTask addNewTaskItem = {addNewTaskItem}  />
        <TaskList tasks = {taskList} deleteTask = {deleteTask} /> 
      </main>
    </div>
  );
}

export default App;