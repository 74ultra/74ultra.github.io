function setUpDropDown() {
    const dropList = document.querySelectorAll(".opt")
    const xer = Array.from(dropList)
    xer.map(item => {
        item.addEventListener('click', () => {
            setGridSize(item)
        })
    })

    // resize dropdown
    const dropDown = document.getElementById("dropdown-ctrls")
    dropDown.onclick = toggleDropDown;

    // close resize dropdown
    const dropDownContent = document.querySelector('.dropdown');
    dropDownContent.onmouseleave = closeDropDown;
}

function toggleDropDown() {
    console.log("Called")
    document.getElementById("drpdwn").classList.toggle('show');
}

function closeDropDown() {
    const xer = document.getElementById("drpdwn").classList;
    if (xer.contains('show')) {
        xer.remove('show')
    } else {
        return
    }
}

function setGridSize(itm) {
    clearButtonHandler()
    const oldTable = document.getElementById("tabl")
    tabl.remove();
    const gridValue = itm.value;
    rows = sizes[gridValue][0];
    cols = sizes[gridValue][1];
    initialize();
}