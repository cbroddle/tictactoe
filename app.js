//store gameboard as an array inside of a gameboard object
const gameChoices = [];
const gridPosition = [];

//Player chooses space on grid
const grid = document.querySelectorAll('.grid-section');
const selectButtons = document.querySelector('.player-choice');
grid.forEach((grid) => {
    grid.addEventListener("click",
        () => {
            //display choices X or O
            selectButtons.classList.toggle("show-player-choice");
            //collect grid position
            gridPosition.push(grid.id);
            console.log(gridPosition);
            //Needs to show in space of grid selected, not just position 0
            
            //Push Choice to gameChoices array
            //display last value of gameChoices?
            //grid.innerText = `${gameChoices[gameChoices.length - 1]}`;
        })
})

//All combinations of grid position to win with 3 of a kind in a row
//Moves can be in any order(ex: 0,1,2 can be 1,0,2...)
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

//Function taking in player game choice
const xChoice = document.querySelector('button.x');
xChoice.addEventListener("click",
    function () {
        gameChoices.push('X');
        //Display X
        grid.innerText = 'X';
    })



const oChoice = document.querySelector('button.o');

oChoice.addEventListener("click",
    function () {
        gameChoices.push('O');
        //Display O
        grid.innerText = 'O';
    })


//Function to check for winner
function checkWinner() {
    //Retrieve and check 
    //3 X's in a row, gameChoices contains X, X, X, 
    let checkX = gameChoices.filter(x => x.includes("X"));
    console.log(checkX);
    if (checkX.length === 3) {
        console.log("X wins");
        //Bug: 3 X'x present but not in a row
        //Check matrix here?
    }

    //3 O's in a row
    //Neither 3 X's or 3 O's in a row and all spaces full(array has 9 entries)
}

//Function for random computer play?







