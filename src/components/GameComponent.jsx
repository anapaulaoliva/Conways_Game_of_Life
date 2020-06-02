import React from 'react';
import Board from './BoardComponent';
import Modal from './ModalComponent';
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