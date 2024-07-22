const setTheme = (newTheme) => {
    // Update body class
    const oppositeTheme = newTheme === "light" ? "dark" : "light";
    document.body.classList.add(`${newTheme}-theme`);
    document.body.classList.remove(`${oppositeTheme}-theme`);

    //* Save theme in local storage
    window.localStorage.setItem("theme", newTheme);
    
    // Update button icon
    if (!toggler) return;
    const themeGif = newTheme === "light" ? "sun" : "moon";
    toggler.querySelector("img").src = `./images/spinning ${themeGif}.gif`;

}

// Default theme is set to dark
let currentTheme = "dark";
const getLocalTheme = () => {
    const localTheme = window.localStorage.getItem("theme")
    if (localTheme === null) return setTheme(currentTheme);

    currentTheme = localTheme;
    setTheme(localTheme);
}

let toggler = document.getElementById("theme-toggle");
getLocalTheme();

if (toggler) {
    toggler.addEventListener("click", () => {
        currentTheme = currentTheme === "light" ? "dark" : "light";
        setTheme(currentTheme);
    })
}