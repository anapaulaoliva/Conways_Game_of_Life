import React, { useState } from 'react';
import CleanIcon from '../assets/clean-modal-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPlay, faRandom } from '@fortawesome/free-solid-svg-icons';
import ModalStyle from '../styles/Modal.module.css';

const Modal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return(

        <section>
            <button onClick={() => {
                setIsModalOpen(true)
            }}>
                <FontAwesomeIcon 
                    className={ModalStyle.InfoIcon}
                    icon={ faInfoCircle } 
                    size="lg"
                    style={{color: "lavenderblush"}}
                />
            </button>

            {isModalOpen && (
                <div className={ModalStyle.Overlay}>
                    <div className={ModalStyle.Dialog}>
                        <h1>
                            <span role="img" aria-label="tada">🎉</span>
                            Conway's Game of Life
                            <span role="img" aria-label="tada">🎉</span>
                        </h1>
                        <h3>To:</h3> <br/>
                            <p style={{fontSize:"1em"}}>
                                Pause/Resume press the <FontAwesomeIcon icon={faPlay}/> button. <br/>
                                Create random life press the <FontAwesomeIcon icon={faRandom}/> button. <br/>
                                Clear the board press the <img src={CleanIcon} alt="clean-icon"/> button. <br/>
                            </p>
                        <h4>For the rules and for more fun shapes:</h4>
                                <a 
                                    href="https://bit.ly/36VVFGn" 
                                    target="_blank"
                                    style={{color: "rgb(105, 59, 212)"}}>
                                        Wikipedia article about the game
                                </a>
                                <br/>
                                <a 
                                    href="https://bit.ly/2zY5cjT" 
                                    target="_blank"
                                    style={{color: "rgb(105, 59, 212)"}}>
                                        LifeWiki
                                </a>
                                <br/>
                        <button 
                            onClick={() => 
                            setIsModalOpen(false)
                            }>
                            <span className={ModalStyle.CrossIcon}>&times;</span>
                        </button>
                    </div>
                </div>
            )}
        </section>

    );
}

export default Modal;
