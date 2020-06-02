import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer';
import BoardStyle from '../styles/Board.module.css';

const Board = () => {
    const numRows = 30;
    const numCols = 30;

    /*conditionals for all the neighbor cells
    of the current cell that we are iterating through
    are stored represented as a 2d array*/
    const operations = [
        //x,y values
        [0, 1],
        [0, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
        [-1, -1],
        [1, 0],
        [-1, 0]
    ]

    const [grid, setGrid] = useState(() => {
        const rows = [];
        for (let i = 0; i < numRows; i++) {
            rows.push(Array.from(Array(numCols), () => 0))
        }

        return rows;
    });

    const [running, setRunning] = useState(false);

    const runningRef = useRef(running);
    runningRef.current = running;

    const runSimulation = useCallback(() => {
        if (!runningRef.current) {
            return;
        }
        /*update states in 
        g: current value of the grid
        gridCopy expected to mutate*/
        setGrid((g) => {
            return produce(g, gridCopy => {
                //for loops go through every single cell of the grid
                for (let i = 0; i < numRows; i++) {
                    for (let j = 0; j < numCols; j++) {
                        //compute neighbors
                        let neighbors = 0;
                        //checking each condition given in the array
                        operations.forEach(([x,y]) => {
                            const newI = i + x;
                            const newJ = j + y;
                            //conditionals to delimitate checking above or below the grid values
                            if (newI >= 0 &&
                                newI < numRows &&
                                newJ >= 0 &&
                                newJ < numCols) {
                                    //counter of how many neighbors the cell has
                                    neighbors += g[newI][newJ]
                                }
                        })
                        //Conditional for the death of a cell
                        if (neighbors < 2 || neighbors > 3) {
                            //current position dies.
                            gridCopy[i][j] = 0;
                        //Conditional for the "birth" of a cell
                        } else if (g[i][j] === 0 && neighbors === 3) {
                            //current position lives.
                            gridCopy[i][j] = 1;
                        }

                    }
                }
            });
        });
        //calling the function itself each 1000ms        
        setTimeout(runSimulation, 1000);
    }, []);

    return (
        <>
            <button onClick={()=>{
                setRunning(!running);
                /*checking through button's state to switch between true or false
                given the actual state -ref- of the button*/
                if(!running){
                    runningRef.current = true;
                    runSimulation();
                }
                }}
            >
            {running ? 'stop' : 'start'}
            </button>
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
                            backgroundColor: grid[i][j] ? 'lavenderblush' : undefined
                        }} 
                        />
                    ))
                )}
            </main>
        </>
    );
};

export default Board;