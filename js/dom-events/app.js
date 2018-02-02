console.log('JS locked and loaded');

document.addEventListener('DOMContentLoaded', () => {

  console.log('DOM loaded');
  // Grabbing Elements
  // I shouldn't need const = spans. If I call things by hand in the console it works, but defining them like this results in undefined.
  // Same thing for document.getElementById - It works in console but not in the JS file.
  const spans = document.getElementsByTagName('span');
  const button1 = document.getElementById('toggle');
  const circle = document.getElementsByClassName('circle')[0];
  const dropdown1 = document.getElementById('cities');
  const dropdownSpan = spans[0];
  const names = document.getElementsByClassName('name');
  const namesSpan = spans[1];
  const subscribe = document.getElementById('subscribe');
  const subscribeButton = document.getElementsByClassName('submit')[0];
  const title = document.getElementsByTagName('h1');

  // Checking Elements
  console.log(spans);
  console.log(button1);
  console.log(circle);
  console.log(dropdown1);
  console.log(dropdownSpan);
  console.log(names);
  console.log(namesSpan);
  console.log(subscribe);
  console.log(subscribeButton);
  console.log(title);

  // Adding Functions


  function task4() {
    event.preventDefault();
    subscribeButton.classList.add('submitted');
    subscribeButton.innerHTML = 'Submitted!';

  }

  function task5() {
    if (window.scrollY > 40) {
      title[0].classList.add('fadeOutUp');
    } else {
      title[0].classList.remove('fadeOutUp');
    }
  }

  // Adding Listeners
  button1.addEventListener('click', () => {
    circle.classList.add('pulse');
  });

  dropdown1.addEventListener('change', () => {

    dropdownSpan.innerHTML =dropdown1.value ;
  });

  // Dont think this needs to be wrapped in a function
  function addListeners() {
    for (let i = 0; i < names.length; i++) {
      names[i].addEventListener('mouseover', () => {
        namesSpan.innerHTML = names[i].innerHTML;
      });

      names[i].addEventListener('mouseout', () => {
        namesSpan.innerHTML ='';
      });
    }
  }

  addListeners();

  subscribe.addEventListener('submit', task4);

  window.addEventListener('scroll', task5);

});
