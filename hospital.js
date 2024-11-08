// Selecting elements
let slides = document.querySelectorAll(".patientReview");
let cards = document.querySelectorAll(".card");
let closeBtn = document.getElementById("closeBtn");
let connectBtn = document.getElementById("connectBtn");

// Carousel setup
let count = 0;
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

function moveSlides() {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${count * 100}%)`;
    });
}

setInterval(() => {
    count = (count + 1) % slides.length;
    moveSlides();
}, 2000);

// Show details on card click
cards.forEach((card) => {
    card.addEventListener("click", () => {
        document.querySelector(".detail").style.display = "block";
        document.querySelector(".content").innerHTML = `
            <img src=${card.firstElementChild.src} alt="">
            <div class="contentText">
                <h1></h1>
                <p>
                    1. Preparing for a complex heart transplant surgery scheduled for this afternoon.<br>
                    2. Conducting a routine check-up on a pregnant patient in her second trimester.
<br>
                    3. Analyzing patient data to identify patterns and improve treatment outcomes.

                </p>
            </div>
        `;
    });
});

// Close details pop-up
closeBtn.addEventListener("click", () => {
    document.querySelector(".detail").style.display = "none";
});

// Login check
connectBtn.addEventListener("click", () => {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    if (email === "" || pass === "") {
        alert("Enter Details");
    } else {
        alert("You Logged IN");
    }
});
