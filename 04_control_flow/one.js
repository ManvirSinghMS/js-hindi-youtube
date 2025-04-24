const score = 200;

if(score > 100){
    const Power = "fly"
//    console.log(`you have the power to ${Power}`)
}


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow you to buy")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged in")
}