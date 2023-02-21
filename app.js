//store gameboard as an array inside of a gameboard object
const gameChoices = ['X', 'O'];
const gridPosition = [];
//Player chooses space on grid
const grid = document.querySelectorAll('.grid-section');

let turnCount = 0;

grid.forEach((grid) => {
    grid.addEventListener("click",
        () => {
            let playerPosition = grid.id;
            gridPosition.push(playerPosition);
            console.log(gridPosition);
            //grid.innerText = gameChoices[0];
            playerTurn();
            
        })
})

function playerTurn() {
    let player1 = 'X';
    let player2 = 'O';
    let lastPosition = gridPosition[gridPosition.length - 1];
    //alternate turns
    if(turnCount % 2 === 0) {
        document.getElementById(gridPosition).innerText = player1;
        turnCount++;
    } else if(turnCount % 2 !== 0) {
        document.getElementById(lastPosition).innerText = player2;
        turnCount++;
    } else if(turnCount > 9) {
        console.log('Endgame');
    } else {
        document.getElementById(lastPosition).innerText = player1;
    }
    
}

let winnerMatrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];









