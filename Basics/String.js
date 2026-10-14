const name = " Anas" 
const repocount = 50

console.log(name  + repocount + " value");

console.log(`My name is ${name} and I have ${repocount}`);

const gameName = new String('Cricket')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3)); //character at index 3
console.log(gameName.indexOf('c')); //index of character c

const newString = gameName.substring(0, 3);//ye negative index ko ignore krta h aur 0 se start krta h
console.log(newString); //substring from index 0 to 3

const anotherString = gameName.slice(-5, -2);//isme negative index ko consider krta h aur last se count krta h
console.log(anotherString); //slice from index 0 to 3

//Trim, Replace and Includes
// Trim
const stringWithSpaces = "   Hello World   ";
console.log(stringWithSpaces)
console.log(stringWithSpaces.trim());//removes whitespace from both ends of the string

// Replace
const originalString = "I love JavaScript";
const replacedString = originalString.replace("JavaScript", "Python");
console.log(originalString); // Output: I love JavaScript
console.log(replacedString); // Output: I love Python

// Includes
const sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.includes("fox"));// Output: true bcz Fox isme included h sentence me   
console.log(sentence.includes("cat"));// Output: false bcz cat isme included nhi h sentence me

const gameName2 = "Mohd-Anas-Khan";
console.log(gameName2.split("-")); // Output: ["Mohd", "Anas", "Khan"] array of substrings split by the hyphen character


/*String {'Cricket'}
0
: 
"C"
1
: 
"r"
2
: 
"i"
3
: 
"c"
4
: 
"k"
5
:  
"e"
6
: 
"t"
length
: 
7
[[Prototype]]
: 
String
anchor
: 
ƒ anchor()
at
: 
ƒ at()
big
: 
ƒ big()
blink
: 
ƒ blink()
bold
: 
ƒ bold()
charAt
: 
ƒ charAt()
charCodeAt
: 
ƒ charCodeAt()
codePointAt
: 
ƒ codePointAt()
concat
: 
ƒ concat()
constructor
: 
ƒ String()
endsWith
: 
ƒ endsWith()
fixed
: 
ƒ fixed()
fontcolor
: 
ƒ fontcolor()
fontsize
: 
ƒ fontsize()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
isWellFormed
: 
ƒ isWellFormed()
italics
: 
ƒ italics()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
link
: 
ƒ link()
localeCompare
: 
ƒ localeCompare()
match
: 
ƒ match()
matchAll
: 
ƒ matchAll()
normalize
: 
ƒ normalize()
padEnd
: 
ƒ padEnd()
padStart
: 
ƒ padStart()
repeat
: 
ƒ repeat()
replace
: 
ƒ replace()
replaceAll
: 
ƒ replaceAll()
search
: 
ƒ search()
slice
: 
ƒ slice()
small
: 
ƒ small()
split
: 
ƒ split()
startsWith
: 
ƒ startsWith()
strike
: 
ƒ strike()
sub
: 
ƒ sub()
substr
: 
ƒ substr()
substring
: 
ƒ substring()
sup
: 
ƒ sup()
toLocaleLowerCase
: 
ƒ toLocaleLowerCase()
toLocaleUpperCase
: 
ƒ toLocaleUpperCase()
toLowerCase
: 
ƒ toLowerCase()
toString
: 
ƒ toString()
toUpperCase
: 
ƒ toUpperCase()
toWellFormed
: 
ƒ toWellFormed()
trim
: 
ƒ trim()
trimEnd
: 
ƒ trimEnd()
trimLeft
: 
ƒ trimStart()
trimRight
: 
ƒ trimEnd()
trimStart
: 
ƒ trimStart()
valueOf
: 
ƒ valueOf()
Symbol(Symbol.iterator)
: 
ƒ [Symbol.iterator]()
[[Prototype]]
: 
Object
[[PrimitiveValue]]
: 
""
[[PrimitiveValue]]
: 
"Cricket"
*/
