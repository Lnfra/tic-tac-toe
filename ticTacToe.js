function init() {
    console.log("Tic Tac Toe Ready.");
    var currentPlayer = 'Player1';

    var boardCount = 0;

    var board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]];

    //Get all buttons in the board
    var buttons = document.querySelectorAll('table button');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', executeMove);
    }

    //Initialize the reset button
    var resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', function () {
        location.reload();
    });

    function executeMove(event) {
        var button =  event.target;
        //Check if this button has not been clicked before
        var isUnclickedButton = getButtonState(button.id) === null;

        if (currentPlayer === 'Player1' && isUnclickedButton) {
            button.innerHTML = 'O';
            button.style.background = 'red';
            setMove('O', button.id);
            checkForWinner();
            switchPlayerTo('Player2');

        } else if (currentPlayer === 'Player2' && isUnclickedButton) {
            button.innerHTML = 'X';
            button.style.background = 'blue';
            setMove('X', button.id);
            checkForWinner();
            switchPlayerTo('Player1');
        } else {
            console.log('Ignore click as button has been clicked before.');
        }
    }

    function switchPlayerTo(player) {
        //Toggle value of current player
        currentPlayer = player;

        //Update display display to show which player is next
        document.getElementById('currentTurn').innerHTML = "It is " + player + "'s turn.";

        //Change the class for all buttons on the board to affect hover color
        var boardButtons = document.querySelectorAll('td > button');
        for (i = 0; i < boardButtons.length; ++i) {
            boardButtons[i].className = player.toLowerCase();
        }

    }

    function setMove(move, buttonId) {
        if (buttonId === 'b1') {
            board[0][0] = move;
        } else if (buttonId === 'b2') {
            board[0][1] = move;
        } else if (buttonId === 'b3') {
            board[0][2] = move;
        } else if (buttonId === 'b4') {
            board[1][0] = move;
        } else if (buttonId === 'b5') {
            board[1][1] = move;
        } else if (buttonId === 'b6') {
            board[1][2] = move;
        } else if (buttonId === 'b7') {
            board[2][0] = move;
        } else if (buttonId === 'b8') {
            board[2][1] = move;
        } else {
            //Set button b9
            board[2][2] = move;
        }
        boardCount++;
    }

    function getButtonState(buttonId) {
        if (buttonId === 'b1') {
            return board[0][0];
        } else if (buttonId === 'b2') {
            return board[0][1];
        } else if (buttonId === 'b3') {
            return board[0][2];
        } else if (buttonId === 'b4') {
            return board[1][0];
        } else if (buttonId === 'b5') {
            return board[1][1];
        } else if (buttonId === 'b6') {
            return board[1][2];
        } else if (buttonId === 'b7') {
            return board[2][0];
        } else if (buttonId === 'b8') {
            return board[2][1];
        } else {
            //return val of button b9.
            return board[2][2];
        }
    }

    function alertWinner(buttonValue){
        if(buttonValue === 'O'){
            alert('Game Over, Player 1 wins!');
            location.reload();
        }else {
            alert('Game Over, Player 2 wins!');
            location.reload();
        }
    }

    function checkForWinner() {
        //Check row 1 win
        if ((board[0][0] === board[0][1]) && (board[0][1] === board[0][2]) && (board[0][2] !== null)) {
            alertWinner(board[0][0]);
        }
        else if ((board[1][0] === board[1][1]) && (board[1][1] === board[1][2]) && (board[1][2] !== null)) {
            alertWinner(board[1][0]);
        }
        else if ((board[2][0] === board[2][1]) && (board[2][1] === board[2][2]) && (board[2][2] !== null)) {
            alertWinner(board[2][0]);
        }
        else if ((board[0][0] === board[1][0]) && (board[1][0] === board[2][0]) && (board[2][0] !== null)) {
            alertWinner(board[0][0]);
        }
        else if ((board[0][1] === board[1][1]) && (board[1][1] === board[2][1]) && (board[2][1] !== null)) {
            alertWinner(board[0][1]);
        }
        else if ((board[0][2] === board[1][2]) && (board[1][2] === board[2][2]) && (board[2][2] !== null)) {
            alertWinner(board[0][2]);
        }
        else if ((board[0][0] === board[1][1]) && (board[1][1] === board[2][2]) && (board[2][2] !== null)) {
            alertWinner(board[0][0]);
        }
        else if ((board[0][2] === board[1][1]) && (board[1][1] === board[2][0]) && (board[2][0] !== null)) {
            alertWinner(board[0][2]);
        }
        else if(boardCount === 9){
            //boardCount stores the number of spaces already filled in the board
            //If value is == 9 and not a winning combination, it is a tie.
            alert('It is a tie!');
            location.reload();
        }else {
            console.log('No winner yet!');
        }
    }
}
window.addEventListener("load",init,false);
