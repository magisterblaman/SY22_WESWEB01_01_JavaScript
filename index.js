import 'dotenv/config';

let thisIsMyVariable = "hdsjahdsa";

thisIsMyVariable = 4.0;

// console.log('Hello world!');

let numArray = [1, 2, 3, 4, 5];

let myArray = [
	'ett',
	"två",
	3,
	4
];

myArray[2] = 10;

// for (let i = 0; i < myArray.length; i++) {
// 	console.log(myArray[i]);
// }

// console.log(myArray);

// numArray.push(6); // Lägger till elementet 6 sist.

// console.log(numArray);

// let removedFromEnd = numArray.pop(); // Tar bort sista elementet.

// console.log(numArray);
// console.log(removedFromEnd);

// numArray.unshift(0); // Lägger till elementet 0 först.

// console.log(numArray);

// let removedFromStart = numArray.shift(); // Tar bort först elementet.

// console.log(numArray);
// console.log(removedFromStart);

// = sätter ett värde
// == kollar ett värde (!=)
// === kollar ett värde OCH datatypen (!==)

// if (1 === "1") {
// 	console.log("hej");
// }

let variable1 = true;
let variable2 = false;

let falsy1 = false;
let falsy2 = 0;
let falsy3 = "";
let falsy4 = null;
let falsy5 = undefined;
let falsy6 = NaN; // not a number

let truthy1 = true;
let truthy2 = 1;
let truthy3 = -1;
let truthy4 = "hej";
let truthy5 = [];
let truthy6 = [1, 2, 3];

if (variable1) {
	console.log("variable1");
}
if (variable2) {
	console.log("variable2");
}

if (!falsy2) {
	console.log(!!falsy2);
}

if (truthy3) {
	console.log(truthy3);
}

function print(message) {
	console.log(message);
}

let add = function (a, b) {
	return a + b;
}

print("dshauisda");
console.log(add(4, 6));

let position = { "x": 3, "y": 7 };

position.x = "hdsauihsiduah";
position.y = false;

console.log(position); // SY22_PRRPRR02_04_Blabla.Klassnamn

let person = {
	"name": {
		"first": "Joe",
		"last": "Biden"
	},
	"age": 81,
	"officialRoles": [
		{
			"role": "President",
			"start": 2021,
			"end": 2025
		},
		{
			"role": "Vice President",
			"start": 2009,
			"end": 2017
		}
	]
};

console.log(person.name.first);
console.log(person.officialRoles[0].end);
console.log(person.officialRoles[1]);

/**
 * Dividerar två tal med varandra.
 * @param {number} a Täljaren.
 * @param {number} b Nämnaren.
 * @returns {number} Kvoten.
 */
function divide(a, b) {
	return a / b;
}

/**
 * @type {string}
 */
let myVariable43890743987;

console.log(process.env.DATABASE_PASSWORD);