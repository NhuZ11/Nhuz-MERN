let courses = [
  {
    courseName: "MERN",
    Duration: "3 months",
  },
  {
    courseName: "Python",
    Duration: "2 months",
  },
  {
    courseName: "UI/UX",
    Duration: "3 months",
  },
];

function displayInfo(index) {
  console.log(
    `${courses[index].courseName} course duration is ${courses[index].Duration}`
  );
}

displayInfo(0);
displayInfo(1);
displayInfo(2);

function displayCourseInfo(course) {
  console.log(`${course.courseName} new duration is ${course.Duration}`);
}

displayCourseInfo(courses[0]);
displayCourseInfo(courses[1]);
displayCourseInfo(courses[2]);

let users = [
  {
    name: "Ram",
    phone: 98424654544,
  },
  {
    name: "Sita",
    phone: 98424654544,
  },
  {
    name: "Hari",
    phone: 98424654544,
  },
];

let genders = ["male", "female", "others"];
// genders.length //3
// Math.random()  //0 to 1
// Math.floor

//to print random gender from above gender
console.log(Math.floor(genders.length));

console.log(
  `Your gender is ${genders[Math.floor(Math.random() * genders.length)]}`
);

function addRandomGender(user, randomGender) {
  console.log(`${user.name}'s new gender is ${randomGender}`);
}

function genderGenerator() {
  let gender = genders[Math.floor(Math.random() * genders.length)];
  return gender;
}

addRandomGender(users[0], genderGenerator());
addRandomGender(users[1], genderGenerator());
addRandomGender(users[2], genderGenerator());

//to add religions too

let religions = ["Hindu", "Buddhist", "Christian", "Muslim"];

/* function randomData(index) {
    let maxAge = 80;
    users[index].religion = religions[Math.floor(Math.random() * religions.length)];
    users[index].age = Math.floor(Math.random() * maxAge);
    console.log(`${users[index].name}'s religions is ${users[index].religion} and age is ${users[index].age}.`);
} */

function randomValue(length) {
  let value = Math.floor(Math.random() * length);
  return value;
}

function randomData(index) {
  let maxAge = 80;
  users[index].religion = religions[randomValue(religions.length)];
  users[index].age = randomValue(maxAge);
  console.log(
    `${users[index].name}'s religions is ${users[index].religion} and age is ${users[index].age}.`
  );
}

randomData(0);
randomData(1);
randomData(2);

//you can also send array itself
function randomArray(arr) {
  let value = arr[Math.floor(Math.random() * arr.length)];
  console.log(value);
}
randomArray(religions);
randomArray(genders);

/* function randomReligion() {
  let religion = religions[Math.floor(Math.random() * religions.length)];
  return religion;
}

function randomAge() {
  let maxAge = 80;
  let age = Math.floor(Math.random() * maxAge); //For generating random age
  return age;
}

function addDetail(user, religion, age) {
  console.log(`${user.name}'s religions is ${religion} and age is ${age}`);
}

addDetail(users[0], randomReligion(), randomAge());
addDetail(users[1], randomReligion(), randomAge());
addDetail(users[2], randomReligion(), randomAge()); */

// create get randomValue function

// function sum(firstNumber,secondNumber){
//   let add=firstNumber+secondNumber
//   return add
// }

let add = (firstNumber, secondNumber) => {
  firstNumber + secondNumber;
};
console.log(`Sum of two number is ${sum(10, 20)}`);
console.log(add(1, 2));
