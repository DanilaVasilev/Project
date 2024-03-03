import React, {useState} from 'react';
import { Link } from "react-router-dom"
import ChatsHeader from './ChatsHeader';
import Modal from './Modal';
const ChatsComponent = () => {
    const [modalActive, setModalActive] = useState(true)
    return (
        <div>
        <ChatsHeader />
        <button className='open-btn' onClick={() => setModalActive(true)}>Открыть окно</button>
        <Modal active={modalActive} setActive={setModalActive}/>
        </div>
        
    );
};
export default ChatsComponent