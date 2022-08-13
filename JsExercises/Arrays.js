//EXERCISE 1

// function maxOfTwonumbers(num1, num2){
//     if(num1 > num2 || num1 == num2){
//     return num1;
//     } else if(num1 < num2) {
//     return num2;
//     }
// }
// console.log(maxOfTwonumbers(300, 4 ))

// EXERCISE 2

// const maxOfThree = function(num1, num2, num3){
//     if (num1 > num2 && num1 > num3){
//     return num1;
//     } else if (num1 < num2 && num2 > num3){
//         return num2;
//     } else if (num1 < num2 && num2 < num3){
//         return num3;
//     } else {
//         return num1
//     }
// }
// console.log(maxOfThree( 2, 4, 2))

//EXERCISE 3 (ASK FOR HELP)
// let vowels = ["A", "E", "I", "O", "U"]
// function isCharAVowel(...vowels){
//     if (isCharAVowel = vowels){
//         return true;
//     }
//     else { 
//         return false;
//     }
// }
// console.log(isCharAVowel("e"))


//EXERCISE 4
// let numbers = [ 2, 3, 5]
// const sumArray = function(numbers){
//     let total = 0
//     for (let i = 0; i < numbers.length; i++){
// total += numbers[i]
// }
// console.log(total)
//     }
// console.log(sumArray(numbers))

//EXERCISE 5
// let numbers = [ 500, 8, 5]
// function multiplyArray(numbers){
//     let total = 1
//     for (i = 0; i < numbers.length; i++){
//     total *= numbers[i]
//     }
//     console.log(total)
// }
// console.log(multiplyArray(numbers))

//EXERCISE 6
// let numbers = [ 2, 4, 6, 7, 9, 10]
// const numArgs = function(numbers){
    
//     for(i = 0 ; i < numbers.length; i++){
       
//     }
//     console.log(i)
// }
//   console.log(numArgs(numbers))

  // During office hours ask why numbers are returning undefined

//EXERCISE 7
// function reverseString(str){
//    let newString = "";
//    for (i = str.length - 1 ; i >= 0; i--){
// newString += str[i]
       
//     }
//     return newString
// }
// console.log(reverseString("robot"))

//EXERCISE 8
strings = ["hello", "my", "name", "is", "George"]

const longestStringInArray = function(strings){
   let length = 0
   let longest;
   for (i = 0; i < strings.length; i++){ //incrementing i to check each value in the array
    if (strings[i].length > length){ //checking if the length of the current index value (0 would equal hello) is longer then length
    let length = strings[i].length; // if the if statement runs true change variable length to the length of the current string
    longest = strings[i] // declare longest to be the longest string value
     }
     }
    }
    
   
console.log(longestStringInArray(strings))















