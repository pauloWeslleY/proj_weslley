/* HACK: Script Menujs */

let openNav = document.getElementById("threeline-icon");

openNav.onclick = () => {

	const navbar = document.getElementById("navigation");

	if (navbar.className === "navigation") {
		navbar.className += " menujs";
		document.getElementById("threeline-icon").innerHTML = "&Cross;";
	} else {
		navbar.className = "navigation";
		document.getElementById("threeline-icon").innerHTML = "&#9776;";
	}

}