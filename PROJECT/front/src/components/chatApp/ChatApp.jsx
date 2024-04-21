import React, { useState, useEffect } from 'react';
import ChatList from './ChatList';
import ChatRoom from './ChatRoom';
import axios from 'axios';

function ChatApp() {
    const [chatRooms, setChatRooms] = useState([]);
    const [activeRoom, setActiveRoom] = useState(null);

    useEffect(() => {
        async function fetchChatRooms() {
            const response = await axios.get('/api/chatrooms/');
            setChatRooms(response.data);
        }
        fetchChatRooms();
    }, []);

    return (
        <div className="chat-app">
            <ChatList rooms={chatRooms} onRoomSelect={setActiveRoom} />
            {activeRoom && <ChatRoom roomId={activeRoom.id} />}
        </div>
    );
}

export default ChatApp;
