var text;
var favDrink = prompt("What's your favorite sodadrink?");
switch (favDrink) {
    case "papsi":
        text = "Excellent choice!papsi is good for your soul.";
        break;
    case "cocakola":
        text = "cocakola is my favorite too!";
        break;
    case "miranda":
        text = "Really? Are you sure themiranda is your favorite?";
        break;
    default:
        text = "I have never heard of that one..";
        break;
}

let userName = prompt('whats your name?');

while (!userName) {
    userName = prompt('please write something');
}


let feeling = confirm('are you good?');

if (feeling === true) {
    console.log('thats great to hear');
} else {
    console.log('hope you feel better soon');
}


let favouriteColor = prompt('what do you like more red/blue?');

console.log('before', favouriteColor);

favouriteColor = favouriteColor.toLowerCase();


favouriteColor = favouriteColor.toUpperCase();

console.log('after', favouriteColor);

if (favouriteColor === 'blue') {
    console.log('you like blue more');
} else if (favouriteColor === 'red') {
    console.log('you like red more');
} else {

    console.log('please write red or blue');
}

let favouritesport = prompt('is runing my favourite sport?');



favouritesport = favouritesport.toLowerCase();

let flag = false;

if (favouritesport === 'yes' || favouritesport === 'y') {
    alert('correct, good job');
} else if (favouritesport === 'no' || favouritesport === 'n') {
    alert('sorry thats wrong');
} else {
    flag = true;
    alert('please answer yes/y no/n');
}




let  iJordanian=prompt('are i Jordanian');
iJordanian=iJordanian.toLowerCase();

 if (iJordanian==='yes'||iJordanian==='y') {
    alert('are you okay?');
 }else if (iJordanian==='no' || iJordanian==='n') {
    score++;
    alert('reallyy?');
 }else{
    alert('please answer with yes/y no/n');
 }


 let fruit = prompt('what is your favourite fruit');

switch (fruit.toUpperCase()) {
    case 'APPLE':
        console.log('apples are 5$ a kilo');
        break;

    case 'orange':
    case 'BANANA':
        console.log('banana and orange are 12$ a kilo');
        break;

    default:
        console.log('sorry we dont have that');
        break;
}

let getRating = function () {

    let stars = prompt('how many starts do you rate our website?');

    if (stars > 5) {
        stars = 5;
    }
    let starResults = '';


    return starResults;
}

document.write(getRating());

let favouriteFood = prompt('is Misf my favourite food?');

favouriteFood = favouriteFood.toLowerCase();

if (favouriteFood === 'yes' || favouriteFood === 'y') {
    alert('nope thats wrong');
} else if (favouriteFood === 'no' || favouriteFood === 'n') {
    alert('correct, good job');
} else if (flag === true) {
    alert('I told you to only answer with yes/y no/n');
} else {
    flag = true;
    alert('please answer yes/y no/n');
}

let firstName = prompt('whats your name');

if (firstName) {
    alert('truthy value');
} else {
    alert('falsy value');
}

let grades = [30, 28, 54, 81, 56, 58, 88, 79];

console.log('the whole array', grades);

console.log('the fourth element', grades[3]);

console.log('the first element', grades[0]);

let info = ['extream', 50, 99.44, ['run', 'jump', 'fire']];
console.log(info);


let human=prompt('am i a robot');
 human=human.toLowerCase();



 if (human==='yes'||human==='y') {
    score++;
    // score=score+1;
    alert('good job');
 }else if (human==='no'||human==='n') {
    alert('think again');
 }else{
    alert('please answer with yes/y no/n');
}


let  igood=prompt('are i good');
igood=igood.toLowerCase();

 if (igood==='yes'||igoods==='y') {
    alert('are you okay?');
 }else if (igood==='no' || igoods==='n') {
    score++;
    alert('reallyy?');
 }else{
    alert('please answer with yes/y no/n');

 }





