const container = document.querySelector('.container');

// 1
const red = document.createElement('p');
red.classList.add('red');
red.style.color = 'red';
red.textContent = `Hey I'm red!`;
container.appendChild(red);

// 2
const blue = document.createElement('h1');
blue.classList.add('blue');
blue.style.color = 'blue';
blue.textContent = 'I am blue h3';
container.appendChild(blue);

// 3
const div = document.createElement('div');
div.classList.add('pink-div');
div.setAttribute('style', 'background-color: pink; border: 5px solid black;');
container.appendChild(div);

// 4
const body = document.createElement('p');
const header = document.createElement('h1');
body.classList.add('div--body');
header.classList.add('div--header');
header.textContent = 'I am into the div!';
body.textContent = 'Me too!';
div.appendChild(header);
div.appendChild(body);




