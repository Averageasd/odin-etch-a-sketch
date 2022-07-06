// container that contains cells.
const gridContainer = document.querySelector('.grid-container');

// div where user can control slider and change size of grid
const gridSizeInput = document.querySelector('#slider');
const sizeDisplay = document.querySelector('#size-display');
const gridSizeConfirmBtn = document.querySelector('.confirm-div');

// user can use this one to erase cells.
const eraserDiv = document.querySelector('.eraser-div');

const curColorDiv = document.querySelector('.use-current-color-div');

const resetBoarDiv = document.querySelector('.reset-div');

const colorPicker = document.querySelector('#color-input');

let boardSize = parseInt(gridSizeInput.value);
let gridSize = gridContainer.offsetWidth/boardSize-2;
let isDrawing = false;
let gridColor = colorPicker.value;

function setUpBoard(){
    for (let i = 0;i<boardSize;i++){
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        for (let j = 0;j<boardSize;j++){
            const cell = document.createElement('div');
            cell.style.cssText = `width:${gridSize}px;height:${gridSize}px;border:1px lightgray solid;background:white;`;
            gridRow.appendChild(cell);
        }
        gridContainer.appendChild(gridRow);
        
    }
}
function addHoverCellFeature(){
    for (let i = 0; i<boardSize;i++){
        const cellRowContainer = gridContainer.children[i];
        const cells = cellRowContainer.children;
        for (let j = 0; j<cells.length;j++){
            cells[j].addEventListener('click',()=>{
                cells[j].style.background = gridColor;
                if (!isDrawing){
                    isDrawing = true;
                }
                else{
                    isDrawing = false;
                }
            });
            cells[j].addEventListener('mouseover',()=>{
                if (isDrawing){
                    console.log('change color');
                    cells[j].style.background = gridColor;
                }
                
            });
            
        }
    }
}

colorPicker.addEventListener('input',()=>{
    gridColor = colorPicker.value;
});

gridSizeInput.addEventListener('input',()=>{
    sizeDisplay.textContent = gridSizeInput.value;
});

gridSizeConfirmBtn.addEventListener('click',()=>{
    boardSize = parseInt(gridSizeInput.value);
    gridSize = gridContainer.offsetWidth/boardSize-2;
    isDrawing = false;

    resetBoard();
});

eraserDiv.addEventListener('click',()=>{
    gridColor = 'white';
});

curColorDiv.addEventListener('click',()=>{
    gridColor = colorPicker.value;
});

resetBoarDiv.addEventListener('click',()=>{
    resetBoard();
});

function resetBoard(){
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
    setUpBoard();
    addHoverCellFeature();
}
setUpBoard();
addHoverCellFeature();

