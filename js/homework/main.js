console.log('JS locked and loaded');

window.addEventListener('DOMContentLoaded', (e) => {
  console.log('DOM loaded');

  // Grab Elements
  const week1Title = document.querySelectorAll('.week')[0];
  const week1 = document.querySelector('#week1');
  const week2Title = document.querySelectorAll('.week')[1];
  const week2 = document.querySelector('#week2');
  const week3Title = document.querySelectorAll('.week')[2];
  const week3 = document.querySelector('#week3');

  // Define functions
  function hide1(){
    if (!week1.style.display) week1.style.display = 'none';
    else week1.style.display = '';
  }

  function hide2(){
    if (!week2.style.display) week2.style.display = 'none';
    else week2.style.display = '';
  }

  function hide3(){
    if (!week3.style.display) week3.style.display = 'none';
    else week3.style.display = '';
  }
  // Add Event Listener

  week1Title.addEventListener('click', hide1);
  week2Title.addEventListener('click', hide2);
  week3Title.addEventListener('click', hide3);
});
