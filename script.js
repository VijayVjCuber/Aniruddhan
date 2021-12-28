const theme = document.getElementById("nav-item-theme");
const dropdown = document.getElementById("dropdown");
const lightbutton = document.getElementById("light-selector");
const darkbutton = document.getElementById("dark-selector");
const lighttheme = document.getElementById("light");
const darktheme = document.getElementById("dark");
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
//For navigating to different sections
const welcomescreen = document.getElementById("welcome");
const projectscreen = document.getElementById("project-page");
const aboutscreen = document.getElementById("about-section");
const contactscreen = document.getElementById("contact");

const welcomenav = document.getElementById("welcome-nav");
const projectnav = document.getElementById("project-nav");
const contactnav = document.getElementById("contact-nav");

const body = document.body;

// Navigating the view
welcomenav.onclick = () => {
    welcomescreen.scrollIntoView();
}

projectnav.onclick = () => {
    projectscreen.scrollIntoView();
}

contactnav.onclick = () => {
    contactscreen.scrollIntoView();
}

// Theme dropdown
theme.onclick = () => {
    if(dropdown.style.visibility==="hidden"){
        dropdown.style.visibility="visible";
    }
    else{
        dropdown.style.visibility="hidden";
    }
}

// Theme
lighttheme.onclick = () => {
    lightbutton.style.backgroundColor="green";
    darkbutton.style.backgroundColor="white";
    body.classList.replace('dark','light');
}

darktheme.onclick = () => {
    darkbutton.style.backgroundColor="green";
    lightbutton.style.backgroundColor="white";
    body.classList.replace('light', 'dark');
}

//Hamburger
hamburger.onclick = () =>{
    // if(navbar.style.visibility==="hidden"){
    //     navbar.style.visibility="visible";
    // }
    // else{
    //     navbar.style.visibility="hidden";
    //     dropdown.style.visibility="hidden";
    // }
    if(navbar.classList.contains("navbar-hidden")){
        navbar.classList.remove("navbar-hidden");
        navbar.classList.add("navbar-visible");
    }
    else{
        navbar.classList.remove("navbar-visible");
        navbar.classList.add("navbar-hidden");
    }
    hamburger.classList.toggle("cross");
}