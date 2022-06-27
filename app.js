const gridContainer = document.querySelector('.grid-container');
let boardSize = 16;
let gridSize = gridContainer.offsetWidth/boardSize-2;
console.log(gridSize);

function setUpBoard(){
    for (let i = 0; i<boardSize;i++){
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        for (let j = 0;j<boardSize;j++){
            const cell = document.createElement('div');
            cell.style.cssText = `width:${gridSize}px;height:${gridSize}px;border:1px black solid;background:gray`;
            cell.addEventListener('click',()=>{
                cell.style.background='blue';
            });
            gridRow.appendChild(cell);
        }
        gridContainer.appendChild(gridRow);
    }
}


setUpBoard();
