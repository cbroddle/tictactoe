//store gameboard as an array inside of a gameboard object
const gameChoices = ['X','O','X','O','X','O','X'];
//Select part of grid
const gridSection = document.getElementById('grid-top1');

/*const gameBoard = (choice, position) => {
    const playGame = () => console.log('choice');
    return { choice, position };
};*/

//display gameChoices on gameBoard
gridSection.innerText = `${gameChoices[0]}`;







