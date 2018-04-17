/* global TypeIt */

console.log('JS locked and loaded');

document.addEventListener('DOMContentLoaded', function () {

  new TypeIt('.hero-header__subtitle', {
    strings: ['This site is currently under construction.', 'Come back soon!']
  });

});
