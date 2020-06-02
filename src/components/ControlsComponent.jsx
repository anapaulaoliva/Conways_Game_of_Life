import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRandom } from '@fortawesome/free-solid-svg-icons';
import ClearIcon from '../assets/clear-icon.png';
import ControlsStyle from '../styles/Controls.module.css';

const Controls = () => {
    return(
        <section className={ControlsStyle.Controls}>
        <button onClick={()=>{
            //setRunning(!running);
            /*checking through button's state to switch between true or false
            given the actual state -ref- of the button*/
            /*switch(!running) {
                case (!running):
                    runningRef.current = true;
                    runSimulation();
                    break;
            }*/
        }}
        >

        {   //Dynamic rendering of play/pause button
            running ? <FontAwesomeIcon 
                    icon = {faPause} 
                    size="lg" 
                    style={{color: "whitesmoke"}}
                    /> 
                : <FontAwesomeIcon 
                    icon ={faPlay} 
                    size="lg" 
                    style={{color: "whitesmoke"}}
                    />
        }
        </button>

        <button onClick={()=>{
            /*const rows = [];
            for (let i = 0; i < numRows; i++) {
                rows.push(Array.from(Array(numCols), () => 
                    Math.random() > 0.8 ? 1 : 0))
            }
            setGrid(rows);
            setGeneration(counter = 0);*/
        }}>
            <FontAwesomeIcon 
                icon ={faRandom} 
                size="lg"
                style={{color: "whitesmoke"}}
                />
        </button>

        <button onClick={()=>{
            /*setGrid(generateEmptyGrid());
            setGeneration(counter = 0);*/
        }}>
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