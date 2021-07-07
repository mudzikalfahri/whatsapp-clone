import React from 'react';
import './chat-bubble.styles.scss';

function ChatBubble({name, message, displayName}) {
    return (
        <div className={`chat-bubble ${displayName === name && 'ourself'}`}>
            <p className="name">{name}</p>
            <p className="chat-content">{message}</p>
        </div>
    )
}

export default ChatBubble
