console.log('JS locked and loaded');

window.addEventListener('DOMContentLoaded', (e) => {
  console.log('DOM Loaded');

  //grab elements
  const target = document.querySelector('span').innerHTML;
  let remainder = document.querySelectorAll('span')[1];
  let progress = document.querySelector('progress');
  const buttons = document.getElementsByClassName('button');

  // log elements

  // add event listeners

  for (let i = 0; i < buttons.length; i++) {
    console.log('adding listener to ' + i);
    buttons[i].addEventListener('click', donate);
  }

  // donate function

  function donate() {
    const value = this.querySelector('p').innerHTML.replace(/£/g,'');
    progress.value = parseInt(value) + parseInt(progress.value);
    remainder.innerHTML -= value;
    console.log(document.getElementById('pointer').style.left);
    document.getElementById('pointer').style.left = progress.value - 10 + '%';
    document.getElementById('pointer').innerHTML = progress.value + '%';
    if (progress.value > 90 ) {
      buttons[2].removeEventListener('click', donate);
      buttons[2].style.opacity = 0.5;
    }
    if (progress.value > 95 ) {
      buttons[1].removeEventListener('click', donate);
      buttons[1].style.opacity = 0.5;
    }
    if (progress.value === 100 ) {
      buttons[0].removeEventListener('click', donate);
      buttons[0].style.opacity = 0.5;
      document.getElementById('message').innerHTML = 'Thank you to everybody who helped us reach our goal';
    }
  }




});
