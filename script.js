/*==========================================================
  Embassy of the Republic of Nicaragua
  Main JavaScript
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    // Fade-in animation for elements
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll(".card, .image-box").forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });

    // Smooth hover effect for cards
    document.querySelectorAll(".card").forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-6px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });

    });

});

/* ===================================================== */
/* FADE-IN ANIMATIONS */
/* ===================================================== */

.hidden{

    opacity:0;
    transform:translateY(30px);
    transition:opacity .8s ease, transform .8s ease;

}

.show{

    opacity:1;
    transform:translateY(0);

}

.card{

    transition:
        transform .35s ease,
        box-shadow .35s ease;

}

.image-box{

    transition:
        transform .35s ease,
        box-shadow .35s ease;

}

.image-box:hover{

    transform:translateY(-4px);

}