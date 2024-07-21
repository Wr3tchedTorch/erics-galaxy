import languages from "./languageData.js";

const getCurrentPage = () => {
    let location = window.location.pathname.replace("/", "").replace(".html", "");
    if (location === "index" || location === "") return "home";
    return location;
}

// * Updating page text

const updatePage = (language) => {
    const current_page = getCurrentPage();

    // Getting page content
    const page_content = languages[language][current_page];

    // Getting keys and values for the page
    let queue_key = Object.keys(page_content);
    queue_key = queue_key.map(name => ({ name, parent: current_page }));

    let queue_content = Object.values(page_content);

    // Looping through values
    while (queue_key.length > 0) {
        const current = queue_key.pop();
        const current_content = queue_content.pop();

        // Updating HTML text
        if (typeof (current_content) === "string") {
            const id = current.parent + "-" + current.name;
            document.getElementById(id).innerHTML = current_content;
            continue;
        }

        queue_key = queue_key.concat(Object.keys(current_content).map(name => ({ name, parent: `${current.parent}-${current.name}` })));
        queue_content = queue_content.concat(Object.values(current_content));
    }
}

// * Flags HTML element
const ptFlag = document.getElementById("pt-flag");
const enFlag = document.getElementById("en-flag");

// * Updating Flag Icon
const updateFlagIcon = (language) => {
    console.log(language);
    switch (language) {
        case "en":
            enFlag.classList.remove("hidden");
            ptFlag.classList.add("hidden");
            break;
        case "pt":
            ptFlag.classList.remove("hidden");
            enFlag.classList.add("hidden");
            break;
        default:
            console.log("===========================");
            console.log("!!! ERROR: error on script language.js !!!");
            break;
    }
}

// * Getting language stored in browser
const getLocalLanguage = () => {
    const language = window.localStorage.getItem("language");
    if (language === null) return updatePage("en");

    updatePage(language);
    updateFlagIcon(language);
}
getLocalLanguage();

// * Language event listener
const setLanguage = (newLanguage) => {
    updatePage(newLanguage);
    updateFlagIcon(newLanguage);
    window.localStorage.setItem("language", newLanguage);
}
enFlag.addEventListener("click", () => setLanguage("pt"));
ptFlag.addEventListener("click", () => setLanguage("en"));