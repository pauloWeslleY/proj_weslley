/* HACK: Script Menujs */

let openNav = document.getElementById("threeline-icon");

openNav.onclick = () => {

	const navbar = document.getElementById("navigation");
	const iconClose = document.getElementById("threeline-icon");
	const iconOpen = document.getElementById("threeline-icon");

	if (navbar.className === "navigation") {
		navbar.className += " menujs";
		iconClose.innerHTML = "&Cross;";
	} else {
		navbar.className = "navigation";
		iconOpen.innerHTML = "&#9776;";
	}

}