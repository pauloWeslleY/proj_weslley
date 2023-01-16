"use strict";
// ! NOTE: Menujs Scripts

let openNav = document.querySelector("#threeline-icon");
openNav.onclick = () => {
    const navbar = document.querySelector("#navigation");
    let iconClose = document.querySelector("#threeline-icon");
    let iconOpen = document.querySelector("#threeline-icon");
    switch (navbar.className === "navigation") {
        case navbar:
            navbar.className += " menujs";
            iconClose.innerHTML = "&Cross;";
            break;
        case navbar:
            navbar.className = "navigation";
            iconOpen.innerHTML = "&#9776;";
            break;
    }
};
