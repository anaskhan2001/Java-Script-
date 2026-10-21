// Basics Notation of Functions
function sayMyName() {
    console.log("A")
    console.log("N")
    console.log("A")
    console.log("S")
}
sayMyName()

// Add two numbers in function

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2)
}
// addTwoNumbers(1,2)

const result = addTwoNumbers(3, 5)
console.log("result:", result);

//Another function
function loginMessage(Username = Khan) { //Agr hm equal to ke baad jo likhte hai 
    return `${Username} just login in the system of java`
}

// console.log(loginMessage())`
// () ek andr message denge to wo message print hoga first me
console.log(loginMessage("Anas"))



// function calculateCartPrice(...num1){
function calculateCartPrice(val1, val2,...num1){

    return num1 
}
// console.log(calculateCartPrice(10, 20, 30, 80))
//Value array me aayege

const user = {
    Username: "hitesh",
    price: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.Username} and price is ${anyobject.price}`);
}
//handleObject(user)
// Second method
handleObject({
    Username: "Kaalo",
    price: 899
})
 

//Example of array in functions
const mynewarray = [200, 300, 400, 500]
function returnSecondValue(getarray){
 return getarray[1]
}
console.log(returnSecondValue(mynewarray));