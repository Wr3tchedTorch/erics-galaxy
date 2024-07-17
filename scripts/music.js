document.getElementById("audio").volume=0.35

const stopMusic = () => {
    document.getElementById("audio").pause();
}

const resumeMusic = () => {
    document.getElementById("audio").play()
}