/* global variable */

let age=21
let number=100

function doSomething(){
    let number=10 //block scope variable ,, it replaces the number 10
    console.log("number is",number);
    age=255
    console.log("age inside is",age)
}

doSomething();
console.log("number outside is",number);

console.log("age outside is",age) //it will also print age=255 because let is not used inside block so the value is replaced.