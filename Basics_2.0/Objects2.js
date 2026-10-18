// Same value he aate hai 
// const appleUser = new Object() // Type 1 

const appleUser = {}//TYpe 2  

appleUser.id = "123asd"
appleUser.name = "Anas"
appleUser.isLoggedIn = false

// console.log(appleUser)

// Name kaise kaise define kr sakte hai 
//objetct ke andr object kaise access kr sakte hai 

const regularUser = {
    fullname:{
        userfullname:{
            firstname:"Mohd",
            lastname:"Khan"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);


// Merging Group
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// Simple method/ method 1 
// Spread Operator
// const obj3 = {...obj1, ...obj2}

//method 2
// const obj3 = {obj1, obj2}
const obj3 = Object.assign({},obj1, obj2)
console.log(obj3)

/* new properties 
{1: 'a', 2: 'b'}
1
: 
"a"
2
: 
"b"
[[Prototype]]
: 
Object
constructor
: 
ƒ Object()
hasOwnProperty
: 
ƒ hasOwnProperty()
isPrototypeOf
: 
ƒ isPrototypeOf()
propertyIsEnumerable
: 
ƒ propertyIsEnumerable()
toLocaleString
: 
ƒ toLocaleString()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
__defineGetter__
: 
ƒ __defineGetter__()
__defineSetter__
: 
ƒ __defineSetter__()
__lookupGetter__
: 
ƒ __lookupGetter__()
__lookupSetter__
: 
ƒ __lookupSetter__()
__proto__
: 
(...)
get __proto__
: 
ƒ __proto__()
set __proto__
: 
ƒ __proto__()
*/

console.log(Object.keys(appleUser))

//Check Property hai ya nhe hai 
console.log(appleUser.hasOwnProperty('isLoggedIn'));

//Destructuring 

const course = {
    coursename: "Java script course",
    price: "9999",
    coursteacher: "Anas"
}

// course.coursteacher
// console.log(coursteacher);

const {coursteacher} = course
console.log(coursteacher); 

/*Change name 
const {coursteacher: ABC } = course
console.log(ABC);*/

/*APIs Jb apna kaam kise or ke sr daal dena hota hai usko he APIs khete hai 
JSON
{
    name: "Khan Sahab"
    coursename: "Full stack Course"
    price: "free"
}
*/
//Types Of JSON format
[
    {},
    {},
    {}
]
