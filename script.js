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
        RGB()
    }

function black() {
    const cellColor = document.querySelectorAll('.cell')
    for (let i=0; i<cellColor.length; i++) {
        cellColor[i].addEventListener('mouseenter', () => cellColor[i].style.backgroundColor = 'black')
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function RGB() {
    const cellColor = document.querySelectorAll('.cell')
    for (let i=0; i<cellColor.length; i++) {
        cellColor[i].addEventListener('mouseenter', () => cellColor[i].style.backgroundColor = getRandomColor())
    }
}
createGrid(16);

const clear = document.querySelector('#clear')
clear.addEventListener('click', () => {
    const cellColor = document.querySelectorAll('.cell')
    for (let i=0; i<cellColor.length; i++) {
        cellColor[i].style.backgroundColor = 'white';
    }
})

function changeSize(input) {
    if(input >= 2 && input <=100) {
    createGrid(input);
    }
    else {
        console.log('bad number')
    }
}

