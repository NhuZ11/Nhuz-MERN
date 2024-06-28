let numbers = [1, 2, 3, 4, 5, 6];

let returnedNum = [];

for (let index = 0; index < numbers.length; index++) {
  let number = numbers[index];
  returnedNum[index] = doubleNumbers(number);
}
console.log(returnedNum);

function doubleNumbers(num) {
  return num * 2;
}


//fake name.
let names= ["Aarav", "Aarya", "Aasha", "Anisha" ]
let userObject =[];

for(let index=0;index<names.length;index++){
  let name=names[index];
  let user ={
    name: names[index],
    email: `${name}@gmail.com`,
    password: `${name}${index}`
  };
  userObject.push(user)
  
  // console.log(user);
}
console.log(userObject);


//sum(10,20)
//sum(20,20,50,50,50,50,50)   //rest operator

function sum(...input){
  let add=0;
  for(let index=0;index<input.length;index++){
    add=add+input[index];
  }
  return add;
}


console.log(sum(1,2,3,4));
console.log(sum(2,2,2,2,2,2));
console.log(sum(2,2,2,2,2,2));
console.log(sum(2,2,2,12,2));
console.log(sum(2,2,2,2,2,1));




//arrow function

const double=(input)=>{
  return input*2
}

console.log(double(100));


const differentiate=(num1,num2)=>{
    let subtract=num2-num1
    return subtract
}

console.log("The difference is:"+differentiate(10,20));