// console.log(window); //Window object - Document is a method of Window object

// select Elements

// Select elements by ID

const heading = document.getElementById('head');
// console.log(heading.innerText);

// const heading = document.getElementsByClassName('heading'); //it return array of elements
// console.log(heading[1].innerText);


// const element = document.getElementById('card');
// console.log(element.innerHTML);


// const element = document.getElementsByTagName('h1');
// console.log(element);


// const element = document.querySelector('.heading')
// console.log(element);

// const element = document.querySelectorAll('.heading')
// console.log(element);

// Update the element

heading.innerText = 'This is the new heading';
// heading.innerHTML = '<p>This is a paragraph</p>';
// heading.textContent = 'This is a demo text';

// const newe = heading.getAttribute('id');
// heading.setAttribute('class', 'newid');/
// heading.removeAttribute('class')

// Styling using JS

heading.style.color = "#f29c27";
heading.style.fontSize = "40px";

// Adding classes

// heading.classList.add('disabled');
// heading.classList.remove('disabled');


// Creating and inserting element
const myCard = document.getElementById('card');
const newElement = document.createElement('div');
newElement.innerHTML = '<h3>This is an H3 Heading</h3>';
myCard.appendChild(newElement);

// myCard.removeChild(heading)

// Event handling

const button = document.getElementById('click');
const inputValue = document.getElementById('text');

button.addEventListener('click', handleButtonClick = (e) => {
    console.log(getInputValue());
})

inputValue.addEventListener('input', handleInput = (e) => {
        console.log(e.target.value);
})

function getInputValue(){
    return inputValue.value;
}

// events

// keyup event: It will be fired when a key is released
// keydown event: It will be fired when a key is pressed down.
// input event: For handling text content of input field.
// change, blur, focus, keypress, keyup, keydown, click, submit, input.....

