import React, { useState } from 'react';
import produce from 'immer';
import BoardStyle from '../styles/Board.module.css';

const Board = () => {
    const numRows = 20;
    const numCols = 20;

    const [grid, setGrid] = useState(() => {
        const rows = [];
        for (let i = 0; i < numRows; i++) {
            rows.push(Array.from(Array(numCols), () => 0))
        }

        return rows;
    });

    console.log(grid);

    return (
        <main style={{
            gridTemplateColumns: `repeat(${numCols}, 15px)`
        }}>
            {grid.map((rows, i) =>
                rows.map((col, j) => (
                    <div
                    className={BoardStyle.cell}
                    key={`${i}-${j}`} 
                    onClick={() => {
                        const newGrid = produce(grid, gridCopy => {
                            gridCopy[i][j] = 1;
                        });
                        setGrid(newGrid);
                    }}
                    style={{
                        backgroundColor: grid[i][j] ? 'pink' : undefined
                    }} 
                    />
                ))
            )}
        </main>
    );
};

export default Board;