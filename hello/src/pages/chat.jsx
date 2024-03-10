import React, { useEffect } from 'react';
import ChatsComponent from '../components/ChatsComponent';

const Chat = () => {

    useEffect(() => {
        fetch('http://localhost:3001/chat')
        .then(response => response.json())
        .then(response => {
           
            })
        }, [])
    return (
        <ChatsComponent />
    );
};
export default Chat