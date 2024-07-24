// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

// Update Children zIndex
let pageIndex = book.children.length;
for (const page of book.children) {
    page.style.zIndex = pageIndex;
    pageIndex--;
}

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = book.children.length;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
}

function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if (currentLocation >= maxLocation) return;
    if (currentLocation === 1) openBook();
    else if (currentLocation === maxLocation - 1) closeBook(false);

    const currentPaper = book.children[currentLocation - 1];
    if (!currentPaper) throw new Error("A unknown error occured");

    currentPaper.classList.add("flipped");
    currentPaper.style.zIndex = currentLocation;

    currentLocation++;
}

function goPrevPage() {
    if (currentLocation <= 1) return;
    if (currentLocation === 2) closeBook(true);
    else if (currentLocation === maxLocation) openBook();

    const currentPaper = book.children[currentLocation - 2];
    if (!currentPaper) throw new Error("A unknown error occured");

    currentPaper.classList.remove("flipped");
    currentPaper.style.zIndex = (maxLocation+1) - currentLocation;
    
    currentLocation--;
}