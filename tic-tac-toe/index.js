const sectionDivs = document.querySelectorAll(".game div");

const gameArray = new Array(9).fill(null);

let gameCompleted = false;

sectionDivs.forEach((div, index) => {
  div.addEventListener('click', () => {
    if (gameCompleted) return;
    if (!gameArray[index]) {
      div.textContent = 'O';
      gameArray[index] = 'O'; console.log('code runs for no fucking reason');
      const tied = isTie(gameArray);
      if (tied) {
        displayTie();
        return;
      }
      let winner = calculateWinner(gameArray);
      if (!winner) {
        botPlay();
        winner = calculateWinner(gameArray);
        if (winner) displayWinner(winner);
      } else {
        displayWinner(winner);
      }
    }
  });
});

function botPlay() {
  const emptySpaces = [];
  gameArray.forEach((value, index) => {
      if (!value) emptySpaces.push(index);
  });

  
  for (let i = 0; i < emptySpaces.length; i++) {
      const index = emptySpaces[i];
      gameArray[index] = 'X';
      if (checkWin('X')) {
          sectionDivs[index].textContent = 'X';
          return;
      }
      gameArray[index] = '';
  }

  
  for (let i = 0; i < emptySpaces.length; i++) {
      const index = emptySpaces[i];
      gameArray[index] = 'O';
      if (checkWin('O')) {
          sectionDivs[index].textContent = 'X';
          gameArray[index] = 'X';
          return;
      }
      gameArray[index] = '';
  }

  const randomIndex = Math.floor(Math.random() * emptySpaces.length);
  sectionDivs[emptySpaces[randomIndex]].textContent = 'X';
  gameArray[emptySpaces[randomIndex]] = 'X';
}

/**
 * 
 * @returns The winner, if any. Otherwise returns undefined
 */
function calculateWinner(gameArray) {
  let winner;
  for (let i = 0; i < 8; i = i + 3) {
    if (gameArray[i] === gameArray[i + 1] && gameArray[i + 1] === gameArray[i + 2]) winner = gameArray[i];
  }
  for (let i = 0; i < 3; i++) {
    if (gameArray[i] === gameArray[i + 3] && gameArray[i + 3] === gameArray[i + 6]) winner = gameArray[i];
  }
  if (gameArray[0] === gameArray[4] && gameArray[4] === gameArray[8]) winner = gameArray[0];
  if (gameArray[2] === gameArray[4] && gameArray[4] === gameArray[6]) winner = gameArray[2];
  if (winner) gameCompleted = true;
  return winner;
}


function isTie(gameArray) {
  if (gameArray.filter(v => !!v).length !== 9) return false;
  const winner = calculateWinner(gameArray);
  if (!winner) {
    gameCompleted = true;
    return true;
  } else {
    return false;
  }
}
function displayWinner(winner) {
  const body = document.querySelector('body');
  const winnerEl = document.createElement('p');
  winnerEl.textContent = `The winner is ${winner}`;
  winnerEl.classList.add('game-completed-text');
  body.appendChild(winnerEl);
}
function displayTie() {
  const body = document.querySelector('body');
  const tieEl = document.createElement('p');
  tieEl.textContent = `Game is Tied`;
  tieEl.classList.add('game-completed-text');
  body.appendChild(tieEl);
}
function removeEventListeners() {
  sectionDivs.forEach(div => {
    div.removeEventListener('click',);
  });
}