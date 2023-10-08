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
  /*
  const filterTask = (taskItem) => {
    const filteredTaskList = taskList.filter(task => 
          task.taskItem === );
    setTasks(filteredTaskList);
  } 
  */
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo or Not ToDo</h1>
      </header>
      <main className = "jsx-task-form">
        <AddTask addNewTaskItem = {addNewTaskItem}  />
        <TaskList tasks = {taskList} deleteTask = {deleteTask} filterTask = {filterTask}/> 
      </main>
    </div>
  );
}

export default App;