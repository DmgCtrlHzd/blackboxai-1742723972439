import React from 'react';
import ChatWindow from './components/ChatWindow';
import TaskManager from './components/TaskManager';
import Cursor from './components/Cursor';

function App() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">HybridAI</h1>
            <ChatWindow />
            <TaskManager />
            <Cursor />
        </div>
    );
}

export default App;