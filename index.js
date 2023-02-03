
// --------------------------------------------------

const header = document.querySelector("#header")
const section1 = document.querySelector("#section1 div")


window.addEventListener("scroll", () => {
	let scrollY = window.scrollY
	header.style.marginTop = (scrollY * -0.6) + "px"
	section1.style.marginTop = (scrollY * -0.6) + "px"
})

// --------------------------------------------------

const menuBtn = document.querySelector("#menu-btn")
const hamburgerDiv = document.querySelector("#hamburger-div")

menuBtn.addEventListener("clicked", () => {
	
})

// --------------------------------------------------