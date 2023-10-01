import './App.css';
import React,{ useState } from 'react';
import AddTask from './Components/Add_Task/Add_Task.jsx';
import TaskList from './Components/Task_List/Task_List.jsx';
import ListItem from './Components/List_Item/List_Item.jsx';


function App() {
  const [tasks,setTasks] = useState([
    {task:"Pick Up Dry Cleaning"},
    {task:"Mow the lawn"},
    {task:"Bring in the dog"},
    {task:"Put out the cat"},
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo or Not ToDo</h1>
      </header>
      <main className = "jsx-task-form">
        <AddTask/>
        <TaskList tasks = {tasks}/>
        </main>
    </div>
  );
}

export default App;
