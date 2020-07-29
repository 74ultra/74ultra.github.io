// pattern buttons
function randomBtnHandler() {
    if (playing) {
        return
    }
    clearButtonHandler()
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let randValue = Math.round(Math.random())
            if (randValue == 1) {
                const cell = document.getElementById(i + "_" + j)
                cell.setAttribute("class", "live")
                grid[i][j] = 1;
            }
        }
    }
}

function gliderButtonHandler() {
    if (playing) {
        return
    }
    clearButtonHandler()
    grid[10][12] = 1;
    grid[11][13] = 1;
    grid[12][11] = 1;
    grid[12][12] = 1;
    grid[12][13] = 1;
    updateView()
}

function blinkerButtonHandler() {
    if (playing) {
        return
    }
    clearButtonHandler()
    //resetGrids()
    grid[12][10] = 1
    grid[12][11] = 1
    grid[12][12] = 1
    updateView()
}

function pentaButtonHandler() {
    if (playing) {
        return
    }
    clearButtonHandler()
    grid[6][12] = 1;
    grid[7][12] = 1;
    grid[8][12] = 1;
    grid[9][12] = 1;
    grid[10][12] = 1;
    grid[11][12] = 1;
    grid[12][12] = 1;
    grid[13][12] = 1;
    grid[14][12] = 1;
    grid[15][12] = 1;
    updateView()
}