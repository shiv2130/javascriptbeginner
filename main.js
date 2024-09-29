//commnent
console.log("HEllo World!");
//variables 
// let name =  "Shivanshu";
// console.log(name);

//variables can't be reserved keywords
//should be meaningful
//cannot start with a number 
//cannot contain a space or hyphen
//are case sensitive
let firstName, lastName;
const interestRate = 0.3;
//interestRate = 1;
console.log(interestRate);
//Primitive types consists of number, string, boolean , null, undefined
//Dyanamic-> JavaScript is dyanamic language
// typeof name
//reference type
let person = {
    name: " Jhon",
    age: 13,


};//-> the curly braces are object literals 
//dot notation 
person.name = "Shivanshu";

//bracket notation
person['name'] = "Mosh";
console.log(person);

let selectedColors = ['red', 'blue'];
selectedColors[2] = "Green";
console.log(selectedColors.length);
//techincally an array is an object

//functions 
let number = 1;

function greet(name, lastName) {
    console.log(" Hello " + name + " " + lastName);
}
function square(number){
   return  number*number;
}

console.log(square(2));
greet('John', 'Smith');

