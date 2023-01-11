//store gameboard as an array inside of a gameboard object
const gameChoices = [];

//Player chooses space on grid
const grid = document.querySelectorAll('.grid-section');
grid.forEach((grid) => {
    grid.addEventListener("click",
        () => {
            //Display last choice in array
            grid.innerText = `${gameChoices[gameChoices.length - 1]}`;
        })
})

//Function taking in player game choice
const xChoice = document.querySelector('button.x');
const oChoice = document.querySelector('button.o');
xChoice.addEventListener("click",
    function () {
        if (gameChoices.length < 9){
        gameChoices.push('X');
        console.log('X');
        } else if(gameChoices.length === 9){
            alert("Gameover");
            //insert scoreGame or declare winner function
        } else {
            alert("Error");
        }
    })
oChoice.addEventListener("click",
    function () {
        gameChoices.push('O');
        console.log('O');
    })

//Function for random computer play?







