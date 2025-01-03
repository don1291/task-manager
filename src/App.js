import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/tasks").then(response => {
            setTasks(response.data);
        });
    }, []);

    const addTask = () => {
        const task = { id: Date.now(), text: newTask };
        axios.post("http://localhost:3000/tasks", task).then(() => {
            setTasks([...tasks, task]);
            setNewTask("");
        });
    };

    const deleteTask = (id) => {
        axios.delete(`http://localhost:3000/tasks/${id}`).then(() => {
            setTasks(tasks.filter(task => task.id !== id));
        });
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <input 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)} 
                placeholder="Add a task" 
            />
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.text}
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;

