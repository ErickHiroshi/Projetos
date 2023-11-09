document.addEventListener("scroll", function () {
    let scrolled = window.pageYOffset;
    let background = document.querySelector(".background");
    background.style.backgroundPositionY = -scrolled * 0.5 + "px";
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const href = this.getAttribute("href");
            const offsetTop = document.querySelector(href).offsetTop;
            
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        });
    });
});