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
  const week4Title = document.querySelectorAll('.week')[3];
  const week4 = document.querySelector('#week4');
  const week5Title = document.querySelectorAll('.week')[4];
  const week5 = document.querySelector('#week5');
  const week6Title = document.querySelectorAll('.week')[5];
  const week6 = document.querySelector('#week6');
  const week7Title = document.querySelectorAll('.week')[6];
  const week7 = document.querySelector('#week7');

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

  function hide4(){
    if (!week4.style.display) week4.style.display = 'none';
    else week4.style.display = '';
  }

  function hide5(){
    if (!week5.style.display) week5.style.display = 'none';
    else week5.style.display = '';
  }

  function hide6(){
    if (!week6.style.display) week6.style.display = 'none';
    else week6.style.display = '';
  }

  function hide7(){
    if (!week7.style.display) week7.style.display = 'none';
    else week7.style.display = '';
  }
  // Add Event Listener

  week1Title.addEventListener('click', hide1);
  week2Title.addEventListener('click', hide2);
  week3Title.addEventListener('click', hide3);
  week4Title.addEventListener('click', hide4);
  week5Title.addEventListener('click', hide5);
  week6Title.addEventListener('click', hide6);
  week7Title.addEventListener('click', hide7);
});
