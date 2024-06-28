let users = [
  { name: "ram", age: 10 },
  { name: "shyam", age: 40 },
  { name: "hari", age: 12 },
];

for (let index = 0; index < users.length; index++) {
  console.log(`${users[index]} is in index ${index}`);
}

users.forEach((element) => {
  console.log(`${element.name}'s age is ${element.age}`);
});

let childrens = [];
let adults = [];

users.forEach((user) => {
  if (user.age < 18) {
    childrens.push(user);
  } else {
    adults.push(user);
  }
});

console.log("children:", childrens);

users.filter((user) => {
    return true     //filter depends on true or false
  });
  
  console.log("children:", childrens);


  let children=users.filter((elements)=>{
    if(elements.age<18){
        return true;       //if it is false then it returns nothing
    }
  })
  console.log("filtered children:",children);


  //foreach and filter are similar but filter can return an new array , foreach cannot

  //map,foreach and filter are array function