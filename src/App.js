import React from 'react';
import Board from '../src/components/Board';
import Modal from '../src/components/Modal';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>The Game of Life</h1>
        <Board/>
        <Modal/>
        <Footer/>
    </div>
  );
}

export default App;
