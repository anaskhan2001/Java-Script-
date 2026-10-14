// Dates

let myDates = new Date()
console.log(myDates.toString());
console.log(myDates.toDateString());
console.log(myDates.toISOString());
console.log(myDates.toJSON());
console.log(myDates.toLocaleDateString());
console.log(myDates.toTimeString());
console.log(typeof myDates);

//My Created Dates
// months are strats from 0

// let myCreatedDate = new Date (2023, 1, 22)
// let myCreatedDate = new Date (2023, 1, 22, 7, 10) //(yera, month, date, hours, minutes)

let myCreatedDate = new Date("02-01-2001")

// console.log(myCreatedDate.toDateString())

console.log(myCreatedDate.toLocaleString())

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());

newDate.toLocaleString('default', {
    weekday: "long"
})
