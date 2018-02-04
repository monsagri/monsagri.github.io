console.log('JS locked and loaded');

window.addEventListener('DOMContentLoaded', (e) => {
  console.log('DOM loaded');
  //get buttons
  const buttons = document.getElementsByClassName('player');
  const audio = document.getElementsByTagName('audio')[0];

  // give each button eventlisteners

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', play);
    buttons[i].addEventListener('click', changecolors);
  }

  //extract content from buttons
  //transform p content into filename format
  function play() {
    audio.src = '/sounds/daftpunksoundboard/' +   this.querySelector('p').innerHTML.toLowerCase().replace(/ /g,'_') + '.wav';
    audio.currentTime = 0;
    audio.play();
  }

  // Get random rgb values
  function randomrgb() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
  }

  // assign new random rgb values to all buttons
  function changecolors() {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = randomrgb();
    }
  }


  // switch transformed p content to audio source and play sound from start

  //randomize colours maybe



});
