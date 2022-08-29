// var menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '/catalog'},
//     {text: 'orders', href: '/orders'},
//     {text: 'account', href: '/account'},
//   ];

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
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

//4.0
let subMenuEl = document.querySelector("#sub-menu")

//4.1
subMenuEl.style.height = "100%"

//4.2
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"

//4.3
subMenuEl.classList.add("flex-around")

//4.4
subMenuEl.style.position = "absolute"

//4.5
subMenuEl.style.top = "0"

//5.1
let topMenuLinks = topMenuEl.querySelectorAll('a')

let showingSubMenu = false
// console.log(topMenuLinks)

//5.2
function callBack(e){
    e.preventDefault()
    if (e.target.tagName !== 'A' /*should usually be in caps*/ ){
        return ;
    } else {
        console.log(e.target)
    }  //everything up to here works
    //5.3
      if (e.target.classList.contains("active")){
        e.target.classList.remove("active")
        showingSubMenu = false
        subMenuEl.style.top = "0"
        return;
      }
      //5.4
    for (let i = 0; i < topMenuLinks.length; i++){
      topMenuLinks[i].classList.remove("active")
    }
    //5.5
    e.target.classList.add("active")
    //5.6
    const name = e.target.textContent;
    const menuLink = menuLinks.find((link) => {
      return link.text === name; 
    });
    if (menuLink === undefined){
      return;
    }
    if (menuLink.subLinks){
      showingSubMenu = true
    
    } else {
      showingSubMenu = false
    }
    
    //5.7 & 5.8
       let buildSubMenu = (subLinks) => {
           subMenuEl.innerHTML = "";
        for (let i = 0; i < subLinks.length; i++) {
          let link = document.createElement('a');
          link.href = subLinks[i].href
          link.textContent = subLinks[i].text
          subMenuEl.appendChild(link) 
        }
      }

      if (showingSubMenu) {
        buildSubMenu(menuLink.subLinks);
        subMenuEl.style.top = '100%'
      } else {
        subMenuEl.style.top = '0%'
      }

      //6.4
      if (name === 'about'){
        mainEl.innerHTML = `<h1> ABOUT </h1>`
      }
}
//6.0
function callBack2(evt){
  evt.preventDefault()
  if (evt.target.tagName !== 'A'){
    return ;
} else {
  console.log(evt.target)
  }
  //6.1
  showingSubMenu = false;
  subMenuEl.style.top = "0"

  //6.2
  for (let i = 0; i < topMenuLinks.length; i++){
    topMenuLinks[i].classList.remove("active") 
  }
  //6.3
mainEl.innerHTML = `<h1>${evt.target.textContent.toUpperCase()}</h1>` 
}

  
topMenuEl.addEventListener('click', callBack)

subMenuEl.addEventListener('click', callBack2)
