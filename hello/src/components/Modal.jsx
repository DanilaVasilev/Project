import React from 'react';
import "./modal.css";
const Modal = ({active, setActive}) => {
    return(
        <div className={active ? "modal__active modal":"modal"} onClick={() => setActive(false)}>
                <div className ='modal__content' onClick={e => e.stopPropagation()}>
                hello
                </div>
        </div>
    );
};
export default Modal;