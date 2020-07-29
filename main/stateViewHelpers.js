// initialize grid state variables
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

// updates view from the 'grid' state variable
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

// resets the generation display back to zero
function resetGen() {
    generationCount = 0;
    const counterVar = document.getElementById("gen-num")
    counterVar.innerHTML = 0;
}


// If 'start' button pushed, begins game. If 'next' pushed, advance one gen
function play() {
    computeNextGen();
    if (playing) {
        timer = setTimeout(play, reproductionTime);
    }
}