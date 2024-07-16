console.log("loading toggler");

let currentTheme = "moon";
let headerUl = document.getElementById("header").querySelector("ul");
headerUl.innerHTML += '<li class="theme-toggle"><img src="./images/spinning moon.gif" alt="" srcset=""></li>';

let toggler = headerUl.querySelector("li.theme-toggle");
toggler.addEventListener("click", () => {
    updateTheme();
    toggler.querySelector("img").src = `./images/spinning ${currentTheme}.gif`;    
})

const updateTheme = () => {
    if (currentTheme === "sun") {
        currentTheme = "moon";
        document.body.classList.remove("light-theme");
        return document.body.classList.add("dark-theme");
    }
    currentTheme = "sun";
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
}