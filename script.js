//
let menubtn = document.querySelector(".menu-btn")
let closebtn=document.querySelector(".close-btn")
let navlinks = document.querySelector(".nav-links")

menubtn.addEventListener("click", () => {
    navlinks.classList.add("active")
})

closebtn.addEventListener("click", () => {
    navlinks.classList.remove("active")
})

//header

let header=document.querySelector(".header")
window.addEventListener("scroll",()=>{
    if(window.scrollY>200){
    header.classList.add("active")
    }

    else{
        header.classList.remove("active")
    }
})