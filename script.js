// Készíteni egy olyan négyzetet, ami kattintásra animál.

let btnButton = document.querySelector('.btn');
let rectangleVar = document.querySelector('.rectangle');

function ButtonClick(){
    rectangleVar.style.color = "red";}
btnButton.addEventListener('click', ButtonClick);