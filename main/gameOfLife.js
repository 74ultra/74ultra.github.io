const sizes = {
    "small": [25, 25],
    "medium": [25, 35],
    "large": [50, 70]
}

let rows = sizes.small[0];
let cols = sizes.small[1];

// state of game
let playing = false;

// state variables
const grid = new Array(rows);
const nextGrid = new Array(rows)

// generation variable
let generationCount = 0;

// timer variables
let timer;
const reproductionTime = 300;

// managing state variables
function initializeGrids() {
    for (let i = 0; i < rows; i++) {
        grid[i] = new Array(cols);
        nextGrid[i] = new Array(cols);
    }
}


// "grid" and "nextGrid" set back to "dead"
function resetGrids() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j] = 0;
            nextGrid[i][j] = 0;
        }
    }
}

// state of "nextGrid" copied to "grid" and "nextGrid" reset
function copyResetGrid() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j] = nextGrid[i][j]
            nextGrid[i][j] = 0
        }
    }
}

function updateView() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const cell = document.getElementById(i + "_" + j);
            if (grid[i][j] == 0) {
                cell.setAttribute("class", "dead")
            } else {
                cell.setAttribute("class", "live")
            }
        }
    }
}


// initialize the game
function initialize() {
    createTable();
    initializeGrids(); // managing state and upcoming state
    resetGrids(); // reset state to zero
    setupControlButtons();
    btnSetup();
    setUpDropDown();
}

// board layout: Table, rows, columns -- BREAK OUT
function createTable() {
    const gridContainer = document.getElementById("grid-container")
    if (!gridContainer) {
        console.error("Error finding div for grid")
    }

    const table = document.createElement("table");
    table.setAttribute("id", "tabl")

    if (cols == sizes.small[1]) {
        table.setAttribute("class", "small")
    } else if (cols == sizes.medium[1]) {
        table.setAttribute("class", "medium")
    } else if (cols == sizes.large[1]) {
        table.setAttribute("class", "large")
    }

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement("tr");
        tr.setAttribute("class", "table-row")
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('td')
            cell.setAttribute("id", i + "_" + j);
            cell.setAttribute("class", "dead");
            cell.onclick = cellClickHandler;
            tr.appendChild(cell);
        }
        table.appendChild(tr);
    }
    gridContainer.appendChild(table)
}

function cellClickHandler() {
    if (playing) {
        return
    }
    const rowcol = this.id.split("_")
    const row = rowcol[0];
    const col = rowcol[1];
    const status = this.getAttribute("class");
    if (status == "live") {
        this.setAttribute("class", "dead")
        grid[row][col] = 0
    } else {
        this.setAttribute("class", "live")
        grid[row][col] = 1
    }
}

function setupControlButtons() {
    // start btn
    const startBtn = document.getElementById("start");
    startBtn.onclick = startButtonHandler;

    // clear button
    const clearBtn = document.getElementById("clear");
    clearBtn.onclick = clearButtonHandler;

    // random button
    const randBtn = document.getElementById("random");
    randBtn.onclick = randomBtnHandler;

    // advance a single generation
    const nextButton = document.getElementById("next-gen")
    nextButton.onclick = nextButtonHandler;

    // glider pattern
    const gliderBtn = document.getElementById("glider")
    gliderBtn.onclick = gliderButtonHandler;

    // blinker pattern
    const blinkerButton = document.getElementById("blinker");
    blinkerButton.onclick = blinkerButtonHandler;

    // pentadecathlon
    const pentaButton = document.getElementById("penta");
    pentaButton.onclick = pentaButtonHandler;

}

function clearButtonHandler() {
    playing = false;
    const startBtn = document.getElementById("start");
    startBtn.innerHTML = "start &#10148;";
    // stop timer
    clearTimeout(timer);
    // reset view
    const cellList = document.getElementsByClassName("live");
    const listCopy = [];
    for (let i = 0; i < cellList.length; i++) {
        listCopy.push(cellList[i])
    }
    for (let i = 0; i < listCopy.length; i++) {
        listCopy[i].setAttribute("class", "dead")
    }
    // reset state arrays
    resetGrids();
    // reset generation 
    resetGen()
}

function startButtonHandler() {
    if (playing) {
        playing = false;
        this.innerHTML = "&#10148;";
        clearTimeout(timer)
    } else {
        playing = true;
        this.innerHTML = "&#x2759; &#x2759;"
        play();
    }
}

function nextButtonHandler() {
    computeNextGen()
}

function resetGen() {
    generationCount = 0;
    const counterVar = document.getElementById("gen-num")
    counterVar.innerHTML = 0;
}


function play() {
    computeNextGen();
    if (playing) {
        console.log("timer was called")
        timer = setTimeout(play, reproductionTime);
    }
}

// Game logic
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