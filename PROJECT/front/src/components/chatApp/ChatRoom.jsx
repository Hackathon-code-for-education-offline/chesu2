import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ChatRoom({ roomId }) {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        async function fetchMessages() {
            const response = await axios.get(`/api/chat/${roomId}/`);
            setMessages(response.data);
        }
        fetchMessages();
    }, [roomId]);

    const handleSend = async () => {
        if (!newMessage.trim()) return;
        const response = await axios.post(`/api/chat/${roomId}/`, { text: newMessage });
        setMessages([...messages, response.data]);
        setNewMessage('');
    };

    return (
        <div className="chat-room">
            <div className="messages">
                {messages.map(msg => (
                    <div key={msg.id}>{msg.text}</div>
                ))}
            </div>
            <input
                value={newMessage}
                onChange={e => setNewMessage(e.target.value)}
                type="text"
                placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
}

export default ChatRoom;
