 function saymyname(name) {
    console.log("My name is " + name)
   }

   //  saymyname("Manvir Singh") // function declaration

// function addTwoNumbers(number1, number2) {
//       console.log(number1+number2)
// }

// addTwoNumbers(6,"9")


function addTwoNumbers(number1, number2) {
//  let result = number1 + number2
//    return result
   return number1 + number2
}

const result = addTwoNumbers(6,9) 
// console.log("Result :" ,result) 

function loginUserMessage(username="Devam"){
   if(username === undefined){
      return "Please provide a username"
   }
   return `${username} just logged in`
}

// console.log(loginUserMessage()) 

function calculateCartPrice(val1 , val2 , ...num){ //here it is called rest operator
   return  num + " " + val1 + " " + val2
}

   ``
// console.log(calculateCartPrice(100,200,300,400,500,600)) 


const user = {
   name: "Manvir",
   age: 22,
   email: "hello@gmail.com",
}

function handleObject(anyObject){
   console.log(`Username is ${anyObject.name} and age is ${anyObject.age}`)
}

// handleObject(user) 

// handleObject({
//    name: "Devam",
//    age: 25,

// })


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
   return getArray[1]
}

console.log(returnSecondValue(myNewArray)) 
console.log(returnSecondValue([100, 200, 300, 400])) 