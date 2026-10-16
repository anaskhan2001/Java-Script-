// singleton

//Object Literals
const JsUser ={
    name: "Anas",
    age: 25,
    location: "delhi",

    //Symbol Text are used for square brackets 
    [Symbol]: "Symbol text",
    
    email: "anas@gmail.com",
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
console.log(JsUser["location"])
console.log(JsUser[Symbol])

//Object ko agr freeze krna ho to hm usko freeze keyword se use krte hai 
JsUser.email = "mak@chatgpt.com"
Object.freeze(JsUser)
console.log(JsUser)

//Greetings
JsUser.greeting = function(){
    console.log("Hello Anas khan")

}
console.log(JsUser.greeting);