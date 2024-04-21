import React from 'react';

function ChatList({ rooms, onRoomSelect }) {
    return (
        <div className="chat-list">
            {rooms.map(room => (
                <div key={room.id} onClick={() => onRoomSelect(room)}>
                    {room.title}
                </div>
            ))}
        </div>
    );
}

export default ChatList;
