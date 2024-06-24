let users = [
    {
      name: "Ram",
      age: 10,
      gender: "male"
    },
    {
      name: "Sita",
      age: 12,
      gender: "female"
    },
    {
      name: "Hari",
      age: 14,
      gender: "male"
    },
  ];

  
  let{name, age, gender}=users; //object destructuring

 

 /*  for(let index=0; index<users.length; index++){
    let genderPrefix = (users[index].gender=="male")?"Mr":"Mrs"; 
     
    console.log(`${genderPrefix}.${users[index].name}'s age is ${users[index].age}.`);
  } */


  //object destructuring
//   for(let index=0; index<users.length; index++){
//     let genderPrefix = (users[index].gender=="male")?"Mr":"Mrs"; 
//     user=users[index]
//     let{name, age, gender}=user;
//     console.log(`${genderPrefix}.${name}'s age is ${age}.`);
//   }



  function findMultipication(numbers){
    for(let index=0;index,numbers.length;index++){
        
        let num=numbers[index];
        let{number, startsFrom, endAt}=num;
        for(let n=startsFrom; n<=endAt; n++){
            
            console.log(`${number}*${n}=${number*n}`);
        }
    }

  }

 findMultipication([{
        number:5,
        startsFrom:1,
        endAt:5,
  }])
