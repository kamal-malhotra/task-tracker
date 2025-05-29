import React from "react";

function Task({ task, index, toggleTask, deleteTask }) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded shadow mb-2">
      <span
        className={\`\${task.completed ? "line-through text-gray-400" : ""}\`}
        onClick={() => toggleTask(index)}
      >
        {task.text}
      </span>
      <button
        onClick={() => deleteTask(index)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
}

export default Task;