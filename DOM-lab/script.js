var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

  //1.0
let mainEl = document.querySelector("main")

//1.1
mainEl.style.backgroundColor = "var(--main-bg)"
console.log(mainEl)

//1.2
let tag = document.createElement("h1")
let text = document.createTextNode("SEI ROCKS!")
tag.appendChild(text)
mainEl.appendChild(tag)

//or
//mainEl.innerHTML = "<h1>SEI Rocks!</h1>"

//1.3
mainEl.classList.add("flex-ctr")


//2.0
let topMenuEl = document.querySelector("#top-menu")

//2.1
topMenuEl.style.height = "100%"

//2.2
topMenuEl.style.backgroundColor ="var(--top-menu-bg)"

//2.3
topMenuEl.classList.add("flex-around")

//3.1
for (let i = 0; i < menuLinks.length; i++) {
  let link = document.createElement('a');
  link.href = menuLinks[i].href
  link.innerText = menuLinks[i].text
  topMenuEl.appendChild(link)  
}
