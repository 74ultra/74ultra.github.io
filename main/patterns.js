// pattern button handlers
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

// Helper function to execute the specified pattern
function fillPattern(rwAry, clAry) {
    for (let i = 0; i < rwAry.length; i++) {
        grid[rwAry[i]][clAry[i]] = 1
    }
}

// Create glider pattern
function gliderButtonHandler() {
    if (playing) {
        return
    }
    clearButtonHandler()
    const rowAry = [1, 2, 3, 3, 3, 10, 11, 12, 12, 12]
    const colAry = [2, 3, 1, 2, 3, 12, 13, 11, 12, 13]
    fillPattern(rowAry, colAry);
    updateView()
}

// Create blinker pattern
function blinkerButtonHandler() {
    if (playing) {
        return
    }
    clearButtonHandler()
    const rowAry = [5, 5, 5, 12, 12, 12]
    const colAry = [10, 11, 12, 10, 11, 12]
    fillPattern(rowAry, colAry);
    updateView()
}

// Create penta pattern
function pentaButtonHandler() {
    if (playing) {
        return
    }
    clearButtonHandler()
    const rowAry = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const colAry = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19];
    fillPattern(rowAry, colAry);
    updateView()
}

// Create exploder pattern
function exploderButtonHandler() {
    if (playing) {
        return
    }
    clearButtonHandler()
    const rowAry = [8, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 12];
    const colAry = [10, 12, 14, 10, 14, 10, 14, 10, 14, 10, 12, 14];
    fillPattern(rowAry, colAry);
    updateView()
}

// create spaceship pattern
function spaceButtonHandler() {
    if (playing) {
        return
    }
    clearButtonHandler()
    const rowAry = [7, 7, 7, 7, 8, 8, 9, 10, 10];
    const colAry = [9, 10, 11, 12, 8, 12, 12, 8, 11];
    fillPattern(rowAry, colAry);
    updateView()
}

// create tumbler pattern
function tumblerButtonHandler() {
    if (playing) {
        return
    }
    clearButtonHandler()
    const rowAry = [6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11];
    const colAry = [11, 12, 14, 15, 11, 12, 14, 15, 12, 14, 10, 12, 14, 16, 10, 12, 14, 16, 10, 11, 15, 16];
    fillPattern(rowAry, colAry);
    updateView()
}
