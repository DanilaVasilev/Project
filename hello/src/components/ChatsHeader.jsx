import React from 'react';
import { Link } from "react-router-dom"
const ChatsHeader = () => {
    
    return (
        <div className='chatsheader'>
            <div>
                <h3>
                    <Link to='/' className='chat'>Профиль {'>'}</Link>
                </h3>
                <div>
                    <label>
                        <input placeholder='Поиск'></input>
                    </label>
                </div>
            </div>
        </div>
    );
};
export default ChatsHeader