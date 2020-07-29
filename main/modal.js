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
