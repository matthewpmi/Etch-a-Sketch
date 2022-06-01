"use strict";

function createGrid(v) {
    const container = document.querySelector('#container')
    container.style.gridTemplateColumns = `repeat(${v}, 1fr)`
    container.style.gridTemplateRows = `repeat(${v}, 1fr)`
    let removeCells = container.querySelectorAll('div');
    removeCells.forEach((div) => div.remove())
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

createGrid(16);

function changeSize(input) {
    if(input >= 2 && input <=100) {
    createGrid(input);
    }
    else {
        console.log('bad number')
    }
}

