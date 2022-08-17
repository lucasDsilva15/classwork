//Execrise 1

// const FizzBuzz = function(num1, num2){
//     while (num1 <= num2){
//         if ( num1 %3 === 0 && num1 %5 === 0){
//      console.log (num1 + " FizzBuzz")
//     } else if (num1 %3 === 0) {
//      console.log(num1 + " Fizz") ;
//     } else if (num1 %5 === 0){
//      console.log(num1 + ' Buzz') ;
//     } else {
//         console.log(num1)
//     }
//     num1++
//     }
// }
// console.log(FizzBuzz(1, 200))

// //Exercise 2
// const change = function(paid, amount){
// let quarters = 0
// while (paid > amount){
//      quarters += 1
//     paid -= .25
// }
// return quarters*4
// }

// console.log(change(10, 4))

for(let i=0;i<100;)
console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)
