import React from "react";
import "./completed.css";

function Completed({ completedTasks, setCompletedTasks }) {
  const handleRemove = (index) => {
    const updatedTasks = [...completedTasks];
    updatedTasks.splice(index, 1); // Remove the task from the array
    setCompletedTasks(updatedTasks); // Update the state
  };

  return (
    <div className="completed-container">
      <h2>Completed Tasks</h2>
      <ul>
        {completedTasks.length > 0 ? (
          completedTasks.map((task, index) => (
            <li key={index} className="completed-task">
              <span>{task}</span>
              <button className="remove-button" onClick={() => handleRemove(index)}>
                Remove
              </button>
            </li>
          ))
        ) : (
          <p className="no-tasks">No tasks completed yet!</p>
        )}
      </ul>
    </div>
  );
}

export default Completed;
