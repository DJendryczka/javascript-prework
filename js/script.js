var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else if (randomNumber == '2') {
  computerMove = 'Papier';
} else {
  computerMove = 'Nozyce';
}
printMessage('Mój ruch: ' + computerMove);
var playerInput, playerMove;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'Papier';
} else if (playerInput == '3') {
  playerMove = 'Nozyce';
} else {
  playerMove = 'Bledny wybur';
}
printMessage('Twój ruch: ' + playerMove);