import './App.css';
import React,{ useState } from 'react';
import {HashRouter,Link, Route} from 'react-router-dom';
import Contact from './contact';
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
      <HashRouter>
        <ul>
            <li><Link to='/App'>To Do List</Link></li>
            <li><Link to='/contact'>Contact List</Link></li>
        </ul>
        <Route exact path ="/App" compontent ={App} />
        <Route exact path ="/Contact" compontent ={Contact} />
      </HashRouter>
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