console.log('JS locked and loaded');

window.addEventListener('DOMContentLoaded', (e) => {
  console.log('DOM loaded');
  // grab elements
  const selectors = document.querySelectorAll('.selector');
  const options = document.querySelectorAll('.gameoptions');
  const choiceDisplay = document.querySelectorAll('.choice');
  const baseImage = document.querySelector('.base');
  const message = document.querySelector('.message');
  const aiChoices = ['rock','paper','scissors', 'lizard', 'spock'];
  let roundWinner = '';
  const audio = document.querySelector('audio');
  let playerScore = parseInt(document.querySelector('.playerscore').querySelector('p').innerHTML);
  let aiScore = parseInt(document.querySelector('.aiscore').querySelector('p').innerHTML);

  //declare functions

  // Function to change images
  function playerChoice() {
    //Change first image to player choice
    choiceDisplay[0].src = '/images/rockpaperscissors/' + this.alt.toLowerCase() + '.svg';
    //change second image to random choices
    const aiChoice = aiChoices[Math.floor(Math.random()*aiChoices.length)];
    choiceDisplay[1].src = '/images/rockpaperscissors/' + aiChoice + '.svg';
    //hiding base image and showing choices
    baseImage.classList.add('hidden');
    for (let j = 0; j < choiceDisplay.length; j++) {
      choiceDisplay[j].classList.remove('hidden');
    }
    //check for winner
    if (this.alt === 'rock') {
      if (aiChoice === 'rock') {
        draw();
      } else if (aiChoice === 'scissors' || aiChoice === 'lizard') {
        playerWins();
      } else {
        aiWins();
      }
    } else if (this.alt === 'paper') {
      if (aiChoice === 'paper') {
        draw();
      } else if (aiChoice === 'rock' || aiChoice === 'spock') {
        playerWins();
      } else {
        aiWins();
      }
    } else if (this.alt === 'scissors') {
      if (aiChoice === 'scissors') {
        draw();
      } else if (aiChoice === 'paper' || aiChoice === 'lizard') {
        playerWins();
      } else {
        aiWins();
      }
    } else if (this.alt === 'paper') {
      if (aiChoice === 'paper') {
        draw();
      } else if (aiChoice === 'rock' || aiChoice === 'spock') {
        playerWins();
      } else {
        aiWins();
      }
    } else if (this.alt === 'lizard') {
      if (aiChoice === 'lizard') {
        draw();
      } else if (aiChoice === 'paper' || aiChoice === 'spock') {
        playerWins();
      } else {
        aiWins();
      }
    } else if (this.alt === 'spock') {
      if (aiChoice === 'spock') {
        draw();
      } else if (aiChoice === 'rock' || aiChoice === 'scissors') {
        playerWins();
      } else {
        aiWins();
      }
    }
    scoreBoardColor();
    playSound();
  }
  function playerWins(){
    message.innerHTML = 'Look at you go! You win!';
    document.querySelector('.playerscore').querySelector('p').innerHTML = playerScore += 1;
    roundWinner = 'player';
  }
  function aiWins() {
    message.innerHTML = 'You were beaten by a sentient rock';
    document.querySelector('.aiscore').querySelector('p').innerHTML = aiScore += 1;
    roundWinner = 'ai';
  }
  function draw() {
    message.innerHTML = 'Draw. Try again!';
    roundWinner = 'draw';
  }
  function reset(){
    document.querySelector('.aiscore').querySelector('p').innerHTML = 0;
    document.querySelector('.playerscore').querySelector('p').innerHTML = 0;
    message.innerHTML = 'Off you go again';
    baseImage.classList.remove('hidden');
    for (let j = 0; j < choiceDisplay.length; j++) {
      choiceDisplay[j].classList.add('hidden');
    }
    scoreBoardColor();
  }
  function playSound(){
    if (roundWinner === 'player') {
      console.log('playing applause');
      audio.src = '/sounds/rockpaperscissors/applause2.wav';
      audio.play();
    } else if (roundWinner === 'ai') {
      console.log('playing boo');
      audio.src = '/sounds/rockpaperscissors/boooo.wav';
      audio.play();
    } else {
      console.log('playing groan');
      audio.src = '/sounds/rockpaperscissors/crowd-groan.wav';
      audio.play();
    }
  }
  //Make winning choice grow to fill game board and hide losers choice
  function winnerAnimation() {

  }
  function scoreBoardColor() {
    if (playerScore > aiScore) {
      document.querySelector('.playerscore').classList.add('winning');
      document.querySelector('.playerscore').classList.remove('losing', 'equal');
      document.querySelector('.aiscore').classList.add('losing');
      document.querySelector('.aiscore').classList.remove('winning', 'equal');
    } else if (playerScore < aiScore) {
      document.querySelector('.playerscore').classList.add('losing');
      document.querySelector('.playerscore').classList.remove('winning', 'equal');
      document.querySelector('.aiscore').classList.add('winning');
      document.querySelector('.aiscore').classList.remove('losing', 'equal');
    } else if (playerScore === '0' && aiScore === '0') {
      document.querySelector('.playerscore').classList.remove('winning', 'equal', 'losing');
      document.querySelector('.aiscore').classList.remove('losing', 'equal', 'winning');
    } else {
      document.querySelector('.playerscore').classList.add('equal');
      document.querySelector('.playerscore').classList.remove('winning', 'losing');
      document.querySelector('.aiscore').classList.add('equal');
      document.querySelector('.aiscore').classList.remove('losing', 'winning');
    }
  }

  //set event listeners
  for (let i = 0; i < selectors.length; i++) {
    console.log('Adding Event Listener to' + selectors[i]);
    selectors[i].addEventListener('click', playerChoice);
  }
  document.querySelector('.reset').addEventListener('click', reset);
});
