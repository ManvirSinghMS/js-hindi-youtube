 const user = {
    username: "Manvir",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to the website`)  // this talks about current context
    }
 }

//  user.welcomeMessage();
//  user.username = "Hitesh"
//  user.welcomeMessage();


 //this is browser gives window object(global object) 
 // this is node gives empty object(global object)


//  function coffee(){
//     console.log(this)
//  }

//  coffee()


// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }


const addTwo = (num1 , num2) => num1 + num2  // we can also write like this

console.log(addTwo(5, 10)) 


