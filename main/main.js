/*
GLOBAL VARIABLES
*/


// grid sizes
const sizes = {
    "small": [25, 25],
    "medium": [25, 35],
    "large": [50, 70]
}

let rows = sizes.small[0];
let cols = sizes.small[1];

// state of game
let playing = false;

// grid state variables
const grid = new Array(rows);
const nextGrid = new Array(rows)

// generation state variable
let generationCount = 0;

// timer variables
let timer;
const reproductionTime = 300;


/*
INITIALIZE THE GAME
*/
function initialize() {
    createTable();
    initializeGrids(); // managing state and upcoming state
    resetGrids(); // reset state to zero
    setupControlButtons();
    modalSetup();
    setUpDropDown();
}

/*
GAME LOGIC
*/
function computeNextGen() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            applyRules(i, j)
        }
    }
    generationCount++
    const counterVar = document.getElementById("gen-num")
    counterVar.innerHTML = generationCount

    // update "grid" from "nextGrid"
    copyResetGrid();
    // update view from model
    updateView()
}

// updates the 'nextGrid' variable from the current state of 'grid' variable
function applyRules(row, col) {
    const numNeighbors = countNeighbors(row, col);
    if (grid[row][col] == 1) {
        if (numNeighbors < 2) {
            nextGrid[row][col] = 0;
        } else if (numNeighbors == 2 || numNeighbors == 3) {
            nextGrid[row][col] = 1;
        } else if (numNeighbors > 3) {
            nextGrid[row][col] = 0;
        }
    } else if (grid[row][col] == 0) {
        if (numNeighbors == 3) {
            nextGrid[row][col] = 1;
        }
    }
}

// counts number of live neighbors
function countNeighbors(row, col) {
    let acc = 0;
    if (row - 1 >= 0) {
        if (grid[row - 1][col] == 1) acc++;
    }
    if (row - 1 >= 0 && col - 1 >= 0) {
        if (grid[row - 1][col - 1] == 1) acc++;
    }
    if (row - 1 >= 0 && col + 1 < cols) {
        if (grid[row - 1][col + 1] == 1) acc++;
    }
    if (col - 1 >= 0) {
        if (grid[row][col - 1] == 1) acc++;
    }
    if (col + 1 < cols) {
        if (grid[row][col + 1] == 1) acc++;
    }
    if (row + 1 < rows) {
        if (grid[row + 1][col] == 1) acc++;
    }
    if (row + 1 < rows && col - 1 >= 0) {
        if (grid[row + 1][col - 1] == 1) acc++;
    }
    if (row + 1 < rows && col + 1 < cols) {
        if (grid[row + 1][col + 1] == 1) acc++;
    }
    return acc
}

// run
window.onload = initialize;