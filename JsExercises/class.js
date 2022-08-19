// Exercise 1

// class Cat {
//     constructor (age, breed, vaccination){
//     this.age = age
//     this.breed = breed
//     this.vaccination = vaccination
//     }
// meow(){
// console.log('Meow')
// }

// vaccinated(){
// if (this.vaccination === 'Yes'){
// console.log(this.breed + ' is vaccinated')
// } else {
//     console.log(this.breed + ' is not vaccinated')
// }
// }

// cute(){
//     console.log('This cat is cute')
// }

// }

// const maya = new Cat(3, 'Persian', 'Yes')
// const george = new Cat(2, 'Sphynx', 'No')

// console.log(maya)
// console.log(george)

// maya.meow()
// george.vaccinated()
// maya.cute()

// Exercise 2

// class Pirate {
//     constructor(name, age, scurvy, lemons) {
//         this.name = name
//         this.age = age
//         this.scurvy = scurvy
//         this.lemons = lemons
//     }
//     yoho(){
//         console.log(this.name + ': YO HO')
//     }
//     cureScurvy(){
//         if (this.scurvy === 'yes'){
//             if(this.lemons === 'yes'){

//                 console.log(this.name + ": Ah my scurvy is cured")
//             } else if (this.lemons === 'no') {
//                 console.log(this.name + ": Well guess im going to die soon matey")
//             }
//         } else {
//             console.log(this.name + ': I Still dont have scurvy yet')
//         }
//     } 
//     arrr(){
//         console.log(this.name + ': ARRRRRRRR')
//     }
// }

// const jollyRoger = [new Pirate('BlackBeard', 46, 'yes', 'yes'), new Pirate('Captain Hook', 204, 'no', 'yes'), new Pirate('Private poopdeck', 22, 'yes', 'no')]

// const blackPearl = [new Pirate('Captian josh', 26, 'yes', 'yes'), new Pirate('Private john', 28, 'no', 'no'), new Pirate('Private jacob', 32, 'yes', 'no')]

// for (let i = 0; i < jollyRoger.length; i++){
//     jollyRoger[i].yoho();
//     jollyRoger[i].cureScurvy();
//     jollyRoger[i].arrr(); 
// }

// console.log()

// for (let j = 0; j < blackPearl.length; j++){
//     blackPearl[j].yoho();
//     blackPearl[j].cureScurvy();
//     blackPearl[j].arrr();
// }
// Bonus Exercise

// class Car {
//     constructor(number) {
//         this.number = number
//     }
// }
// let num = 0

// const freighter = []

// while (num <= 100) {

//     freighter.push(new Car(num))

//     num ++
// }

// console.log(freighter)


// EXERCISE 3
// class Governer {

//         static party = 'independent';
//         static age = 42;
//         static reelected = true;


//    static vote() {
//         console.log('yae')
//     }
//     static veto() {
//         console.log('nay')
//     }
//     static fundraise(funds) {

//         funds += 10
//         console.log(funds)
//     }
// }


// Governer.vote()
// Governer.veto()
// Governer.fundraise(100)

// EXERCISE 4

// class Person {
//     constructor(name, age, status, income) {
//         this.name = name;
//         this.age = age;
//         this.status = status;
//         this.income = income;
//     }
//     retire() {
//         if (this.age < 65) {
//             console.log("I'm too young to retire")
//         } else {
//             console.log("I'm already retired")
//         }
//     }
//     shout() {
//         console.log('AAAAAAAAH')
//     }
//     Promotion(increase) {
//         increase = increase + this.income
//         console.log(this.name + ' is now making ' + increase)
//     }
// }

// const Person1 = new Person('Jacob', 25, 'Employed', 60000)
// const Person2 = new Person('Mary', 68, 'Retired', 180000)

// Person1.retire()
// console.log()
// Person2.retire()
// console.log()
// Person1.shout()
// console.log()
// Person1.Promotion(20000)
// console.log()

// // console.log(Person1)

// class PostalWorker extends Person {
//     constructor(name, age, status, income) {
//         super(name, age, status, income)
//     }
//     sendMail() {
//         console.log('Time to go send some mail')
//     }
//     goHome() {
//         console.log("5 o'clock time to clock out")
//     }
// }
// const mailMan = new PostalWorker('Bob', 47, 'employed', 70000)
// const mailWoman = new PostalWorker('Jenny', 28, 'employed', 65000)
// mailMan.sendMail()

// console.log()

// mailWoman.sendMail()

// console.log()

// mailMan.goHome()

// console.log()

// mailWoman.goHome()

// class Chef extends Person {
//     constructor(name, age, status, income, rating) {
//     super (name, age, status, income)
//     this.rating = rating
//     }
//     rateFood(quality){
//         if (quality.toLowerCase() === 'good' || quality.toLowerCase() === 'amazing'){
//             console.log(this.name +": This is the best food I've ever ate in my life")
//         } else {
//             console.log(this.name +": This food is terrible you donut")
//         }
//     }
//     cookFood(){
//         console.log("This will be the best dish anyone has ever eaten")
//     }
// }
// const chef1 = new Chef ('Gordon Ramsay', 55, 'Employed', 2000000, '5 Stars')
// const chef2 = new Chef ('John Cooking Guy', 48, 'Employed', 120000, '2 Stars')

// chef2.rateFood('Amazing')
// console.log()
// chef1.rateFood('terrible')
// console.log()
// chef1.cookFood()
// console.log()
// chef2.cookFood()

// Exercise 5
// class BankAccount {

//     constructor(accname, balance) {
//         this.accname = accname;
//         this.balance = balance;
//         this.acctNum = Math.floor(Math.random() * 1000);
//     }
//     deposit(money) {
//         this.balance += money
//         console.log('You deposited: $' + money + ' your new balance is: $' + this.balance)
//     }
//     withdraw(money) {
//         this.balance -= money
//         console.log('You withdrew: $' + money + ' your new balance is: $' + this.balance)
//     }
// }

// class CheckingAccount extends BankAccount {

//     constructor(accname, balance, overdraftEnabled = true) {
//         super(accname, balance, acctNum) // calls the constructor from the parent class (bank account)
//         this.overdraftEnabled = overdraftEnabled
//     }

//     withdraw(amount) {
//         if (amount > this.balance) {

//             if (this.overdraftEnabled) {

//                 let overdraftFee = 20
//                 this.balance -= (amount + overdraftFee)
//                 console.log('this transaction overdrafts your balance.')

//             } else {

//                 console.log('you cannot withdraw more then you have')
//             }
//         } else {

//             this.balance -= amount
//             console.log('You withdrew: $' + amount + ' your new balance is: $' + this.balance)
//         }
//     }
// }

// class SavingsAccount extends BankAccount {
//     withdraw() {
//         console.log('You can not withdraw from savings')
//     }
// }

// const lucas = new BankAccount('Lucas', 1000000)
// const lucasC = new CheckingAccount('Lucas', 1000000)
// const lucasS = new SavingsAccount('Lucas', 1000000)

