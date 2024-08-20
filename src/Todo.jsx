// src/TodoList.js
import React, { useState } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      <input 
        type="text" 
        value={input} 
        onChange={handleInputChange} 
        placeholder="Add a new task" 
        className='bg-light text-dark'
      />
      <button  className='rounded-3  m-4 bg-primary'onClick={handleAddTask}>Add Task</button>
       <br></br>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button  className='rounded-3 m-2 bg-primary'onClick={() => handleRemoveTask(index)}>Remove The Task</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
