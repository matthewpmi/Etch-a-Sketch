const container = document.querySelector('#container')
const gridSize = prompt("Size")
container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
function createGrid(v) {
    for (let i=0; i<v*v; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';  
        container.appendChild(cell);        
        }
        
        const cellColor = document.querySelectorAll('.cell')
            for (let i=0; i<cellColor.length; i++) {
            cellColor[i].addEventListener('mouseenter', () => cellColor[i].style.backgroundColor = 'black')
 }
}

createGrid(gridSize);

