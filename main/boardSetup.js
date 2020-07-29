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