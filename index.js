// I'm comment
// console.log('Learn Js');

let firstName = "shadow";


console.log(firstName)

const color = 'red';
console.log(color)


/* 
Primitives or Value types data
    - String
    - Number
    - Boolean
    - Undefined
    - Null
*/

let fname = 'Shadow hedgehog';    // String Literal
let age = 15;   // Number Literal
let isApproved = true;  // Boolean Literal
let lastName = undefined;   // Undefined Literal
let selectColor = null;     // Null Literal



/* 
Reference types data
    - Object
    - Array
    - Function
*/

// ----> 1. Create object for a person

let person = {
    // These are propeties of person
    dname : 'shadow',
    age : 15
};

// ----> Change the value of propeties by notation

// Dot Notaiton
person.dname = 'kerl';

// Bracket notaion
person['dname'] = 'p kerl'

console.log(person)
console.log(person.dname)






// Create an Array

let selectColors = ['red', 'blue', 'green'];
console.log(selectColors)
console.log(selectColors[1])





// Create a Function
function funName() {
    // function body
    console.log('This is Function!');
}

funName();



function greet(name) {
    console.log('Hello ' + name);
}

greet('shadow');
greet('kerl');
