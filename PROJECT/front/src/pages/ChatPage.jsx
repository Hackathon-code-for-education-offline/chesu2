import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ChatPage() {
    const { userId } = useParams();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Загрузите историю сообщений или настройте WebSocket для получения сообщений
        const fetchMessages = async () => {
            try {
                const response = await axios.get(`/api/messages/${userId}`);
                setMessages(response.data);
            } catch (error) {
                console.error('Failed to fetch messages:', error);
            }
        };
        fetchMessages();
    }, [userId]);

    return (
        <div>
            {messages.map(msg => (
                <div key={msg.id}>{msg.text}</div>
            ))}
            {/* Компонент для отправки новых сообщений */}
        </div>
    );
}

export default ChatPage;
