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
    strings: ['This site is currently under construction.', 'Come back soon!']
  });

  // DOM variables
  const $about = $('.about');
  const $chevronDiv = $('#chevronDiv');
  const $typeItContainer = $('.ti-container')[0];

  function scrollToAbout()  {
    console.log('moving down');
    $('html, body').animate({
      scrollTop: $about.offset().top
    }, 2000);
  }

  $chevronDiv.on('click',scrollToAbout );

}
