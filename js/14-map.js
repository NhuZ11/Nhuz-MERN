const double = input=>input*2   //you can omit the bracket if no parameter

console.log(double(11));

let users = [
    { name: "ram", age: 10 },
    { name: "shyam", age: 40 },
    { name: "hari", age: 12 },
  ];


//   let adults=users.filter(()=>{return true})
  let adults=users.filter(element=>element.age>18?true:false)//shortform
  console.log({adults});


  let newUser=users.map(element=>{
    return{
        name:element,
        age:element.age
    }
  })

  let newUser1=users.map((element,index)=>({
        name:element,
        age:element.age
  }))

  console.log(newUser);
  console.log(newUser1);