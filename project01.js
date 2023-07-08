//Tic-tac-toe(Project 01)

let once = true; //to run win once
const arr = [0]; //to store btn values when clicked
let act = [0]; //to use X or O when clicked
let btn = [0];
let count = 0; //to change player
let player1 = document.getElementsByClassName("player1")[0];
let player2 = document.getElementsByClassName("player2")[0];
player1.classList.remove("player1"); //setting default as player 1

getActionOfBtn();
getBtn();
buttonClick();

function getBtn() {
  for (let j = 1; j <= 9; j++) {
    btn[j] = document.getElementsByClassName("btn")[j - 1];
  }
}

function getActionOfBtn() {
  for (let i = 1; i <= 18; i++) {
    act[i] = document.getElementsByClassName("active")[i - 1];
  }
}
function changePlayer() {
  if (count % 2 == 0) {
    player1.classList.add("player1");
    player2.classList.remove("player2");
  } else {
    player2.classList.add("player2");
    player1.classList.remove("player1");
  }
}

function disableBtn(j) {
    btn[j].setAttribute("disabled", "disabled");
}

function buttonClick() {
  for (let j = 1; j <= 9; j++) {
      btn[j].onclick = () => {
          if (count % 2 != 0) {
        act[j * 2].classList.remove("active");
        changePlayer();
        count++;
        pushToArray(j);
    } else {
        act[j * 2 - 1].classList.remove("active");
        changePlayer();
        count++;
        pushToArray(j);
    }
    if (arr.length > 5) checkWinner();
    
    disableBtn(j);
    };
  }
}

function pushToArray(int) {
  arr.push(int);
  setTimeout(() => {
    if (arr.length == 10) {
      getPlayAgain();
    }
  }, 100);
}

function checkWinner() {
  for (let i = 1; i <= 9; i++) {
    for (let j = i + 2; j <= 9; j += 2) {
      for (let k = j + 2; k <= 9; k += 2) {
        if (arr[i] % 3 == arr[j] % 3 && arr[k] % 3 == arr[i] % 3) {
          showWinner(i, j, k);
        }
        if (arr[j] % 4 == arr[i] % 4 && arr[k] % 4 == arr[i] % 4) {
          showWinner(i, j, k);
        }

        if (
          Math.floor((arr[j] - 1) / 3) == Math.floor((arr[i] - 1) / 3) &&
          Math.floor((arr[i] - 1) / 3) == Math.floor((arr[k] - 1) / 3)
        ) {
          showWinner(i, j, k);
        }

        if (arr[j] % 2 == 1 && arr[i] % 2 == 1 && arr[k] % 2 == 1) {
          if (arr[i] != 1 && arr[i] != 9) {
            if (arr[j] != 1 && arr[j] != 9) {
              if (arr[k] != 1 && arr[k] != 9) showWinner(i, j, k);
            }
          }
        }
      }
    }
  }
}

function showWinner(i, j, k) {
  if (once == true) {
    btn[arr[j]].style.background = "green";
    btn[arr[k]].style.background = "green";
    btn[arr[i]].style.background = "green";
    setTimeout(() => {
      if (i % 2 != 0) alert("Player one wins");
      else alert("Player two wins");

      if (arr.length != 10) getPlayAgain();
    }, 50);
  }

  once = false;
}

function getPlayAgain() {
  if (confirm("Play again?")) window.location.reload();
  else window.close();
}
