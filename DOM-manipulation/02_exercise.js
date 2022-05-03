const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');

// method 2
btn.onclick = () => alert('Hello World! Method 2');

// method 3
btn2.addEventListener('click', () => {
  alert('Hello World!, Method 3');
});


const btn3 = document.querySelector('#function-button');
// event listeners with functions
function alertFunction() {
  alert('Yay, you did it!');
}

// method 2
btn3.onclick = alertFunction;

// method 3
btn3.addEventListener('click', alertFunction);


// Test
const btn4 = document.querySelector('.test');
btn4.addEventListener('click', function (e) {
  console.log(e);
});
btn4.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});

// Group of nodes
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// weu use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});

