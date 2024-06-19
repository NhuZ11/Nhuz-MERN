console.log("conditional statements");

let willRain=false;
let hasProbablity=true;
if (willRain) {
    console.log("Take Umbrella");
    
} else {
    if (hasProbablity) {
        console.log("You might need the umbrella");
    } else {
       console.log("No need"); 
    }
} 


let ternaryOperator = (willRain && hasProbablity)?console.log("Take Umbrella"):console.log("No need to take");
