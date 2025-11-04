function getMoveName(argMoveId){
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o kamień.');
    return 'kamień';
  }
}

function displayResult(argPlayerMove, argComputerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + '.');

  if (
    (argPlayerMove == 'papier' && argComputerMove == 'kamień') ||
    (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') ||
    (argPlayerMove == 'nożyce' && argComputerMove == 'papier')
  ) {
    printMessage(' Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
    printMessage(' Remis!');
  } else {
    printMessage(' Przegrywasz!');
  }
}

function buttonClicked(argButtonName){
  clearMessages();

  const playerMove = argButtonName;
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  const computerMove = getMoveName(randomNumber);

  displayResult(playerMove, computerMove);
}

// ---- powiązania guzików z funkcją ----
document.getElementById('button-rock').addEventListener('click', function(){
  buttonClicked('kamień');
});

document.getElementById('button-paper').addEventListener('click', function(){
  buttonClicked('papier');
});

document.getElementById('button-scissors').addEventListener('click', function(){
  buttonClicked('nożyce');
});