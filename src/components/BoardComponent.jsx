import React, { useState } from 'react';
import BoardStyle from '../styles/Board.module.css';

const Board = () => {
    const numRows = 10;
    const numCols = 10;

    const [grid, setGrid] = useState(() => {
        const rows = [];
        for (let i = 0; i < numRows; i++) {
            rows.push(Array.from(Array(numCols), () => 0))
        }

        return rows;
    });

    console.log(grid);

    return (

        <main>Board with squares</main>
    );
};

export default Board;