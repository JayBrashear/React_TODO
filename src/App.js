import './App.css';
import React,{ useState } from 'react';
import AddTask from './Components/Add_Task/Add_Task.jsx';
import TaskList from './Components/Task_List/Task_List.jsx';

function App() {
  const [taskList,setTasks] = useState([
    {task:"Pick Up Dry Cleaning"},
    {task:"Bring in the dog"},
    {task:"Put out the cat"},
  ]);
  const addNewTaskItem = (task) => {
    const newTaskItem = [...taskList,{task}];
    setTasks(newTaskItem);

  const deleteTaskItem = (task) => {
    const updatedTaskList = taskList.filter(task => task.task !== task);
    setTasks(updatedTaskList);
  }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo or Not ToDo</h1>
      </header>
      <main className = "jsx-task-form">
        <AddTask addNewTaskItem = {addNewTaskItem}  />
        <TaskList tasks = {taskList} deleteTaskItem = {deleteTaskItem} />
        </main>
    </div>
  );
}

export default App;
