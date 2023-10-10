function toggleMenu() {
    let menuIcon = document.querySelector(".toggleMenu");
    console.log(menuIcon.innerHTML);
    if (menuIcon.innerHTML == "left_panel_close") {
        menuIcon.innerHTML = "left_panel_open";
        menuIcon.title = "Click to expand the menu panel"
    }
    else if (menuIcon.innerHTML == "left_panel_open") {
        menuIcon.innerHTML = "left_panel_close";
        menuIcon.title = "Click to collapse the menu panel"
    }
}
expandStyleGuides();