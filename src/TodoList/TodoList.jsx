import React, { useState } from "react";
import "./TodoList.css";

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask("");
        }
    };

    const toggleTask = (index) => {
        setTasks(tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        ));
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="todo-container">
            <h2>To-Do List</h2>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Ajouter une tâche..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button className="add-btn" onClick={addTask}>+</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className={task.completed ? "completed" : ""}>
                        <span>{task.text}</span>
                        <div>
                            <button
                                className={task.completed ? "resume-btn" : "complete-btn"}
                                onClick={() => toggleTask(index)}
                            >
                                {task.completed ? "↩" : "✔"}
                            </button>
                            <button className="delete-btn" onClick={() => removeTask(index)}>🗑</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
