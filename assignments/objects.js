// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ====
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F

// Example format of an intern object: 1, examples@you.edu, Example, F


// Write your intern objects here:
const internOne = {
    id: 0,
    name: "Mitzi",
    email: "mmelloy0psu.edu",
    gender: "F"
};
const internTwo = {
    id: 1,
    name: "Kennan",
    email: "kdiben1@tinypic.com",
    gender: "M"
};
const internThree = {
    id: 2,
    name: "Keven",
    email: "kmummery2@wikimedia.org",
    gender: "M",
};
const internFour= {
    id: 4 ,
    name: "Gannie",
    email: "gmartinson3@illinois.edu,",
    gender: "M"
};

const internFive = {
    id: 5,
    name: "Antonette",
        email: "adaine5@samsung.com",
    gender: "F"
};



// ==== Challenge 2: Reading Object Data ====
// Once your objects are created, log out the following requests from HR into the console:

console.log(internOne.name);// Mitzi's name
// Console.log(intern[1]);
console.log(internTwo.id);// Kennan's ID
// Console.log(intern[2],id);
console.log(internThree.email); // Keven's email
// console.log(intern[3].name);
console.log(internFour.name); // Gannie's name
// console.log(intern[3]);
// Antonietta's Gender
console.log(internFive.gender);
//console.log (intern[4].gender);
// ==== Challenge 3: Object Methods ====
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.

internTwo.speak = function () {
    return `Hello, my name is ${this.name}`
};
console.log(internTwo.speak());
// → Hello , my name is Kennan!

// console.log(kennan.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
internFive.multiplyNums = function (num1, num2) {
    return num1 * num2
};


console.log(internFive.multiplyNums(3, 4));
// → 12

//console.log(antonietta.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.

// ==== Stretch Challenge: Nested Objects and the this keyword ====

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
    name: `Susan`,
    age: 70,
}
const child = {
    name: ` George`,
    age: 50,
};

    const   grandchild ={

            name: `Sam`,
            age: 30,
        }

};
parent.speak = function () {
    return `Hello, my name is  ${this.name }`
     };
parent.child.speak = function () {
    return "Hello, my name is ${this.name}"
     };
    parent.grandchild. speak = function () {
         return "Hello, my name is ${this.name}"
};

//have parent speak
     console.log(parent.speak());

// Log the parent object's name

// Log the child's age

// Log the name and age of the grandchild

// Have the parent speak

// Have the child speak
console.log(parent.child.speak);
// Have the grandchild speak
console.log(parent.child.grandchild.speak);
