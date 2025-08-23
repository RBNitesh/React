import React, { useState, useEffect } from "react";
import "./index.css";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  const totalCount = tasks.length;
  const completedCount = tasks.filter((t) => t.completed).length;
  const remainingCount = totalCount - completedCount;

  const filteredTask = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });

  // initialize tasks from local storage, when the component is mounted
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(savedTasks);
  }, []);

  // save tasks to local storage, when tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // function to add the new tasks
  const addTask = () => {
    if (!newTask.trim()) return; // prevent empty tasks

    const task = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
      completedAt: null,
      priority: "medium",
    };
    setTasks((prev) => [task, ...prev]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
              completedAt: !task.completed ? new Date().toISOString() : null,
            }
          : task
      )
    );
  };

  // function to delete the task after completion
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const setPriority = (id, priority) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, priority } : task))
    );
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "border-red-400 bg-red-800";
      case "medium":
        return "border-yellow-400 bg-yellow-800";
      case "low":
        return "border-green-400 bg-green-800";
      default:
        return "border-gray-600 bg-slate-800";
    }
  };

  return (
    <div>
      <div className="filter-buttons">
        {["all", "pending", "completed"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={filter === type ? "active" : ""}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)} (
            {
              // lookup object
              {
                all: totalCount,
                pending: remainingCount,
                completed: completedCount,
              }[type] // returns the value corresponding to {type} key
            }
            )
          </button>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          placeholder="Add a new task..."
          className="px-4 py-2 bg-slate-700 text-white rounded"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add
        </button>
      </div>

      <div>
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex p-2 rounded border-l-4 ${getPriorityColor(task.priority)}"
          >
            <div className="px-2 flex items-center space-x-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span
                className={task.completed ? "line-through text-gray-500" : ""}
              >
                {task.text}
              </span>
              <select
                value={task.priority}
                onChange={(e) => setPriority(tasks.id, e.target.value)}
                className="text-xs bg-slate-700 text-gray-300 border border-slate-600 rounded px-1"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-400"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
