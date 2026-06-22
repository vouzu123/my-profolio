function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow =
            "0 0 20px #00d4ff";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "none";
    });
});