import React from 'react';
import "./modal.css";
const Modal = ({active, setActive}) => {
    return(
        <div className={active ? "modal__active modal":"modal"} onClick={() => setActive(false)}>
                <div className ='modal__content' onClick={e => e.stopPropagation()}>
                    <div className='modal__content_text'>
                        <h3>Добавить чат</h3>
                        <h4>Имя чата</h4>
                        <input />
                        <button>Добавить</button>
                    </div>
                </div>
        </div>
    );
};
export default Modal;