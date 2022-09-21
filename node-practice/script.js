const random = require('./utilities/random');
for (let i = 0; i < 10; i++) {
    console.log( random(100, 200) );
}
let circle = require('./utilities/circle')
console.log()
console.log(circle.area(50))
console.log(circle.circumfrence(75))