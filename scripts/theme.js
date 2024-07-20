const setTheme = (newTheme) => {
    // Update body class
    const oppositeTheme = newTheme === "light" ? "dark" : "light";
    document.body.classList.add(`${newTheme}-theme`);
    document.body.classList.remove(`${oppositeTheme}-theme`);
    
    // Update button icon
    const themeGif = newTheme === "light" ? "sun" : "moon";
    toggler.querySelector("img").src = `./images/spinning ${themeGif}.gif`;

    // Save theme in local storage
    window.localStorage.setItem("theme", newTheme);
}

let headerUl = document.getElementById("header").querySelector("ul");
headerUl.innerHTML += '<li class="theme-toggle"><img src="" alt="" srcset=""></li>';
let toggler = headerUl.querySelector("li.theme-toggle");

let currentTheme = "dark";

const localTheme = window.localStorage.getItem("theme")
if (localTheme !== null) {
    currentTheme = localTheme;
    setTheme(localTheme);
}
else {
    setTheme(currentTheme);
}

toggler.addEventListener("click", () => {
    const toggledTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(toggledTheme);
})