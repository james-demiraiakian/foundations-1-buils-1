// import functions and grab DOM elements

// initialize global state

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state

const generate = document.getElementById('generate');
const randomNum = document.getElementById('random-num');



generate.addEventListener('click', () => {
    randomNum.textContent = Math.floor(Math.random() * 2147483647);
});