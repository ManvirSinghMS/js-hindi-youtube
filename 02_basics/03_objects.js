 //jado v apa literals di tarah define karde aa taa singleton nahi banda 
 //constructor to j banega taa singleton banega 

 Object.create//constructor method
 
 const mysym = Symbol("Key1")

const jsUser = {
    name: "manvir",
    "full name": "manvir singh",
    [mysym]: "key2", // symbol daa syntex ch squaare brackets ch likhna penda
    age: 18,
    location: "Jalandhar",
    email: "manvir@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.name);
// console.log(jsUser["name"])
// console.log(jsUser["full name"])
// console.log(jsUser[mysym])
jsUser.email = "manvir@chatgpt.com"
// Object.freeze(jsUser) // object nu freeze kar ditta taa o change nahi hovega
jsUser.email = "manvir@microsoft.com"
console.log(jsUser) // object nu freeze karan to baad change nahi hovega


jsUser.greeting = function () {
    console.log("Hello JS User")
}

jsUser.greetingtwo = function () {
    console.log(`Hello Js User ${this.name}`)
}

console.log(jsUser.greeting) 
