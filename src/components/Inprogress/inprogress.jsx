import React, { useState } from "react";
import "./inprogress.css";

const InProgressPage = () => {
  const [toDoTasks, setToDoTasks] = useState([]); // Stores tasks for To-Do
  const [inProgressTasks, setInProgressTasks] = useState([]); // Stores tasks for In-Progress
  const [taskInput, setTaskInput] = useState("");

  // Add task to To-Do list
  const addToDoTask = () => {
    if (taskInput.trim()) {
      setToDoTasks([...toDoTasks, taskInput]); // Add task to To-Do
      setTaskInput(""); // Clear input field
    }
  };

  // Move task to In-Progress list
  const moveToInProgress = (index) => {
    const taskToMove = toDoTasks[index];
    setInProgressTasks([...inProgressTasks, taskToMove]); // Add task to In-Progress
    setToDoTasks(toDoTasks.filter((_, i) => i !== index)); // Remove task from To-Do
  };

  // Remove task from In-Progress
  const removeInProgressTask = (index) => {
    setInProgressTasks(inProgressTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="in-progress-container">
      <h2>Task Manager</h2>

      {/* To-Do Section */}
      <div className="section">
        <h3>To-Do Tasks</h3>
        <div className="add-task-form">
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Enter a new task"
            className="task-input"
          />
          <button onClick={addToDoTask} className="add-task-btn">
            Add Task
          </button>
        </div>
        <ul className="task-list">
          {toDoTasks.map((task, index) => (
            <li key={index} className="task-item">
              <span className="task-name">{task}</span>
              <button onClick={() => moveToInProgress(index)} className="progress-task-btn">
                Move to In Progress
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* In-Progress Section */}
      <div className="section">
        <h3>In-Progress Tasks</h3>
        <ul className="task-list">
          {inProgressTasks.map((task, index) => (
            <li key={index} className="task-item">
              <span className="task-name">{task}</span>
              <button onClick={() => removeInProgressTask(index)} className="delete-task-btn">
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InProgressPage;
