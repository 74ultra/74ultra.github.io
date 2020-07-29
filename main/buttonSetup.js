
// Connect event handlers to control and pattern buttons
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

// Clear grid
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

