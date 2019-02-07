// Declaring with the function keyword
function hi() {
  console.log('Say Hello');
}

hi();

// arrow functions
const arrow = (test) => {
  console.log(test);
}

arrow('hi')

// for practice

// make an arrow function with no block body
const myArrow = y => y +1
// make a function that returns a function
console.log(myArrow(10))
 
const functionFactory = () => () => console.log("this is weird") 
const a = functionFactory()
a()
const anotherFunction = functionFactory
anotherFunction()()
