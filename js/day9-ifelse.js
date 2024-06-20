let user={
    name: "Ram",
    paidStatus: false,
    hasScholarship: false,
    gender: "male"
}

// if(user.paidStatus || user.hasScholarship){
//     if(user.gender=="female"){
//         console.log(`Mrs.${user.name} can give exam `);
//     }else{
//         console.log(`Mr.${user.name} can give exam `);
//     }
// }else{
//     if(user.gender=="female"){
//         console.log(`Mrs.${user.name} can't give exam `);
//     }else{
//         console.log(`Mr.${user.name} can't give exam `);
//     }
// }

let genderPost = (user.gender=="male")?"Mr":"Mrs";

if(user.paidStatus || user.hasScholarship){  
        console.log(`${genderPost}.${user.name} can give exam.`);
}else{
     console.log(`${genderPost}.${user.name} can't give exam.`);
}


