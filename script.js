var origBoard;
const huPlayer = 'O';
const aiPlayer = 'X';
const wiCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [5, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [4, 6, 2],
];
const cells = document.querySelectorAll('.cell');
startGame();
function startGame() {
    document.querySelector(".endgame").style.display = "none";
    origBoard = Array.from(Array(9).keys())
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false);
    }
}

function turnClick(square) {
    console.log(square.target.id);
}