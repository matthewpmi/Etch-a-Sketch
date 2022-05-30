const container = document.querySelector('#container')
function createGrid(v) {
    for (let i=0; i<v; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for(let j=1; j<=v; j++) {
            let cell = document.createElement('div');
            cell.className = 'gridSquare';
            row.appendChild(cell);            
        }
        container.appendChild(row);
    }
}
createGrid(16);