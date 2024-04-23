/*
Taiwo Omileye
Quinn Shannon
Dennis Mathews
Jayashree Ugle
Ephraim Okoye
Diontae Akins
Latasha Davis
*/
const gameBox = document.getElementById('app')
const table = document.createElement('table');
const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');
gameBox.appendChild(table);
table.appendChild(tr);
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
const randomNum = Math.trunc(Math.random()*10+1);
console.log(randomNum);
let output = '';
let guess
setTimeout(() => {
    console.log("this is the third message");
  }, 2000);
window.alert("Guess a number between 1 and 10! Three guesses to get it right!")
do{
    guess = parseInt(window.prompt(output+'Pick a number from 1 to 10'));
    if(randomNum === guess){
        output = 'You win! '
    } else {
        output = 'Not Quite! '
        tr.lastElementChild.remove();
    }
    console.log(output);
    console.log(guess);
}while(randomNum != guess);