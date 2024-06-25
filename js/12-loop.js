let numbers = [1, 2, 3, 4, 5];

let returnedNum = [];

for (let index = 0; index < numbers.length; index++) {
  let number = numbers[index];
  returnedNum[index] = doubleNumbers(number);
}
console.log(returnedNum);

function doubleNumbers(num) {
  return num * 2;
}
