import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer';
import Controls from './Controls/Controls';
import BoardStyle from '../styles/Board.module.css';

const Board = () => {
    //setting by default size of the grid
    const numRows = 30;
    const numCols = 30;

    //setting gen counter
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

    //generates bidimensional array
    const generateEmptyGrid = () => {
        return Array(numRows).fill(Array(numCols).fill(0));
    };

    //sets initial state of the grid
    const [grid, setGrid] = useState( ()=> {
        return generateEmptyGrid();
    });

    //sets state for the simulation function call
    const [running, setRunning] = useState(false);

    //sets current value of the simulation as a stored value
    const runningRef = useRef(running);
    runningRef.current = running;

    //por que use un callback
    const runSimulation = useCallback(() => {
        //each time runSimulation is called gen amount goes ++;
        setGeneration(counter);
        counter++;
        //checking current state of the simulation     
        if (!runningRef.current) {
            return;
        }
        //update state of g: current value of the grid
        setGrid((g) => {
            //gridCopy expected to conserve original grid
            
            return produce(g, gridCopy => {
                //for loops go through every single cell of the grid
                for (let i = 0; i < numRows; i++) {
                    for (let j = 0; j < numCols; j++) {
                        //compute neighbors
                        let neighbors = 0;
                        //checking each condition given in the array
                        operations.forEach(([x,y]) => {
                            //new neighbors with coordinates
                            const newI = i + x;
                            const newJ = j + y;
                            //conditionals to delimitate checking above or below the grid values
                            if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
                                    //counter of how many neighbors the cell has
                                    neighbors += g[newI][newJ];
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
        //calling the function itself each 300ms        
        setTimeout(runSimulation, 200);
    }, []);

    const simulateButton = () => {
        //changes the state true/false of the simulation
        setRunning(!running);
        //checking playbtn state given the actual state -ref- of the button
        if(!running) {
            runningRef.current = true; 
            runSimulation();
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

    const myFunction = () => {
        console.log('ejecuta funcion')
    };

    grid.map((rows, i) =>
    rows.map((col, j) => (
        //rendering each cell square
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
    )

    return (
        <>
            <Controls
                handlers={{
                    simulate: simulateButton,
                    random: randomizeButton,
                    clear: clearButton
                }}/>

            <main className={BoardStyle.Grid}> {myFunction()} </main>

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