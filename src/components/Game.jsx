import React from 'react';
import Board from './Board';
import Modal from './Modal';
import '../App.css';

const Game = () => {
    return (
        <>
        <div className="App">
            <Board/>
            <Modal/>
        </div>
        </>
    );
};

export default Game;