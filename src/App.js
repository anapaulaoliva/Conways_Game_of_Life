import React from 'react';
import Game from './components/GameComponent';
import Footer from './components/FooterComponent';

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
