import React, { useEffect } from 'react';
import { Link } from "react-router-dom"
const Chat = () => {

    useEffect(() => {
        fetch('http://localhost:3001/chat')
        .then(response => response.json())
        .then(response => {
           
            })
        }, [])
    return (
        <div className='html'>
            <div>
                <div className = 'text'>
                <label>
                    <input name="firstName" />
                </label>
                </div>
                <div>
                    <h3>
                    <Link to='/' className='chat'>Профиль</Link>
                    </h3>
                </div>
                   
            </div>
        </div>
    );
};
export default Chat