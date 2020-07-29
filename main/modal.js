const openBtn = document.querySelector('#opn-modal')
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('#close-btn');
const backdrop = document.querySelector('.backdrop');

function btnSetup() {
    closeBtn.addEventListener('click', closeModal)
    openBtn.addEventListener('click', openModal)
    backdrop.addEventListener('click', closeModal)
}


function closeModal() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}

function openModal() {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
}



/*

In the Game of Life, these rules examine each cell of the grid. For each cell, it counts that cell's eight neighbors (up, down, left, right, and diagonals), and then act on that result.

If the cell is alive and has 2 or 3 neighbors, then it remains alive. Else it dies.
If the cell is dead and has exactly 3 neighbors, then it comes to life. Else if remains dead.

*/