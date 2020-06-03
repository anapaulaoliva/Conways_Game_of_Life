import React from 'react';
import Game from './components/Game';
import Footer from './components/Footer';

function App() {
  return (
      <div className="App">
        <header>Game of Life</header>
        <Game/>
        <Footer/>
      </div>
  );
}

export default App;
