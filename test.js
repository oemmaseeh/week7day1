console.log('hello world')

console.log(1 + 10)

//  WRITING A COMMENT
/*multi 
line 
comment
*/

 //in js you need to DECLARE your variables
var myName = 'maseeh'
console.log(typeof myName)
myName = 'shoha'
console.log(myName)

// js HOISTING
var age = 10
console.log(age)  
var variable  //declaration
varaiable = 100 //definition

// .instead of VAR use LET or CONST
let myList = [1,2,3,4,5]
console.log(myList)
const nums = [10,9,8,7,6]
console.log(nums)
//constant variables cannot be redefined
const favoriteNumber = 10;
console.log(favoriteNumber * 10)
let favoriteColor = "blue"
console.log(favoriteColor)
//use const until you have to use let

// in js there is no destinction between integers in floats
const num1 = 10
const num2 = 3.14
console.log(num1,typeof num1)
console.log(num2,typeof num2)

//js does not care about indentation
const teacher1 = "shoha" ;const teacher2 = "brendan"; console.log(teacher1, teacher2)

//lists are known as arrays in js
const names = ['maseeh','maseeh',1,2,3,[10,10,10]]
console.log(names)
console.log(typeof names)
//checking if an object is an array

console.log(Array.isArray(names))

//dictionaries areknown as objects in js
const obj = {
    'first name': 'shoha',
    age: 1001,
    last_name: 'tshudia',
    'Content-Type' : "human"
};
console.log(obj)
console.log(obj['last_name']) //bracket notation
console.log(obj.last_name) //dot notation

obj['first name'] = "Brendan"
console.log(obj)

//undeclared / undefined / null
let car //car is no longer undeclared
console.log(car) // undefined
car = null
console.log(car)
let shoha = null
console.log(shoha)

// basic math operations
console.log('-----------')
console.log('MATH')
console.log('-----------')

//addition
let sum = 5 + 6;
console.log(sum)
sum += 10
console.log(sum);
sum ++;
console.log(sum);

//subtraction
let diff = 10 - 4
console.log(diff);
diff -= 2
console.log(diff)
diff --
console.log(diff)

//multiplication
let prod = 5*4
console.log(prod)
prod*=2
console.log(prod)

//division
let quo = 10/3
console.log(quo)
quo /=2
console.log(quo)

// exponential
let square = 5**2
console.log(square)
square**=2
console.log(square)

//more math
const floor = Math.floor(24.7)
console.log(floor)
const ceil = Math.ceil(24.7)
console.log(ceil)

const n1 =2
const n2 ="3"
const res = n1 + n2
console.log(res, typeof res)

console.log(parseInt('24.7'), typeof parseInt ('24.7'))
console.log(parseFloat('24.7'), typeof parseFloat ('24.7'))

// functions
console.log('-----------')
console.log('functions')
console.log('-----------')

// method 1: most similar to python
function nameOFFUNCTION(param1, param2){
    'line1'
    'line2'
    'line3'
    return  param1 + param2
}
console.log(nameOFFUNCTION(1,200 ))

//method 2 : nameless function but store in a variable
const newFunc = function (x,y){

    'line1';
    'line2';
    return x + y
}
console.log(newFunc(10,20))

//method 3:arrow function
 // syntax () => {}
const test = (a,b) => {
    const output = a + b
    return output
}
console.log(typeof test)
console.log(test(10,15))
//arrow function with one param
//parenthesis are not neccessary

const func1 = () => {
    console.log('running func1')
}
() => {}

//arrow funcion wiht one line in body
//curly braces and return keyword are not neccessary
const multiply = (num1, num2) => {return num1* num2}
console.log(multiply (5,4))

//simple arrow function with 1 param and 1 line
const addTwo = num => num + 2
console.log(addTwo(10))

/*/self invoking function
(()=>{
    console.log('i am running late');
})();
*/

//closure
const outer = () => {
    let counter = 0; // private variable

    const inner = () =>{
        console.log(counter);
        counter++;
    }
    return inner
}
const result = outer()

//control flow
// if statement
const ifTest = (num) => {
    if (num <10){
        console.log('small')
    }
    else if(num > 20){
        console.log('big')
    }
    else {
        console.log('medium')
    }
};
ifTest(5)
ifTest(10)
ifTest(21)

//ternary operator 
//syntax: condition ? (what happens if true) : (what happens if false)
const getFee = isMember => {
    return isMember ? "2$" : "10$"
}
console.log(getFee(true))
console.log(getFee(false))

// #loop
//for loops

const myNames = ["maseeh", "brendan", "donte", "shoha"]
//syntax for (let variable; condition; incrementor) {codeblock}
for(let i = 0; i < myNames.length; i++) {
    console.log(i, myNames[i])
}

// ES6
//for - of loop when looping through a array
for (let name of myNames){
    console.log(name)
}

//for - in loop when looping through a object
const people = {
    'shoha' : 9000,
    'brendan': 9001,
    "aften" : 9002
}
for (let person in people){
    console.log(person)
}

//while loop
//wjile (condition) {codeblocl}
let i = 0;
while(i <10){
    if (i ==4){
        i++
        continue
    }
    else if  (i ==8){
        break
    }
    console.log(i)
    i++
}

//do while
//codeblock wull run atleast 1 time
i = 90
do {
    console.log("HI")
    i++
}
while (i< 10)

// array methods 
const my_people = ['maseeh', 'brendan']
my_people.push('sam')
console.log(my_people)
console.log(my_people[1])
console.log(my_people.toString())
console.log(my_people.length)
console.log(my_people.join('##'))

//splice
console.log(my_people.splice(1))

