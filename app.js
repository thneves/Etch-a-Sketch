

// VARIABLES


let gridSize = 16;
let createGrid = document.getElementById('createGrid');
const container = document.getElementById('container');
const reset = document.getElementById('reset');
const randomColor = document.getElementById('randomColor');


// Create the grid with the default size of 16x16.

function drawGrid() {
    
    createGrid.style.grid = `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`;
    if (gridSize > 108) gridSize = 108;
    const gridTrack = gridSize ** 2;
    for (let i = 0; i < gridTrack; i++){
        createCell();
    }
    
}

// color grid option

function drawGridColor() {
    
    createGrid.style.grid = `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`;
    if (gridSize > 108) gridSize = 108;
    const gridTrack = gridSize ** 2;
    for (let i = 0; i < gridTrack; i++){
        createCellColor();
    }
}



// Create each cell that can be colored by the mouseover it.

function createCell() {

    let cell = document.createElement('div');
        cell.style.backgroundColor = 'white';
        createGrid.appendChild(cell);
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        })
        
    }


// Random color cell.

function createCellColor() {

    let cell = document.createElement('div');
    cell.style.backgroundColor = 'white';
    createGrid.appendChild(cell);
    let random = Math.floor(Math.random()*16777215).toString(16);
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = `#${random}`;
    })

}
// BUTTONS


reset.addEventListener('click', () => {  //reset normal
    newGrid();
});


randomColor.addEventListener('click', () => {  //reset to random colors
    newGridColor();
    });


//

function newGrid() {
    let promp = prompt('Choose new grid size:', `${gridSize}`);
    gridSize = parseInt(promp);
    clearGrid();
    drawGrid();
}


function newGridColor() {
    let promp = prompt('Choose new grid size:', `${gridSize}`);
    gridSize = parseInt(promp);
    clearGrid();
    drawGridColor();
}

function clearGrid() {
    const oldGrid = document.getElementById('createGrid');
    oldGrid.innerHTML = '';
}


drawGrid();
