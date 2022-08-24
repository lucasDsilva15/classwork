// alert('pop') make sure our files are connected

// console.log(document) //wont work on vs code console has to check the browser console
// console.log(document.getElementById("title")) checking the title tag in html

//all these elements in the browswer are stored in an object
//better to store in a variable to easily refer too
//it has a bunch of properties we can access
// with dot notation

let h1Tag = document.getElementById("title") 


//better version of get element by id, still useful but this one is more flexible
//lets say you had multiple p tags, you would be selecting the first one with this method
//for selecting id's you want to put hashtags and for class's you want to use periods
// let ptag = document.querySelector("p")


// console.log(h1Tag)
// console.log(ptag)
// console.log(h1Tag.innerText)

let pel = document.querySelector(".cool")

let ptag = document.querySelector(".p-tag")

console.log(ptag.innerHTML)//shows inner html tags created in the web page // can manipulate changs to text with markup (html tags)
console.log(ptag.textContent) //shows the text in the html tag //text content can also change the content in the text ptag.textContent = x
console.log(ptag.innerText) // same as above 
//dir is another version of log
console.dir(ptag)

//were able to change the style sheet in our js as well (can be used with conditionals to change the website)
h1Tag.style.textAlign = 'center'
ptag.style.color = 'Blue'

//adding a link through js
let aLink = document.getElementById("a")
a.setAttribute("href", "https://www.google.com")
console.log(document)


/* 
    REVIEW

    there is a speical document keyword (represents the dom)

    we can use methods to select specific elements:
        -.getElementById
        -.querySelector
    access the text and innerHTML of an element with:
        -.textContent
        -.innerHTML

    The style property (object) can be used to make changes in css
        -.style
    
    It has a bunmch of properties that represnet CSS properties
        -color
        -backgroundcolor
        -textAlign
 */

        // using classList. to modify classes in JS
ptag.classList.add("my-second-class")
ptag.classList.remove("my-second-class")
ptag.classList.toggle("my-second-class")
ptag.classList.contains("my-second-class")
// ptag.classList.replace("my-second-class")


// Selecting multiple elements
let liTags = document.getElementsByTagName("li") //generates an array of classes and you can navigagte using normal array targeting
                                                    //methods 
let liTags2 = document.getElementsByClassName("comment") // same as bytagname but you are putting the name of the comment instead of the tag

console.log(liTags)

// Selecting multiple elements by whatever you like (most useful)
let liTags3 = document.querySelectorAll(".comment") 

console.log(liTags3)

//using four loops to ittierate over arrays 
for (let li of liTags3){
    console.log(li)
}

for (let i = 0; i < liTags3.length; i++){
    console.log(liTags3[i])
}
//not all array methods will work because they are not exactly arrays they are array like
liTags3.forEach((element) => console.log(element))


for (let li of liTags3){
    li.style.fontSize = "30px"
}