import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskManager() {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const response = await axios.post('/api/agi', { prompt: "Get current tasks" });
        setTasks(response.data.result);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="task-manager border p-4 mb-4">
            <h2 className="text-xl font-semibold">Task Manager</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className={task.completed ? "line-through" : ""}>
                        {task.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskManager;