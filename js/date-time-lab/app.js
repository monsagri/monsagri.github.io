console.log('JS locked and loaded');
// Non Dom related variables

window.addEventListener('DOMContentLoaded', (e) => {
  console.log('DOM loaded');
  // Function independent variables
  let dateNow = new Date();
  const screen = document.querySelector('.screen');
  const stopWatch = document.querySelectorAll('.screen')[1];
  const wholeWatch = document.querySelector('#timer');
  let stopWatchTime = parseInt(document.querySelectorAll('.screen')[1].innerHTML, 10);
  const startBtn = document.querySelector('#startStop');
  const resetBtn = document.querySelector('#reset');
  const dateBtn = document.querySelector('#date');
  let watchRunning = 0;
  let countDownInterval = '';

  // Clock Function
  function displayTime() {
    dateNow = new Date();
    console.log(dateNow);
    // get time fragments
    let hoursNow = dateNow.getHours();
    let minutesNow = dateNow.getMinutes();
    let secondsNow = dateNow.getSeconds();

    // Add 0 infront of 1 digit numbers
    if (hoursNow < 10) hoursNow = '0' + hoursNow;
    if (minutesNow < 10) minutesNow = '0' + minutesNow;
    if (secondsNow < 10) secondsNow = '0' + secondsNow;

    // Assemble time
    const timeNow = hoursNow + ':' + minutesNow + ':' + secondsNow;

    screen.innerHTML = timeNow;
  }
  function displayDate() {
    let dayNow = dateNow.getDate();
    let monthNow = dateNow.getMonth() + 1;
    const yearNow = dateNow.getFullYear();

    // Add 0 infront of 1 digit numbers
    if (dayNow < 10) dayNow = '0' + dayNow;
    if (monthNow < 10) monthNow = '0' + monthNow;

    // Assemble date
    const fullDate = dayNow + ':' + monthNow + ':' + yearNow;

    console.log(fullDate);
    screen.innerHTML = fullDate;
  }
  function countDown() {
    stopWatchTime -= 1;
    stopWatch.innerHTML = stopWatchTime;
    if(stopWatchTime === 0) {
      clearInterval(countDownInterval);
      wholeWatch.classList.add('ringing');
    }
  }
  function runWatch() {
    // running timer

    if (watchRunning) {
      clearInterval(countDownInterval);
      watchRunning --;
      console.log(watchRunning, 'stopping timer');
    } else {
      countDownInterval = setInterval(countDown, 1000);
      watchRunning ++;
      console.log(watchRunning );
    }
  }
  function resetWatch() {
    watchRunning = 0;
    stopWatch.innerHTML = 10;
    clearInterval(countDownInterval);
    wholeWatch.classList.remove('ringing');
  }
  // Start Clock
  displayTime();
  setInterval(displayTime,1000);

  // Add event listeners
  startBtn.addEventListener('click', runWatch);
  resetBtn.addEventListener('click', resetWatch);
  // Change this to mousedown and mouse up, add functionality to stop the displayTime interval while it is pressed and to decrease the fontsize as well
  dateBtn.addEventListener('click', displayDate);

});
