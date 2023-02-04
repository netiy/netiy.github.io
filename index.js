// --------------------------------------------------

const section1 = document.querySelector("#section1");

window.addEventListener("scroll", () => {
	let scrollY = window.scrollY;
	section1.style.marginTop = (scrollY) * -0.6 + "px";
});

// --------------------------------------------------

// --------------------------------------------------
