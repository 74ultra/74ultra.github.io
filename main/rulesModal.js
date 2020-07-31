const openBtn = document.querySelector('#opn-modal')
const openBtn2 = document.querySelector('#opn-modal2')
const modal = document.querySelector('.modal');
const modal2 = document.querySelector('.modal2');
const closeBtn1 = document.querySelector('#close-btn1');
const closeBtn2 = document.querySelector('#close-btn2');
const backdrop = document.querySelector('.backdrop');

function modalSetup() {
    closeBtn1.addEventListener('click', closeModal)
    closeBtn2.addEventListener('click', closeModal2)
    openBtn.addEventListener('click', openModal)
    openBtn2.addEventListener('click', openModal2)
    backdrop.addEventListener('click', closeModal)
    backdrop.addEventListener('click', closeModal2)
}


function closeModal() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}

function openModal() {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
}

function closeModal2() {
    modal2.style.display = 'none';
    backdrop.style.display = 'none';
}

function openModal2() {
    modal2.style.display = 'block';
    backdrop.style.display = 'block';
}
