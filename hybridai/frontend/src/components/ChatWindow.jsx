import React, { useState } from 'react';
import axios from 'axios';

function ChatWindow() {
    const [message, setMessage] = useState('');
    const [responses, setResponses] = useState([]);

    const sendMessage = async () => {
        const response = await axios.post('/api/chat', { message });
        setResponses([...responses, { user: message, bot: response.data.response }]);
        setMessage('');
    };

    return (
        <div className="chat-window border p-4 mb-4">
            <h2 className="text-xl font-semibold">Chat</h2>
            <div className="messages mb-2">
                {responses.map((res, index) => (
                    <div key={index}>
                        <strong>User:</strong> {res.user}
                        <br />
                        <strong>Bot:</strong> {res.bot}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border p-2 w-full"
                placeholder="Type your message..."
            />
            <button onClick={sendMessage} className="bg-blue-500 text-white p-2 mt-2">Send</button>
        </div>
    );
}

export default ChatWindow;