let turn = true;
let cellsObject = {};
let boxes = [];
// const $display = $('#display');
function init() {
  cellsObject = document.getElementsByTagName('li');
  boxes = Object.values(cellsObject);
  console.log(boxes);
  console.log(typeof(boxes));
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].id = i;
  }
  $('li').on('click', marker);
  $('button').on('click', reset);

}

function marker() {
  if (turn) {
    $(this).html('X');
    $('#display').html('O\'s turn');
    checkForWin();
    checkForTie();
  } else {
    $(this).html('O');
    $('#display').html('X\'s turn');
    checkForWin();
    checkForTie();
  }
  turn = !turn;
  $(this).off();

}

function checkForWin() {
  console.log('checking for winner');
  checkTopRow();
  checkMiddleRow();
  checkBottomRow();
  checkLeftColumn();
  checkMiddleColumn();
  checkRightColumn();
  checkDiagonalLeft();
  checkDiagonalRight();
}
function checkTopRow() {
  console.log('checking top row');
  if (boxes[0].innerHTML === boxes[1].innerHTML && boxes[1].innerHTML ===  boxes[2].innerHTML && boxes[1].innerHTML !== '') {
    console.log('topwin');
    $('#display').html(`${boxes[0].innerHTML} wins!`);
    $('li').off();
  }
}
function checkMiddleRow() {
  console.log('checking middle row');
  if (boxes[3].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[5].innerHTML && boxes[4].innerHTML !== '') {
    $('#display').html(`${boxes[3].innerHTML} wins!`);
    $('li').off();
  }
}
function checkBottomRow() {
  console.log('checking bottom row');
  if (boxes[6].innerHTML === boxes[7].innerHTML && boxes[7].innerHTML === boxes[8].innerHTML && boxes[7].innerHTML !== '') {
    $('#display').html(`${boxes[6].innerHTML} wins!`);
    $('li').off();
  }
}
function checkLeftColumn() {
  console.log('checking left column');
  if (boxes[0].innerHTML === boxes[3].innerHTML && boxes[3].innerHTML === boxes[6].innerHTML && boxes[3].innerHTML !== '') {
    $('#display').html(`${boxes[0].innerHTML} wins!`);
    $('li').off();
  }
}
function checkMiddleColumn() {
  console.log('checking middle column');
  if (boxes[1].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[7].innerHTML && boxes[4].innerHTML !== '') {
    $('#display').html(`${boxes[1].innerHTML} wins!`);
    $('li').off();
  }
}
function checkRightColumn() {
  console.log('checking right column');
  if (boxes[2].innerHTML === boxes[5].innerHTML && boxes[5].innerHTML === boxes[8].innerHTML && boxes[5].innerHTML !== '') {
    $('#display').html(`${boxes[2].innerHTML} wins!`);
    $('li').off();
  }
}
function checkDiagonalLeft() {
  console.log('checking left diagonal');
  if (boxes[0].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[8].innerHTML && boxes[4].innerHTML !== '') {
    $('#display').html(`${boxes[0].innerHTML} wins!`);
    $('li').off();
  }
}
function checkDiagonalRight() {
  console.log('checking from right diagonal');
  if (boxes[2].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[6].innerHTML && boxes[4].innerHTML !== '') {
    $('#display').html(`${boxes[2].innerHTML} wins!`);
    $('li').off();
  }
}
function checkForTie() {
  if (boxes.every((div) => div.innerHTML !== '')) $('#display').html('Game is a tie');
}
function reset() {
  boxes.forEach((box) => {
    box.innerHTML ='';
  });
  turn = true;
  $('li').on('click', marker);
  $('#display').html('X\'s turn');

}

window.addEventListener('DOMContentLoaded', init);
