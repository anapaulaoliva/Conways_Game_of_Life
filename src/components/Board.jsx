import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer';
import Controls from './Controls/Controls';
import BoardStyle from '../styles/Board.module.css';

const Board = () => {
    const numRows = 30;
    const numCols = 30;

    let counter = 0;
    const [generation, setGeneration] = useState(counter);

    /*conditionals for all the neighbor cell of the current cell that we are iterating through*/
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
    ];

    const generateEmptyGrid = () => {
        return Array(numRows).fill(Array(numCols).fill(0));
    };
    
    const [grid, setGrid] = useState( ()=> {;
        return generateEmptyGrid();
    });

    const [running, setRunning] = useState(false);

    const runningRef = useRef(running);
    runningRef.current = running;

    const runSimulation = useCallback(() => {
        setGeneration(counter)
        counter++;
        console.log(`corresimulacion time: ${counter}`);
        
        /*TODO:return !runningRef.current ? null
            :*/
        if (!runningRef.current) {
            return;
        }
        /*update state in g: current value of the grid
        gridCopy expected to conserve original grid*/
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

                            /*TODO:switch(newI, newJ) {
                                case (newI > 0 && newI < numRows 
                                    && newJ >= 0 && newJ < numCols):
                                    neighbors+= g[newI][newJ]
                                    break;
                            }*/

                            /*TODO:neighbors+= g[newI][newJ] ?
                                newI > 0 &&
                                newI < numRows &&
                                newJ >= 0 &&
                                newJ < numCols*/
                                
                            if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
                                    //counter of how many neighbors the cell has
                                    neighbors += g[newI][newJ]
                                }
                        })
                        //Conditional for the death of a cell
                        /*TODO:switch(neighbors) {
                            case (neighbors < 2 || neighbors > 3):
                                gridCopy[i][j] = 0;
                                break;
                            case(g[i][j] === 0 && neighbors === 3):
                                gridCopy[i][j] = 1;
                                break;
                        }*/
                        /*TODO:return (neighbors < 1 || neighbors > 3) ? gridCopy[i][j] = 0 
                        : (g[i][j] === 0 && neighbors === 3) ? gridCopy[i][j] = 1;*/

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
        //calling the function itself each 300ms        
        setTimeout(runSimulation, 200);
    }, []);

    const simulateButton = () => {
        setRunning(!running);
        /*checking through button's state to switch between true or false
        given the actual state -ref- of the button*/
        switch(!running) {
            case (!running):
                runningRef.current = true;
                runSimulation();
                break;
        }
    };

    const randomizeButton = () => {
        const rows = [];
            for (let i = 0; i < numRows; i++) {
                rows.push(Array.from(Array(numCols), () => 
                    Math.random() > 0.8 ? 1 : 0))
            }
            setGrid(rows);
            setGeneration(counter = 0);
    };

    const clearButton = () => {
        setGrid(generateEmptyGrid());
        setGeneration(counter = 0);
    };

    return (
        <>
            <Controls
                handlers={{
                    simulate: simulateButton,
                    random: randomizeButton,
                    clear: clearButton
                }}
            />

            <main style={{
                gridTemplateColumns: `repeat(${numCols}, 15px)`
            }}>
                {grid.map((rows, i) =>
                    rows.map((col, j) => (
                        <div
                            className={BoardStyle.Cell}
                            key={`${i}-${j}`} 
                            style={{ backgroundColor: grid[i][j] ? 'lavenderblush' : undefined }} 
                            onClick={() => {
                                const newGrid = produce(grid, gridCopy => {
                                    gridCopy[i][j] = 1;
                                })
                                setGrid(newGrid);
                            }}
                        />
                    ))
                )}
            </main>
            <div className={BoardStyle.GenCounter}>
                <span>g e n</span>
                <div className={BoardStyle.Gen}>
                    <p> { generation } </p>
                </div>
            </div>
        </>
    );
};

export default Board;