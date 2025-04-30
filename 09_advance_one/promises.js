const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task is completed")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed")
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 Resolved")
})

const promiseThree = new Promise(function (resolve,reject){
    setTimeout(function(){
        resolve({userName:"Chai",  email:"Example@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"mikasa",password:"ErenPaglu"})
        }else{
            reject('ERROR : Something Went Wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch (function(error){
    console.log(error)
}).finally(()=>console.log("The promise is Either resolve or rejected"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =  false
        if(!error){
            resolve({username:"JavaScript",password:"1234"})
        }else{
            reject('ERROR : JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
  try{
    const response = await promiseFive
    console.log();
  } catch(error){
    console.log(error)
  }

}

consumePromiseFive()


async function getAllUsers(){
try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
} catch (error) {
    console.log("E : ",error)
}
} 

getAllUsers()
