let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
    
    // Do all of your work inside the document.addEventListener  

    // Part 1
  let hi = document.querySelector('#main-title')
  hi.textContent = "Family"
  
    // Part 2
let body = document.querySelector('body')
body.style.backgroundColor = 'orange'
   
  
    // Part 3
let myList = document.querySelector('#favorite-things')
let last = myList.querySelector('li:last-child')
myList.removeChild(last)

    // Part 4
let specialList = document.querySelectorAll('.special-title')
let i = 0
specialList.forEach((element) => element.style.fontSize = '2rem')
    
    // Part 5
let raceList = document.querySelector('#past-races')
let items= raceList.querySelectorAll('li')
raceList.removeChild(items[3])
  
    // Part 6
let newItem = document.createElement('li')
newItem.textContent = "New York"
raceList.appendChild(newItem)

  
  
    // Part 7

let main = document.querySelector('.main')
let blog = document.createElement('div')
let header = document.createElement('h1')
let para = document.createElement('p')
header.textContent = "New York"
para.textContent = "BIG APPLE ISN'T BIG ENOUGH FOR MY FAMILY!"
blog.classList.add("blog-post", 'purple')
blog.appendChild(header)
blog.appendChild(para)
main.appendChild(blog)

    // Part 8
let button = document.querySelector("#quote-title")
button.addEventListener('click', randomQuote)
  
  
    // Part 9
let divs = main.querySelectorAll('.blog-post')

for (let i of divs){
i.addEventListener('mouseenter', () => {
     i.classList.toggle('red')
})
i.addEventListener('mouseout', () => {
     i.classList.toggle('red')
})
}
console.log(main)




}
  
  
  
  );