import React from 'react';
import Board from './BoardComponent';
import Controls from './ControlsComponent';
import '../App.css';

const Game = () => {
    return (
        <>
        <div className="App">
            <Controls/>
            <Board/>
        </div>
        </>
    );
};

export default Game;