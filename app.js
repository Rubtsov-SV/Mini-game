const board = document.querySelector('#board');
const colors = ['#560ead', '#360570', '#f10026', '#3bda00', 'ffeb00', '#f87085', '#fff473'];
const SQUARES_NUMBER = 500;

for(let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', setColor);

  square.addEventListener('mouseleave', removeColor);

  board.append(square);
}

function setColor(event) {
 const color =  getRandomColor();
 event.target.style.backgroundColor = color;
 event.target.style.boxShadow = `0 0 2px ${color}`;
};

function removeColor(event) {
  event.target.style.backgroundColor = '#1d1d1d';
  event.target.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
};