import React from "react";
import "./onhold.css";

function OnHold({ holdTasks, setHoldTasks }) {
  const handleRemove = (index) => {
    const updatedTasks = [...holdTasks];
    updatedTasks.splice(index, 1); // Remove the task from the array
    setHoldTasks(updatedTasks); // Update the state
  };

  return (
    <div className="onhold-container">
      <h2>On Hold Tasks</h2>
      <ul>
        {holdTasks.length > 0 ? (
          holdTasks.map((task, index) => (
            <li key={index} className="onhold-task">
              <span>{task}</span>
              <button className="remove-button" onClick={() => handleRemove(index)}>
                Remove
              </button>
            </li>
          ))
        ) : (
          <p className="no-tasks">No tasks on hold!</p>
        )}
      </ul>
    </div>
  );
}

export default OnHold;
