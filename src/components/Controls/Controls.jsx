import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRandom } from '@fortawesome/free-solid-svg-icons';
import ClearIcon from '../../assets/clear-icon.png'
import ControlsStyle from '../../styles/Controls.module.css';

const Controls = ({handlers}) => {
    const { simulate, random, clear } = handlers;
    const [simulateIsActive, setSimulateIsActive] = useState(true); 

    return(
        <section className={ControlsStyle.Controls}>
            <button onClick={ () => {
                setSimulateIsActive(!simulateIsActive)
                simulate();
                }}>

                {simulateIsActive ? 
                    <FontAwesomeIcon 
                        icon={faPlay}
                        size="lg" 
                        style={{color: "whitesmoke"}}
                    /> 
                :   <FontAwesomeIcon
                        icon={faPause}
                        size="lg"
                        style={{color: "whitesmoke"}}
                    />
                }
            </button>

            <button onClick={random}>
                <FontAwesomeIcon 
                    icon ={faRandom} 
                    size="lg"
                    style={{color: "whitesmoke"}}
                />
            </button>

            <button onClick={clear}>
                <img
                    className={ControlsStyle.CleanIcon}
                    src={ClearIcon}
                    alt="clear-icon"
                />
            </button>
        </section>
    );
}

export default Controls;