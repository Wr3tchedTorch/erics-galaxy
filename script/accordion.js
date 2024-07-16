var acc = document.getElementsByClassName("accordion");
var l;

for (l = 0; l < acc.length; l++) {
  acc[l].addEventListener("click", function() {
    this.classList.toggle("active");    
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      this.querySelector(".down-arrow").classList.remove("hidden");
      this.querySelector(".up-arrow").classList.add("hidden");
      panel.style.maxHeight = null;
    } else {
      this.querySelector(".down-arrow").classList.add("hidden");
      this.querySelector(".up-arrow").classList.remove("hidden");
      console.log("showing");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}