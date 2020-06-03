import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRandom } from '@fortawesome/free-solid-svg-icons';
import ClearIcon from '../../assets/clear-icon.png'
import ControlsStyle from '../../styles/Controls.module.css';

const Controls = ({handlers}) => {
    //asignment of handling events values
    const { simulate, random, clear } = handlers;
    const [simulationIsActive, setSimulationIsActive] = useState(true); 

    const runSimulation = () => {
        setSimulationIsActive(!simulationIsActive)
        simulate();
    };

    return(
        <section className={ControlsStyle.Controls}>
            <button onClick={runSimulation}>
            
                {simulationIsActive ? 
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