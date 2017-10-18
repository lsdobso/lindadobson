/* Variables */
var addZeroElement = document.getElementById('zero');
var addFiveElement = document.getElementById('add5');
var addTenElement = document.getElementById('add10');
var subOneElement = document.getElementById('sub1');
var randomElement = document.getElementById('random');
var results = document.getElementById('result');
var total = 0;



/* Execute Code Here */

addZeroElement.onclick = addZero;
addFiveElement.onclick = addFive;
addTenElement.onclick = addTen;
subOne.onclick = subOne;

randomElement.onclick = function() { 
var number = prompt("What's your number?");
	addRandom(number);
	};

results.onmouseover = function() {
	results.style.color = 'blue';
};

results.onmouseout = function() {
	results.style.color = 'green';
};



console.log(results);






/* Fuctions */

function addZero() {
	total = total + 0;
	results.innerHTML = total;
}

function addFive() {
	total = total + 5;
	console.log(total);
	results.innerHTML = total;
}

function addTen() {
	total = total + 10;
	results.innerHTML = total;
}

function subOne() {
	total = total - 1;
	results.innerHTML = total;
}

function addRandom(number) {
	total = total + Number(number);
	results.innerHTML = total;
}

/* Testing an object */
var person = {
   firstName: "Linda",
   lastName: "Dobson",
   age: 33,
   favoriteColor: "purple",
   favoritesnack: "chips",
   msg: function() {
   	var msg = "My name is " + this.firstName;
   	return msg;
   }

};

console.log(person.msg());
