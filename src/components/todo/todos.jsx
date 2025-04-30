import React, { useState } from "react";
import "./todos.css";

const ToDoPage = () => {
  // State to hold tasks
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  // Add task to the list
  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]); // Add new task to the list
      setTaskInput(""); // Clear input field
    }
  };

  // Remove a task by index
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // Remove task by filtering it out
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <div className="add-task-form">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a new task"
          className="task-input"
        />
        <button onClick={addTask} className="add-task-btn">
          Add Task
        </button>
      </div>

      {/* Display tasks */}
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span className="task-name">{task}</span> {/* Task name */}
            <button onClick={() => removeTask(index)} className="delete-task-btn">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoPage;
