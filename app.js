const gridContainer = document.querySelector('.grid-container');
let boardSize = 16;
let gridSize = gridContainer.offsetWidth/boardSize-2;
let isDrawing = false;
console.log(gridContainer.offsetWidth);
console.log(gridSize);

function setUpBoard(){
    for (let i = 0;i<boardSize;i++){
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        for (let j = 0;j<boardSize;j++){
            const cell = document.createElement('div');
            cell.style.cssText = `width:${gridSize}px;height:${gridSize}px;border:1px black solid;background:gray;`;
            gridRow.appendChild(cell);
        }
        gridContainer.appendChild(gridRow);
        
    }
}

function addHoverCellFeature(){
    for (let i = 0; i<boardSize;i++){
        const cellRowContainer = gridContainer.children[i];
        const cells = cellRowContainer.children;
        console.log(cells);
        for (let j = 0; j<cells.length;j++){
            cells[j].addEventListener('mouseover',()=>{
                if (isDrawing){
                    cells[j].style.background = 'red';
                }
                
            });
            cells[j].addEventListener('click',()=>{
                cells[j].style.background = 'red';
                if (isDrawing){
                    isDrawing = false;
                }
                else{
                    isDrawing = true;
                }
            });
        }
    }
}



setUpBoard();
addHoverCellFeature();

