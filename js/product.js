let users = [
    { id: 1, name: "Ram" },
    { id: 2, name: "sita" },
    { id: 3, name: "hari" },
];

let products = [
    { id: 1, name: "keyboard", rate: 100 },
    { id: 2, name: "mouse", rate: 200 },
    { id: 3, name: "watch", rate: 300 },
];

let cartItems = [
    {
        user_id: 1,
        product_id: 1,
        quantity: 2,
    },
    {
        user_id: 2,
        product_id: 1,
        quantity: 2,
    },
    {
        user_id: 2,
        product_id: 2,
        quantity: 2,
    },
    {
        user_id: 3,
        product_id: 1,
        quantity: 2,
    },
    {
        user_id: 3,
        product_id: 2,
        quantity: 2,
    },
    {
        user_id: 3,
        product_id: 3,
        quantity: 2,
    },
];


/* code here to find the total amount spent by each user */

/*
    ram has bought itesm worth Rs.200
    sita has bought itesm worth Rs.600
    hari has bought itesm worth Rs.1200
*/

//cost = product price * product quantity

function calculateCost(){

    



}

// for (let index = 0; index < users.length; index++) {
//     let UserSelectedQuantity=[]; 
//     if(users[index].id==cartItems[index].user_id){
//         let UserSelectedQuantity={
//             productId: cartItems[index].product_id,
//             quantity: cartItems[index].quantity
//         }
        
//     }
//     console.log(UserSelectedQuantity);
    
// }


const names= users.map(user=>user.name);
console.log(names);


