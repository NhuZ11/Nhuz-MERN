let user={
    name: "Ram",
    paidStatus: false,
    hasScholarship: false,
    gender: "male",
    hasMetAttendence: true, 
    email: "email@gmail.com",
    password: "Password"
}


let genderPost = (user.gender=="male")?"Mr":"Mrs";

if((user.paidStatus || user.hasScholarship) && user.hasMetAttendence){  
        console.log(`${genderPost}.${user.name} can give exam.`);
}else{
     console.log(`${genderPost}.${user.name} can't give exam.`);
}






function login(email, password){
    if(email==user.email && password==user.password){
        console.log("Logged in successfully");
    }
    else{
        console.log("Incorrect email or password");
    }
}

login("email@gmial.com","password")



