console.log('JS locked and loaded');
// Non-DOM-related variables
let timerRunning = 0;
let timerInterval = '';
let timeLimit = 30;
let challenge = '';
let solution;
let score = 0;
// const challenges = [setAddition,setSubtraction,setMultiplication,setDivision];  How to invoke functions from array?
const challenges = {
  1: setAddition,
  2: setSubtraction,
  3: setMultiplication
  // 4: setDivision()
};
let level = 1;

//Non-DOM-related functions
function randomNumber(max = 10) {
  return Math.ceil((Math.random() * max));
}
function timer() {
  timeLimit -= 1;
  console.log(timeLimit);
  $('#timer').text(timeLimit);
  if (timeLimit === 3) {
    $('.containertimer').addClass('ringing');
    $('.containertimer').removeClass('blue');
    $('.containertimer').addClass('red');
  }
  if(timeLimit === 0) {
    clearInterval(timerInterval);
    $('.containertimer').removeClass('ringing');
    $('.input').toggleClass('hide');
    $('form').toggleClass('hide');
    $('.repeat').removeClass('hide');
    if (score > 9) $('.nextlevel').removeClass('hide');
    // endGame();
  }
}
function startTimer() {
  if (timerRunning) {
    timerInterval = setInterval(timer, 1000);
  }
}
function startGame() {
  timerRunning = 1;
  timeLimit = 30;
  startTimer();
  $('.start').addClass('hide');
  $('.repeat').addClass('hide');
  $('.nextlevel').addClass('hide');
  $('form').toggleClass('hide');
  $('.containertimer').addClass('blue');
  setChallenge();
}
function levelUp() {
  level ++;
  timerRunning = 1;
  timeLimit = 30;
  startTimer();
  $('.start').addClass('hide');
  $('.repeat').addClass('hide');
  $('form').toggleClass('hide');
  $('.containertimer').removeClass('blue');
  setChallenge();
}
function setChallenge(){
  console.log('setting Challenge');
  if (level === 1) {
    console.log('setting level 1');
    setAddition();
  } else if (level === 2) {
    console.log('setting level 2');
    const challenge = randomNumber(2);
    challenges[challenge]();
  } else {
    const challenge = randomNumber(4);
    challenges[challenge]();
  }
  $('input').focus();
}
function setAddition() {
  const num1 = randomNumber();
  const num2 = randomNumber();
  solution = num1 + num2;
  challenge = `${num1} + ${num2} = ?`;
  $('#challenge').html(challenge);
}
function setSubtraction() {
  const num1 = randomNumber();
  const num2 = randomNumber();
  solution = num1 - num2;
  challenge = `${num1} - ${num2} = ?`;
  $('#challenge').html(challenge);
}
function setMultiplication() {
  const num1 = randomNumber();
  const num2 = randomNumber();
  solution = parseInt((num1 * num2).toFixed(1));
  challenge = `${num1} * ${num2} = ?`;
  $('#challenge').html(challenge);
}
function setDivision() {
  const num1 = randomNumber();
  const num2 = randomNumber();
  solution = parseInt((num1 / num2).toFixed(1));
  challenge = `${num1} / ${num2} = ?`;
  $('#challenge').html(challenge);
}
function checkSolution() {
  console.log($('input').val());
  if (parseInt($('input').val()) === solution) {
    score ++;
    $('#score').html(score);
    setChallenge();
    $('input').val('');
    $('input').removeClass('red');
  } else {
    $('input').val('');
    $('input').addClass('red');
  }
}

$(() => {
  console.log('DOM Loaded');

  // Add event listeners
  $('.start').on('click', startGame);
  $('#submit').on('click', checkSolution);
  $('input').keypress((e) => {
    if ( e.which === 13 ) {
      console.log('if triggered');
      // e.preventDefault();
      checkSolution;
    }
    console.log('key pressed');
  });
  $('.repeat').on('click', startGame);
  $('.nextlevel').on('click', levelUp);

});
