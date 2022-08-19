// SECTION 1 VARIABLES AND DATA TYPES

//A. Q + A

//1. An assignment opperator ( Let,const,var = (your variable) )

//2. we can change variables in multiple ways using conditionals, arithmetic operators, and methods or simply writing a new variable 

//3. we can assign it similarly how we used assignment operators ex: (let newVar = oldVar)

//4. declare = to make the computer aware of a new variable being assigned 
//   assign = to give the variable a key word to call upon that variable later
//   define = define the data type that is being coded (function,object,variable etc)

//5. psuedocoding is processing the logic the computer needs to reach an end goal without actually coding. We use this to give us
// a blueprint of what needs to coded to reach our goal

//6. I believe its different for every problem, simple problems should be quick and can be done in your head, vs longer problems need
// more time to be planned out and define steps for each part of a problem


//B. Strings


//1.
// let firstVariable 

//2. 
// let firstVariable = 'Hello World'

//3.
// let firstVariable = 3

//4. 
// let secondVariable(3) = firstVariable(3)

//5. 
// let secondVariable = "Any String"

//6.
//let second variable(any string) = first Variable ()
// the value of first variable is  3  since firstVariable is = SecondVariable

//7.
// let yourName = "Lucas"
// let message = 'Hello, my name is ' + yourName


// C. BOOLEANS


//1. <
//2. >
//3. ==
//4. ||
//5. && x 4 || (at the end)
//6. ==
//7. ===
//8. < , && or + , ===
//9. * , ===
//10. ==


//D The farm


//1. animal = "cow"

//2. if (animal === "cow"){
//    console.log("mooooo")
//}

//3. 

// let animal = "chicken"
// if (animal === "cow"){
//     console.log("mooooo")
// } else {
//     console.log("Hey! your not a cow")
// }

//4. pushed


// Review E


//1.
// let age = 15

//2.
// if (age >= 16){
//     console.log("Here are the keys")
// } else if (age < 16){
//     console.log("sorry your too young")
// }



// SECTION 2 LOOPS

// A The Basics


//1. 
// for (let i = 0; i <= 10; i++){
//     console.log(i)
// }

//2. 
// for (let i = 10; i <= 400; i++){
//     console.log(i);
// }

//3. 
// for (let i = 12; i <= 4000; i+=3){
//     console.log(i)
// }


//B. Get Even


// 1. 
// for (let i = 1; i <= 100; i++){
//         console.log(i);
//}

//2.
// for (let i = 1; i <= 100; i++){
//      if (i %2 == 0){
//     console.log(i + "<-- this number is even");
// } else {
//     console.log(i)
// }
// }


//C. Give me Five


//1
// for (let i = 0; i <= 100; i++){
//      if (i %5 == 0){
//     console.log(" I found a " + i + " High five");
// } 
// }

//2
// for (let i = 0; i <= 100; i++){
//     if (i %5 == 0 && i %3 == 0){
//    console.log(" I found a " + i + " High five!");
//    console.log("I found a " + i + " Three is a crowd")
// } else if (i %3 == 0){
//    console.log("I found a " + i + " Three is a crowd")
// }
// }


//D. Savings Account


//1.
// let sum = 0
// for (i = 1; i <= 10; i++){
//     sum += i
// }
// console.log(sum)

//2.
// let sum = 0
// for (i = 1; i <= 100; i++){
//     sum += i
    
// }
// console.log(sum*2)


//SECTION 3 ARRAYS AND CONTROL FLOW

//A. Talk about it


// 1. Elements

// 2. Yes each item is assigned an index number that ORDERS the elements

// 3. 


//B. Easy Does It


//1. 
//let quotes = ["I love coding -Lucas", "Jade, Rixio, and Teo are the best teachers -Lucas", "Teo has the best backgrounds -Lucas"]


//C. Accessing elements


//1. 
//randomThings[0]

//2.
// randomThings[2] = "world"

//3.
// console.log(randomThings[2])


//D. Change Values


// 1. ourClass[2]

//2. ourClass[4] = "Octocat"

//3. ourClass.push("Cloud city")


//E. Mix it Up
const myArray = [5, 10, 500, 20]
//1.
// myArray.push("Aegon", "Cheese")

//2.
// myArray.shift()

//3.
// myArray.unshift("Bob Marley")

//4.
// myArray.splice(4, 1)

//5.
// myArray.reverse()
// Yes we mutated the area in every step by adding new elements or changing positions of elements. Mutating means to change the 
// original positions of a desired array that has been delcared. the reverse method will not return anything until it is 
// printed in the terminal using console.log() however the array is already mutated once the code is typed even if we dont see it.


//F.Biggie Smalls


//1. & 2.
// let Biggie = 4
//     if (Biggie < 100){
//         console.log("Little Number")
//     } else {
//         console.log("Big Number")
//     }


//G. Monkey in the Middle

//1. & 2. & 3.
// let num = 7
//     if (num < 5){
//         console.log('Little Number')
//     } else if (num > 10){
//         console.log('Big Number')
//     } else {
//         console.log('Monkey')
//     }






