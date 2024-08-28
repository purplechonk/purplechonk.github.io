let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Rolling confessions
let confessionIndex = 0;
startConfessionRoll();

function startConfessionRoll() {
    let confessions = document.getElementsByClassName("confession-card");
    for (let i = 0; i < confessions.length; i++) {
        confessions[i].style.display = "none";  
    }
    confessionIndex++;
    if (confessionIndex > confessions.length) {confessionIndex = 1}
    confessions[confessionIndex-1].style.display = "block";
    setTimeout(startConfessionRoll, 3000); // Change confession every 3 seconds
}

// Submitting new confessions
function submitConfession() {
    let confessionText = document.getElementById("confessionText").value;
    if (confessionText.trim() !== "") {
        let confessionList = document.getElementById("confessionList");

        let newConfession = document.createElement("div");
        newConfession.className = "confession-card";
        newConfession.textContent = `"${confessionText}"`;

        confessionList.appendChild(newConfession);
        document.getElementById("confessionText").value = "";

        // Reset the rolling effect to include the new confession
        confessionIndex = confessionList.children.length - 1;
        startConfessionRoll();
    }
}