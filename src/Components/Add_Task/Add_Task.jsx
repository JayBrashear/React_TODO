import React from 'react';
import '../Add_Task/Add_Task.css'

const AddTask = ({ addNewTaskItem }) => {
  const handleSubmit = (e) => {
        e.preventDefault();
        
        let NewTaskField = document.querySelector('[name = Task]');
        let NewTaskValue = NewTaskField.value;
    
        NewTaskField.value = '';
              
       addNewTaskItem(NewTaskValue);
  }
    return (
    <div className = "Task-form">
     <h2>Add A New Task</h2>
      <form action ="#" method='GET' onSubmit = {handleSubmit}>
        <div className="form-row">
           <label>
            <input
              type="text" 
              name="Task"   
              className = "Task-field"
              placeholder="...add new task"></input>
            <button className="btn btn-primary" >Add Task</button>
            </label>
        </div>
      </form>
  </div>
  )
}
export default AddTask;
