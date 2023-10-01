import React from 'react';
import '../Add_Task/Add_Task.css'

export default function AddTask() {
  return (
    <div className = "Task-form">
     <h2>Add A New Task</h2>
      <form action ="#" method='GET'>
        <div class="form-row">
           <label>
            <input type="text" name="Task" className = "Task-field"placeholder="...add new task"></input>
            <button className="btn btn-primary" >Add Task</button>
            </label>
        </div>
      </form>
  </div>
  )
}
