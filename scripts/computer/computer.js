const input = document.getElementById("key-input");

let inputIsInFocus = false;

let backgroundMusic = new Audio("../songs/computer/Lucy In Disguise - Southbound.mp3");
backgroundMusic.volume = 0.15;
backgroundMusic.loop = true;
backgroundMusic.play();

input.addEventListener("focus", () => inputIsInFocus = true);
input.addEventListener("blur", () => inputIsInFocus = false);

document.body.addEventListener("keydown", (e) => {
    if (inputIsInFocus) {
        const typeSound = new Audio("../songs/computer/spacebar-click-keyboard-199448_grx1cy7L.mp3");
        typeSound.volume = Math.random() * 0.4 + 0.4;
        typeSound.playbackRate = Math.random() * 0.5 + 2;
        typeSound.play();
    }
    if (e.key === "Enter") LoadInput(e);
});

const LoadInput = (e) => {
    console.log(input.value);
    executeKey(input.value.toLowerCase());
    input.value = "";
}

const openLink = (url) => {
    window.open(url, '_blank').focus();
}

const dictionary = {
    "goback": "./index.html",
    "dani": "./myLove.html",
    "eric": "https://pt.wikipedia.org/wiki/Ericales",
    "wish": "https://www.ncbionetwork.org/iet/microscope/",
    "inspiration": "https://pt.wikipedia.org/wiki/Arquimedes",
    "music": "https://www.google.com/search?client=opera-gx&q=djavan+oceano&sourceid=opera&ie=UTF-8&oe=UTF-8",
    "animal": "https://en.wikipedia.org/wiki/Owl",
    "justashow": "https://en.wikipedia.org/wiki/Regular_Show",
    "pointer": "https://pointerpointer.com/",
    "thisman": "https://www.thisman.org/",
    "objective": "https://www.ncbionetwork.org/iet/microscope/",
    "01110011 01101001 01101110 01100111 01110101 01101100 01100001 01110010 01101001 01110100 01111001": "https://pt.wikipedia.org/wiki/Singularidade_tecnol%C3%B3gica",
    "hello": "alert",
    "f̶̨̛̼͖̤͈̗̗͇̃̊̑͑͌̽́͘͝ę̴̢̡̛̠̱̰̰̞̦̫̥̦͇̳͊̇̄̾̈́̔͊̏͜͠a̶̢̢̫̜̺̫̾̀͋͗͌̃͘͜ŗ̵̝̱͔̯͖̻̠́": "https://en.wikipedia.org/wiki/Uncanny_valley",

    "ț̶̬̞̯̤̹͓͔̒ͤ̍̂̇̉ͮ́͗̂̍ͯ̕̕̕͜͢͟͝ͅť̶̢̙̪͎̳̬̇͢h̵̷̴̨̨̛͔͇͕̟̝̖̫̭͍̱̣͚͙̣ͥ̓̇͒ͥ́͆̿͒͋͆̀̍̕ͅi̘̪͍̼̋̑̃ͭ̐͘n̵̬̤͚̍ͮ̈̎ͥ͊̽̑̇̂̕͜͡͞͡g̶̨̨͖͈̻̹̬̩͈̼ͧ̀̍ͪ̅̾̉͡͠ͅ": "https://preview.redd.it/6ty6s2yp1rj61.jpg?auto=webp&s=e4cfbb97198aed7b8dacf1ceadf557f38cc337ec",

    "?𝖌⃤ 𝖔⃤ 𝖉⃤ ?": "https://www.youtube.com/watch?v=BI9fKfX5V68",
    "ʅʅnɟǝɹɐɔǝq": "https://www.youtube.com/@NickCrowley/videos",
};

for (let item of Object.keys(dictionary)) {

    document.getElementById("dictionary-list").innerHTML += `<li>${item}</li>`;
}

const executeKey = (key) => {
    if (dictionary[key] == undefined) {
        return alert("Key not found!");
    }

    switch (key) {
        case "hello":
            alert("Hello!");
            return;
    }

    openLink(dictionary[key]);
}

const setZoom = () => {
    if (window.matchMedia('(max-width: 600px)').matches) {
        document.body.style.zoom = "30%";
    }
    else if (window.matchMedia('(max-width: 900px)').matches) {
        document.body.style.zoom = "50%";
    }
    else if (window.matchMedia('(max-width: 1500px)').matches) {
        document.body.style.zoom = "80%";
    }
}

setZoom();