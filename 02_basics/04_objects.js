 //const tinderUser = new Object(); // this is a singleton object 
 const tinderUser = {} // this is a non singleton object   
 tinderUser.name = "Manvir Singh",
 tinderUser.age = 18,
 tinderUser.isLoggedIn = false

//  console.log(tinderUser) 

const regularUser = {
    email : "some@gmail.com",
    fullName: {
        userfullname:{
            firstName: "Manvir",
            lastName: "Singh"
        }
    }
}

// console.log(regularUser.fullName) // dot notation


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
// const obj3 = {obj1, obj2} 

const obj3 = Object.assign(obj1, obj2) // shallow copy

console.log(obj3)

const obj4 = {...obj1, ...obj2} // mostly used this method

console.log(obj4) // nested object

console.log(tinderUser.hasOwnProperty("name")) // check if the object has the property


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Manvir Singh",
}

const {courseInstructor:teacher}= course
console.log(teacher) // destructuring object