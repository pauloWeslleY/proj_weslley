// NOTE: Menujs Scripts
//
let openNav: any = document.getElementById("threeline-icon")

openNav.onclick = () => {

   const navbar: any = document.getElementById("navigation")
   let iconClose: any = document.getElementById("threeline-icon")
   let iconOpen: any = document.getElementById("threeline-icon")

	if (navbar.className === "navigation") {
		navbar.className += " menujs"
		iconClose.innerHTML = "&Cross;"
	} else {
		navbar.className = "navigation"
		iconOpen.innerHTML = "&#9776;"
	}

}