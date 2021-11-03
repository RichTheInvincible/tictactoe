//global game stuff
var turn = 1;
var spaces = document.getElementsByClassName('cells');
var cellnum;
var dataArray = [null, null, null, null, null, null, null, null, null];
//global timer stuff
let hour = 0;
let minute = 0;
let seconds = 0;
let totalSeconds = 0;
let intervalId = null;
intervalId = setInterval(startTimer, 1000);

//timer
function startTimer() {
    ++totalSeconds;
    hour = Math.floor(totalSeconds /3600);
    minute = Math.floor((totalSeconds - hour*3600)/60);
    seconds = totalSeconds - (hour*3600 + minute*60);
    document.getElementById("timer").innerHTML = hour + "h " + minute + "m " + seconds + "s";
}

//function to fill a table cell when it is clicked
function fillCell() {

  var bottomMessage = document.getElementById('message');
  var cell01 = document.getElementById('cell1');
  var cell02 = document.getElementById('cell2');
  var cell03 = document.getElementById('cell3');
  var cell04 = document.getElementById('cell4');
  var cell05 = document.getElementById('cell5');
  var cell06 = document.getElementById('cell6');
  var cell07 = document.getElementById('cell7');
  var cell08 = document.getElementById('cell8');
  var cell09 = document.getElementById('cell9');

  var cellArray = [cell01, cell02, cell03, cell04, cell05, cell06, cell07, cell08, cell09];

    //turns of the game
    //X turn - the same for PvP and PvC
    if (turn == 1) {
      if (cellArray[cellnum-1].innerHTML == "") {
        cellArray[cellnum-1].innerHTML = "X";
        dataArray[cellnum-1] = 1;
        turn = 2;
        bottomMessage.innerHTML = "O moves next!";
        checkWin(create = 'Yes');
      }
      else{
        if(cellArray[cellnum-1].innerHTML == "[&nbsp;]") {
          bottomMessage.innerHTML = "Click START to begin a game!";
        }
        else {
        bottomMessage.innerHTML = "Space is already taken!";
        }
      }
    }
    //O turn for PvP
    else if(turn == 2){
      if (cellArray[cellnum-1].innerHTML == "") {
        cellArray[cellnum-1].innerHTML = "O";
        dataArray[cellnum-1] = 2;
        turn = 1;
        bottomMessage.innerHTML = "X moves next!";
        checkWin(create = 'Yes');
      }
      else{
        if(cellArray[cellnum-1].innerHTML == "[&nbsp;]") {
          bottomMessage.innerHTML = "Click START to begin a game!";
        }
        else {
        bottomMessage.innerHTML = "Space is already taken!";
        }
      }
    }
  //O turn for PvC
  aiTurn();
  //print the board array in the console
  console.log("Data Array: " + dataArray);
}


//function to execute the AI's turn
function aiTurn() {
  var bottomMessage = document.getElementById('message');
  var cell01 = document.getElementById('cell1');
  var cell02 = document.getElementById('cell2');
  var cell03 = document.getElementById('cell3');
  var cell04 = document.getElementById('cell4');
  var cell05 = document.getElementById('cell5');
  var cell06 = document.getElementById('cell6');
  var cell07 = document.getElementById('cell7');
  var cell08 = document.getElementById('cell8');
  var cell09 = document.getElementById('cell9');

  var cellArray = [cell01, cell02, cell03, cell04, cell05, cell06, cell07, cell08, cell09];

  var switchTop = document.getElementById("myonoffswitch");
      //check to see if X has already won
  var xWin = checkWin(create = 'No');
  if (xWin == 'No'){
    var spaceRNG = getRandomInt(9);
    //spaceAI is a guaranteed open space
    //var spaceAI = checkOpenSpaceAI();
    if ((switchTop.checked == false) && (turn == 2)){
      //if the space is empty, place O in it
      if (cellArray[spaceRNG].innerHTML == ''){
        cellArray[spaceRNG].innerHTML = "0";
        dataArray[spaceRNG] = 2;
        turn = 1;
        bottomMessage.innerHTML = "X moves next!";
        checkWin(create = 'Yes');
      }
      else {
        // the random space wasnt empty so run it back
        aiTurn();
      }
    }
    console.log('Space that is open: ' + spaceRNG);
  }
}

//function to check to see if a game ending state has occurred
function checkWin() {
      var bottomMessage = document.getElementById('message');
      //top row
      if ((dataArray[0] == dataArray[1]) && (dataArray[1] == dataArray[2]) && (dataArray[2] == 1)){
        bottomMessage.innerHTML = "Game Over, X Wins!";
        if (create == 'Yes') {
          winningCSS(one = 0, two = 1, three = 2);
        }
        return 'Yes';
      }
      else if ((dataArray[0] == dataArray[1]) && (dataArray[1] == dataArray[2]) && (dataArray[2] == 2)){
        bottomMessage.innerHTML = "Game Over, O Wins!";
        if (create == 'Yes') {
          winningCSS(one = 0, two = 1, three = 2);
        }
      }
      //mid row
      else if ((dataArray[3] == dataArray[4]) && (dataArray[4] == dataArray[5]) && (dataArray[5] == 1)){
        bottomMessage.innerHTML = "Game Over, X Wins!";
        if (create == 'Yes') {
          winningCSS(one = 3, two = 4, three = 5);
        }
        return 'Yes';
      }
      else if ((dataArray[3] == dataArray[4]) && (dataArray[4] == dataArray[5]) && (dataArray[5] == 2)){
        bottomMessage.innerHTML = "Game Over, O Wins!";
        if (create == 'Yes') {
          winningCSS(one = 3, two = 4, three = 5);
        }
      }
      //bottom row
      else if ((dataArray[6] == dataArray[7]) && (dataArray[7] == dataArray[8]) && (dataArray[8] == 1)){
        bottomMessage.innerHTML = "Game Over, X Wins!";
        if (create == 'Yes') {
          winningCSS(one = 6, two = 7, three = 8);
        }
        return 'Yes';
      }
      else if ((dataArray[6] == dataArray[7]) && (dataArray[7] == dataArray[8]) && (dataArray[8] == 2)){
        bottomMessage.innerHTML = "Game Over, O Wins!";
        if (create == 'Yes') {
          winningCSS(one = 6, two = 7, three = 8);
        }
        return 'Yes';
      }
      //left column
      else if ((dataArray[0] == dataArray[3]) && (dataArray[3] == dataArray[6]) && (dataArray[6] == 1)){
        bottomMessage.innerHTML = "Game Over, X Wins!";
        if (create == 'Yes') {
          winningCSS(one = 0, two = 3, three = 6);
        }
        return 'Yes';
      }
      else if ((dataArray[0] == dataArray[3]) && (dataArray[3] == dataArray[6]) && (dataArray[6] == 2)){
        bottomMessage.innerHTML = "Game Over, O Wins!";
        if (create == 'Yes') {
          winningCSS(one = 0, two = 3, three = 6);
        }
      }
      //mid column
      else if ((dataArray[1] == dataArray[4]) && (dataArray[4] == dataArray[7]) && (dataArray[7] == 1)){
        bottomMessage.innerHTML = "Game Over, X Wins!";
        if (create == 'Yes') {
          winningCSS(one = 1, two = 4, three = 7);
        }
        return 'Yes';
      }
      else if ((dataArray[1] == dataArray[4]) && (dataArray[4] == dataArray[7]) && (dataArray[7] == 2)){
        bottomMessage.innerHTML = "Game Over, O Wins!";
        if (create == 'Yes') {
          winningCSS(one = 1, two = 4, three = 7);
        }
      }
      //right column
      else if ((dataArray[2] == dataArray[5]) && (dataArray[5] == dataArray[8]) && (dataArray[8] == 1)){
        bottomMessage.innerHTML = "Game Over, X Wins!";
        if (create == 'Yes') {
          winningCSS(one = 2, two = 5, three = 8);
        }
        return 'Yes';
      }
      else if ((dataArray[2] == dataArray[5]) && (dataArray[5] == dataArray[8]) && (dataArray[8] == 2)){
        bottomMessage.innerHTML = "Game Over, O Wins!";
        if (create == 'Yes') {
          winningCSS(one = 2, two = 5, three = 8);
        }
      }
      //diag top-left to bottom-right
      else if ((dataArray[0] == dataArray[4]) && (dataArray[4] == dataArray[8]) && (dataArray[8] == 1)){
        bottomMessage.innerHTML = "Game Over, X Wins!";
        if (create == 'Yes') {
          winningCSS(one = 0, two = 4, three = 8);
        }
        return 'Yes';
      }
      else if ((dataArray[0] == dataArray[4]) && (dataArray[4] == dataArray[8]) && (dataArray[8] == 2)){
        bottomMessage.innerHTML = "Game Over, O Wins!";
        if (create == 'Yes') {
          winningCSS(one = 0, two = 4, three = 8);
        }
      }
      //diag bottom-left to top-right
      else if ((dataArray[6] == dataArray[4]) && (dataArray[4] == dataArray[2]) && (dataArray[2] == 1)){
        bottomMessage.innerHTML = "Game Over, X Wins!";
        if (create == 'Yes') {
          winningCSS(one = 6, two = 4, three = 2);
        }
        return 'Yes';
      }
      else if ((dataArray[6] == dataArray[4]) && (dataArray[4] == dataArray[2]) && (dataArray[2] == 2)){
        bottomMessage.innerHTML = "Game Over, O Wins!";
        if (create == 'Yes') {
          winningCSS(one = 6, two = 4, three = 2);
        }
      }
      else if((dataArray[0] == 1 || dataArray[0] == 2) && (dataArray[1] == 1 || dataArray[1] == 2) && (dataArray[2] == 1 || dataArray[2] == 2)
        && (dataArray[3] == 1 || dataArray[3] == 2) && (dataArray[4] == 1 || dataArray[4] == 2)
        && (dataArray[5] == 1 || dataArray[5] == 2) && (dataArray[6] == 1 || dataArray[6] == 2)
        && (dataArray[7] == 1 || dataArray[7] == 2) && (dataArray[8] == 1 || dataArray[8] == 2)){
          bottomMessage.innerHTML = "Game Over, Cat's Game!";
          if (create == 'Yes') {
            winningCSS(one = 9, two = 9, three = 9);
          }
        }
        else{
          //have the AI continue the game
          return 'No';
        }
}

//if a game ending state occurrs, then change the css
function winningCSS() {
  var cell01 = document.getElementById('cell1');
  var cell02 = document.getElementById('cell2');
  var cell03 = document.getElementById('cell3');
  var cell04 = document.getElementById('cell4');
  var cell05 = document.getElementById('cell5');
  var cell06 = document.getElementById('cell6');
  var cell07 = document.getElementById('cell7');
  var cell08 = document.getElementById('cell8');
  var cell09 = document.getElementById('cell9');
  var cellArray = [cell01, cell02, cell03, cell04, cell05, cell06, cell07, cell08, cell09];

  //highlight winning cells
  if (one < 9 && two < 9 && three < 9){
    cellArray[one].style.backgroundColor = "white";
    cellArray[two].style.backgroundColor = "white";
    cellArray[three].style.backgroundColor = "white";
  }
  //create playagain button
  var btn = document.createElement("BUTTON");
  var btnText = document.createTextNode("Play Again?");
  btn.appendChild(btnText);
  document.body.appendChild(btn);
  btn.classList.add("playagain");
  btn.setAttribute("onclick","deleteButton()");
  btn.setAttribute("id", "playAgainBtn")
}

//after the play again button is clicked it needs to be removed since its in the way
function deleteButton(){
  //remove the Play Again? button and then start a new game
  var btn = document.getElementById("playAgainBtn");
  btn.parentElement.removeChild(btn);
  handleButtonClick();
}

//function for the start button click
function handleButtonClick() {
  //start/reset the clock
  intervalId = null;
  totalSeconds = 0;
  document.getElementById("timer").innerHTML = '0' + "h " + '0' + "m " + '0' + "s";


  var bottomMessage = document.getElementById('message');
  //change start button text
  document.getElementById('button1').value = "Restart";

  //determine first move
  var firstMove = getRandomInt(2);
  if (firstMove == 0) {
      turn = 1;
      bottomMessage.innerHTML = "X moves first!";
    }
    else if (firstMove == 1){
      turn = 2;
      bottomMessage.innerHTML = "O moves first!";
    }
    console.log("turn: " + turn);

    //clear all the spaces on the board

    console.log("bottomMessage is: " + bottomMessage.innerHTML);
      for (var i = 0, l = spaces.length; i < l; i++) {
        spaces[i].innerHTML = '';
        //clear css
        spaces[i].style.backgroundColor = "black";
    }

  //clear data Array
  for (var i = 0; i < 9; i++) {
    dataArray[i] = null;
  }

  var cell01 = document.getElementById('cell1');
  var cell02 = document.getElementById('cell2');
  var cell03 = document.getElementById('cell3');
  var cell04 = document.getElementById('cell4');
  var cell05 = document.getElementById('cell5');
  var cell06 = document.getElementById('cell6');
  var cell07 = document.getElementById('cell7');
  var cell08 = document.getElementById('cell8');
  var cell09 = document.getElementById('cell9');

  var cellArray = [cell01, cell02, cell03, cell04, cell05, cell06, cell07, cell08, cell09];

  //if the AI needs to go first
  var switchTop = document.getElementById("myonoffswitch");
  if (switchTop.checked == false && turn == 2) {
    var firstAI = getRandomInt(9);
    cellArray[firstAI].innerHTML = "0";
    dataArray[firstAI] = 2;
    turn = 1;
    bottomMessage.innerHTML = "X moves next!";
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

window.addEventListener('load', function() {
    var startButton = document.getElementById('button1');
    startButton.addEventListener('click', handleButtonClick);

});
