// Parenthisis (),Brackets [],Cyrly Braces {}

// Array ke indexing zero 0 se hote hai 

const myArry = [1, 2, 3, 4, 5, 6, 7]
// console.log(myArry[3]);


//Array Methods
myArry.push(2)
myArry.push(10)
myArry.pop(2)

//Add vaue in starting 
myArry.unshift(13) 

//Remove value from starting
myArry.shift(2)

//Array me present hai ya nhe hai in Boolean/Integer
console.log(myArry.includes(9));
console.log(myArry.indexOf(9));//Agr value present nhe hoge to -1 aayega

const newArry = myArry.join();

// console.log(myArry);
// console.log(newArry);

//Slice, Splice

console.log("A ", myArry);

const myn1 = myArry.slice(1, 4)

console.log(myn1);
console.log("B ", myArry);

const myn2 = myArry.splice(1, 3)
console.log("C ", myArry);

console.log(myn2);