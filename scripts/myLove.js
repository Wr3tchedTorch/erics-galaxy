
new Audio("../songs/myLove/Winnie The Pooh - from Disney's Winnie The Pooh Relaxing Piano Version.mp3").play();

const { years, months, days } = calculateTimePassed("2024-05-10");

document.getElementById("date-display").innerHTML = `Feliz ${days} dias ${years == "" ? `e ${months} meses` : `, ${months} meses e ${years} anos`} de namoro<span class="heart">💜</span>`;

function calculateTimePassed(pastDateString) {
    const pastDate = new Date(pastDateString);
    const currentDate = new Date();

    // Calculate the total difference in time (milliseconds)
    let years = currentDate.getFullYear() - pastDate.getFullYear();
    let months = currentDate.getMonth() - pastDate.getMonth();
    let days = currentDate.getDate() - pastDate.getDate();

    // Adjust months and years if necessary
    if (days < 0) {
        months--;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate(); // Days in the previous month
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}