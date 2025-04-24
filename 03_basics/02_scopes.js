 //let and const are block scoped

 //var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);  

function one(){
    const username = "Manvir"

    function two(){ 
        const website = "Google"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()




if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5)) // this will work because of hoisting
function addone(num){   // this function can be accessed outside
    return num + 1
}
addone(5)


console.log(addTwo(5)) // this will give error
const addTwo = function(num){ //this function cannot be accessed outside bcoz of hoisting
     return num + 2
}
addTwo(5)