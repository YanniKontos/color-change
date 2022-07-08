// declaration of global scope variables from html elements 

const generatorButton = document.getElementById('generator-button');
const background = document.getElementById('main-page-container');
const hexId = document.getElementById('hex-display');

// color hexes contain 7 characters (including hash) 
// generation of 6 random integers + string concatenation to make a suitable hex 

generatorButton.addEventListener('click', () => {
    let generatedNum = Math.random().toString().substring(2, 8);
    let hexCombination = `#${generatedNum}`;
    background.style.backgroundColor = hexCombination;
    hexId.innerHTML = hexCombination;
});