import React, {useState} from 'react';
import ChatsHeader from './ChatsHeader';
import Modal from './Modal';
const ChatsComponent = () => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <div>
        <ChatsHeader />
        <button className='open-btn' onClick={() => setModalActive(true)}>Открыть окно</button>
        <Modal active={modalActive} setActive={setModalActive}/>
        </div>
        
    );
};
export default ChatsComponent