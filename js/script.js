var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else if (randomNumber == '2') {
  computerMove = 'Papier';
} else if (randomNumber == '3') {
  computerMove = 'Nozyce';
}
printMessage('Mój ruch: ' + computerMove);