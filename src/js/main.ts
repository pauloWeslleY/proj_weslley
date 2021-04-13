// ! NOTE: Menujs Scripts
//
let openNav: any = document.querySelector("#threeline-icon")

openNav.onclick = () => {

   const navbar: any = document.querySelector("#navigation")
   let iconClose: any = document.querySelector("#threeline-icon")
   let iconOpen: any = document.querySelector("#threeline-icon")

	switch (navbar.className === "navigation") {

		case navbar:
			navbar.className += " menujs"
			iconClose.innerHTML = "&Cross;"
			break;

		case navbar:
			navbar.className = "navigation"
			iconOpen.innerHTML = "&#9776;"
			break;

	}

}