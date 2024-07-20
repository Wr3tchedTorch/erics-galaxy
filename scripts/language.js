import languages from "./languageData.js";

const getCurrentPage = () => {
    let location = window.location.pathname.replace("/", "").replace(".html", "");
    if (location === "index" || location === "") return "home";
    return location;
}

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

// Language dropdown event listener
const dropdown = document.getElementById("languageDropdown");
if (dropdown != null) {
    dropdown.addEventListener("change", (e) => {
        const language = e.target.value;
        updatePage(language);
        window.localStorage.setItem("language", language);
    })
}

// Getting language stored in browser
const getLocalLanguage = () => {
    const language = window.localStorage.getItem("language");
    if (language === null) return;

    updatePage(language);
}
getLocalLanguage();