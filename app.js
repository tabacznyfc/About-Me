'use strict';
var myAnswer1 = 'no' || 'n';
var myAnswer2 = 'YES' || 'Y';
var myAnswer3 = 'yes' || 'y';
var myAnswer4 = 'no' || 'n';
var myAnswer5 = 'YES' || 'Y';
var myAnswer6 = 'yes' || 'y';
var numCountries = 4;
var bonusQues = false;

var userName = prompt('Hello what is your name?');
alert('Hello ' + userName);


function gameTime() {
var game = prompt('Would you like to play a game? y/n');
if ( (game.toLowerCase() === 'y') || (game.toLowerCase() === 'yes') ) {
  alert('Let\s play');
} else {
  alert('Let\'s play anyway');
}
}

function age()  {
var question1 = prompt('Am I over thirty?');

if(question1.toLowerCase() === myAnswer1) {
  alert('Yes Correct!');
} else{
  alert('Sorry wrong again!');
}
}

function mythical() {
var question2 = prompt('Do I want a unicorn?');

if(question2.toUpperCase() === myAnswer2) {
  alert('Woohoo you got it correct!');
} else {
  alert('Sorry wrong!');
}
}

function hooky()  {
var question3 = prompt('Have I ever skipped school?');

if(question3.toLowerCase() === myAnswer3) {
  alert('Correct!');
} else{
  alert('Sorry wrong!!');
}
}


function everyYear()  {
var question4 = prompt('Have I ever forgot my anniversary?');


if (question4.toUpperCase() === myAnswer4)  {
  alert('Can\t never forget that');
} else{
  alert('Would be crazy to forget such thing lol!');
}
}

function backToThe()  {
var question5 = prompt('Do I think about the future?')
if (question5.toLowerCase() === myAnswer5)  {
    alert('Yes I do!');
} else{
  alert('Who doesnt think about the future');
}
}

function ninjaTurtles() {
var question6 = prompt('Do I like pizza?');

if (question6.toUpperCase() === myAnswer6)  {
  alert('PIZZA IS LIFE');
} else{
  alert('pizza is life');

}
while (!bonusQues) {
  var question7 = parseInt(prompt("Bonus question: How many countries have I travelled to? *Hint 1-10*"));
  if (question7 === numCountries){
    alert("Yup I have been to 4 countries");
    bonusQues = true;
  } else if (numCountries < question7) {
    alert("You're too high, guess again!");

  }else if (numCountries > question7) {
   alert("You're too low, guess again!");

  }

};

gameTime();
age();
mythical();
hooky();
everyYear();
backToThe();
ninjaTurtles();
