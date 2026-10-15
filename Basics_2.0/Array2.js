const marvel_heros = ["thor","ironman","loki"]
const fruits = ["apple","Banana","grapes"]

//marvel_heros.push(fruits)
// Not a perfect output like arrays
console.log(marvel_heros)

//CONCAT
//Concat/ Spread new array bnata hai 
// const allitems = marvel_heros.concat(fruits)
// console.log(allitems)

//Spread
const allitems = [...marvel_heros, ...fruits]
console.log(allitems)

// Array ke andr array 
const another_array =  [1, 2, 3, 4, 5,[1, 2], 6, [8, 9] ]
const anothar_array = another_array.flat(Infinity)
console.log(anothar_array)

//Hme array kaise bnae wo bnte hai from se 
console.log(Array.from("Anas"))
console.log(Array.isArray("Anas"))
console.log(Array.from({name: "ANAS"}))  //interesting 

let score1 = 100
let score2 = 200
let score3 = 300

//Making a array
console.log(Array.of(score1, score2, score3));
