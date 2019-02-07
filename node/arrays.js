// Arrays in js

// arrays can be delared explicitly
const array = [9, 3, 4];

// or with new keyword
const anotherArray = new Array(5);

// access array elements
console.log(array[0]);

// change elements
array[1] = 'hello';

const newArr = []

console.log(array)

// for practice


// use forEach
array.forEach( num => {
    if (num === NaN) {
        
    }
    newArr.push(num * 2)
})

// console.log(array)
console.log(newArr)
// use map
const newArray = array.map(i => i * 3)
console.log(newArray)
// use pop
// use push
newArray.push(7)
console.log(newArray)

// use shift
newArray.unshift(9)
console.log(newArray)
// use unshift

newArray.shift(9)
// use filter
const notNum =  newArray.filter(num => num !== num )
console.log(notNum) // return NaN 'Hello'