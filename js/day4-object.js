let users = [
  {
    name: "sita",
    address: {
      permanent: {
        district: "kathmandu",
        ward: 21,
        streetName: "Yangal",
      },
      temporary: {
        district: "Kathmandu",
        ward: 7,
        streetName: "Sitapaila",
      },
    },
  },
  {
    name: "Ram",
    address: {
      permanent: {
        district: "Lalitpur",
        ward: 21,
        streetName: "Mahalaxmistan",
      },
      temporary: {
        district: "Kathmandu",
        ward: 8,
        streetName: "Dallu",
      },
    },
  },
  {
    name: "Hari",
    address: {
      permanent: {
        district: "Bhaktapur",
        ward: 11,
        streetName: "Jadibudi",
      },
      temporary: {
        district: "Kathmandu",
        ward: 10,
        streetName: "Suichatar",
      },
    },
  },
];

console.log(users);

users[0].address.permanent.ward = 11; // changing the wrong ward number

console.log(users[0]);

users.push({
  name: "shyam",
  address: {
    permanent: {
      district: "kathmandu",
      ward: 111,
      streetName: "ashon",
    },
    temporary: {
      district: "Kathmandu",
      ward: 8,
      streetName: "chagal",
    },
  },
});

console.log(users);

users[0].address.permanent.postNo = 17122; // adding a new element inside a object

console.log(users[0]);


//to display the user detail

console.log(users[0].name+" "+"lives in"+" "+users[0].address.permanent.district);
console.log(users[1].name+" "+"lives in"+" "+users[1].address.permanent.district);
console.log(users[2].name+" "+"lives in"+" "+users[2].address.permanent.district);


//template literal or string literal


let num9=10

console.log(`the number is ${num9}`); // this is template literal




/***
 * 1,2
 * 3,4
 */


