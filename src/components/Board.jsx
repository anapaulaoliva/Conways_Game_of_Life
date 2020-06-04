import React, { useState, useRef } from 'react';
import produce from 'immer';
import Controls from './Controls/Controls';
import BoardStyle from '../styles/Board.module.css';

const COORDINATES = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0]
];

const INTERVAL = 200;

let timerSimulation = null;

const Board = () => {
        const rows = 30;
        const cols = 30;
        let gen = 0;

    const [generation, setGeneration] = useState(0);
    const gridState = useState(Array(rows).fill(Array(cols).fill(0)));
    const setGrid = gridState[1];
    let grid = gridState[0];
    console.log(grid);
    const [running, setRunning] = useState(false);

    //sets current value of the simulation as a stored value
    const runningRef = useRef(running);
    runningRef.current = running;

    const calculateGrid = () => {
            let newGrid = [...grid];
            //for loops go through every single cell of the grid
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    //compute neighbors
                    let neighbors = 0;
                    //checking each condition given in the array
                    COORDINATES.forEach(([row,col]) => {
                        //new neighbors with coordinates
                        const neighborRow = i + row;
                        const neighborColumn = j + col;
                        //conditionals to delimitate checking above or below the grid values
                        if (
                            neighborRow >= 0 && 
                            neighborRow < rows && 
                            neighborColumn >= 0 && 
                            neighborColumn < cols
                            ) {
                                //counter of how many neighbors the cell has
                                neighbors += grid[neighborRow][neighborColumn];
                            }
                    })
                    //Conditional for the death of a cell
                    if (neighbors < 2 || neighbors > 3) {
                        //current position dies.
                        newGrid[i][j] = 0;
                    //Conditional for the "birth" of a cell
                    } else if (grid[i][j] === 0 && neighbors === 3) {
                        //current position lives.
                        newGrid[i][j] = 1;
                    }
                }
            }
            return newGrid;
    };

    const runSimulation = () => {
        //checking current state of the simulation     
        if (!runningRef.current) {
            return;
        }
        //each time runSimulation is called gen amount goes ++;
        setGeneration(gen);
        gen++;
        //update state of g: current value of the grid
        const newGrid = calculateGrid();
        setGrid(newGrid);
    };

    const simulateButton = () => {
        //changes the state true/false of the simulation
        setRunning(!running);
        //checking playbtn state given the actual state -ref- of the button
        if(!running) {
            clearInterval(timerSimulation);
            runningRef.current = true; 
            runSimulation();
            timerSimulation = setInterval(runSimulation, INTERVAL);
        }
    };

    const randomizeButton = () => {
        const rows = [];
            for (let i = 0; i < rows; i++) {
                rows.push(Array.from(Array(cols), () => 
                    Math.random() > 0.8 ? 1 : 0))
            }
            setGrid(rows);
            setGeneration(gen = 0);
    };

    const clearButton = () => {
        setGrid(Array(rows).fill(Array(cols).fill(0)));
        setGeneration(gen = 0);
    };

    const myFunction = () => {
    };

    return (
        <>
            <Controls
                handlers={{
                    simulate: simulateButton,
                    random: randomizeButton,
                    clear: clearButton
                }}/>

            <main className={BoardStyle.Grid}> 
                {grid.map((rows, i) =>
                rows.map((col, j) => (
                <div
                className={BoardStyle.Cell}
                key={`${i}-${j}`} 
                style={{ backgroundColor: grid[i][j] ? 'lavenderblush' : undefined }} 
                onClick={() => {
                    const newGrid = produce(grid, newGrid => {
                    newGrid[i][j] = 1;
                })
                    setGrid(newGrid);
                    }}
                />
                ))
                )
                }
            </main>

            {/*Generation counter section*/}
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