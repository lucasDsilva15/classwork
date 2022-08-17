// let characterCount = function(str){
// let output = {}

// for (let i = 0; i < str.length; i++){  // cycles through each letter
   
//     let letter = [str[i]]  //ouput[str[i]] access each letter 

//     if (output[letter]){
    
//         output[letter]++;

//     } else {
//         output[letter] = 1;
//     }
// }
//     console.log(output)
//     return output
// }

// characterCount('hello')

//EXERCISE 2
let exactChange = function(paid, cost){
paid *= 100 // removes decimals
cost *= 100

let change = {
    hundreds: 0,
    fifties: 0, 
    twenties: 0,
    tens: 0,
    fives: 0,
    dollars: 0,
    quarters: 0,
    dimes: 0,
    nickles: 0,
    pennies: 0,
}

while (paid > cost){
   
if (paid>= cost+10000){
        paid -= 10000
        change.hundreds ++;
}
else if (paid>= cost+5000){
    paid -= 5000
    change.fifties ++;

} else if (paid>= cost+2000){
    paid -= 2000
    change.twenties++;

} else if (paid>= cost+1000){
    paid -= 1000
    change.tens ++;

} else if (paid>= cost+500){
    paid -= 500
    change.fives++;

} else if (paid>= cost+100){
    paid -= 100
    change.dollars ++;

}else if (paid>= cost+25){
    paid -= 25
    change.quarters ++;

}else if (paid>= cost+10){
    paid -= 10
    change.dimes ++;

}else if (paid>= cost+5){
    paid -= 5
    change.nickles ++;

}else if (paid>= cost+1){
    paid -= 1
    change.pennies ++;
}

    
}
console.log(change)
}

exactChange(21450, 12454.69)