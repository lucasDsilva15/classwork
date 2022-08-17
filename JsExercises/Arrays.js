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

// EXERCISE 3 (ASK FOR HELP)
function isCharAVowel(vowels){
switch(vowels){
case "A": return true;
case "E": return true;
case "I": return true;
case "O": return true;
case "U": return true;
default : return false
}
}
console.log(isCharAVowel("A"))


//EXERCISE 4
// let numbers = [ 2, 3, 5]
// const sumArray = function(numbers){
//     let total = 0
//     for (let i = 0; i < numbers.length; i++){
// total += numbers[i]
// }
// return total;
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


// const longestStringInArray = function(stringArray) {
//  let size = 0
// for (let i = 0; i < stringArray.length; i++){
//   if (stringArray[i].length > size){
//     size = stringArray[i].length
//   } 
 
// }
// return size;
// }

// console.log(longestStringInArray(["hello", "my", "name", 'George', 'Fantastic']))

//EXERCISE 9

// function stringsLongerThan(arr, number){
//   output = []
//   for (let i = 0; i < arr.length; i++){
// if(arr[i].length > number){
// output.push(arr[i]);
// }
// }
// return output
// }
// console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3))

//BONUS EXERCISE

// function addlist(...numbers){
// let sum = 0
// for (let i = 0; i<numbers.length; i++){
//     sum += numbers[i];
// }
// return sum
// }

// console.log(addlist(1))
// console.log(addlist(4, 6, 60))

















