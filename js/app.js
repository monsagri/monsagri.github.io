/* global TypeIt */
console.log('JS locked and loaded');

//Check for DOM loaded
$(function() {  // run DOM related functions
  init();
});

// Stuff to do once DOM is loaded
function init(){

  console.log('DOM Loaded');

  new TypeIt('.hero-header__subtitle', {
    loop: true,
    speed: 100,
    deleteSpeed: 80
  }).type('Full Stack Web Developer').pause(1000).delete().type('Cyclist').pause(1000).delete().type('Failed Professional Dungeon Master').pause(1000).delete().type('Unrepentant Nerd').pause(1000).delete().type('Beer Enthusiast');

  new TypeIt('.hero-header__me', {
    speed: 100,
    deleteSpeed: 80
  }).pause(19000).type('<strong>Monsagri</strong> is Fabian Feldberg');

  // DOM variables
  const $about = $('.about');
  const $chevronDiv = $('#chevronDiv');
  const $projects  = $('.projects > .project');
  const $lastProjectBtn = $('.projects > .previosBtn');
  const $nextProjectBtn = $('.projects > .nextBtn');

  // Other variables

  let currentProject = 0;

  console.log($projects);
  console.log($lastProjectBtn);
  console.log($chevronDiv);
  console.log($nextProjectBtn);

  function lastProject() {
    if (currentProject === 0) {
      // hide the current project
      $projects[currentProject].classList.add('hidden');
      console.log(`${$projects[currentProject]} is now hidden`);
      // change currentProject counter and show last project
      currentProject = $projects.length - 1;
      $projects[currentProject].classList.remove('hidden');
      console.log(`${$projects[currentProject]} is now shown`);
    } else {
      $projects[currentProject].classList.add('hidden');
      console.log(`${$projects[currentProject]} is now hidden`);
      // change currentProject counter and show previous project
      currentProject --;
      $projects[currentProject].classList.remove('hidden');
      console.log(`${$projects[currentProject]} is now shown`);
    }
  }

  function nextProject() {
    if (currentProject === $projects.length - 1) {
      // hide the current project
      $projects[currentProject].classList.add('hidden');
      console.log(`${$projects[currentProject]} is now hidden`);
      // change currentProject counter and show last project
      currentProject = 0;
      $projects[currentProject].classList.remove('hidden');
      console.log(`${$projects[currentProject]} is now shown`);
    } else {
      $projects[currentProject].classList.add('hidden');
      console.log(`${$projects[currentProject]} is now hidden`);
      // change currentProject counter and show previous project
      currentProject ++;
      $projects[currentProject].classList.remove('hidden');
      console.log(`${$projects[currentProject]} is now shown`);
    }
  }

  function scrollToAbout()  {
    console.log('moving down');
    $('html, body').animate({
      scrollTop: $about.offset().top
    }, 2000);
  }

  $chevronDiv.on('click',scrollToAbout );
  $lastProjectBtn.on('click',lastProject );
  $nextProjectBtn.on('click',nextProject );

}
