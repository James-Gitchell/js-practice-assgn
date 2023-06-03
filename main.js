const firstName = "James"
const lastName = "Ahmad"
let age = 35;
let youngerMe = (age - 10)

console.log(firstName)
console.log(lastName)   
console.log(age)
console.log("Hi, my name is " + firstName + " " + lastName + "." + " I am " + age + " years old.")
console.log(youngerMe)

const me = {
    firstName: "James",
    lastName: "Ahmad",
    age: 35,
    youngerMe: (age - 10)
}
console.log("Hi, my name is " + me.firstName + " " + me.lastName + "." + " I am " + me.age + " years old.")

const meArr = ["James", "Ahmad", 35]

console.log("Hi, my name is " + meArr[0] + " " + meArr[1] + "." + " I am " + meArr[2] + " years old.")
console.log(meArr[2]-10)