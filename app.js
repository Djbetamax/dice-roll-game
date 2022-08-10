// * Função de rolagem do dado de 6 lados
let rollDice1 = () => {
  return Math.floor(Math.random() * 6 + 1);
}
let rollDice2 = () => {
  return Math.floor(Math.random() * 6 + 1);
}

// * Pega os elementos que mostrarão o resultado no dado após o click
function rollClick() {
  let diceValue1 = document.getElementById('num1')
  let diceValue2 = document.getElementById('num2')
  let roll1 = diceValue1.innerHTML = rollDice1()
  let roll2 = diceValue2.innerHTML = rollDice2()

    let announceSpace = document.createElement('p');

    // * Mostra o vencedor
    let winnerBlue = document.createTextNode('Blue Wins');
    let winnerRed = document.createTextNode('Red Wins');
    let drawAnnounce = document.createTextNode('Draw');

    if (roll1 > roll2) {
      announceSpace.appendChild(winnerBlue);
      document.getElementById('winnerAnounce').appendChild(announceSpace);
    } else if (roll1 < roll2) {
      announceSpace.appendChild(winnerRed);
      document.getElementById('winnerAnounce').appendChild(announceSpace);
    } else {
      announceSpace.appendChild(drawAnnounce);
      document.getElementById('winnerAnounce').appendChild(announceSpace);
    }
}