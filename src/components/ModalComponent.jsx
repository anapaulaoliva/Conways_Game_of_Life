import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import ModalStyle from '../styles/Board.module.css';

const Modal = () => {
    return(
        <section>
            <button onClick={() => {
                //modal with information
            }}
            >
            <FontAwesomeIcon 
                icon={ faInfoCircle } 
                size="lg"
                style={{color: "lavenderblush"}}
            />
            </button>
        </section>
    );
}

export default Modal;