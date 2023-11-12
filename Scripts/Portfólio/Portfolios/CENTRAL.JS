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

document.addEventListener('DOMContentLoaded', function () {
    var body = document.body;
    if (body.classList.contains('azul')) {
        document.getElementById('IMGP').style.color = 'blue';
    } else if (body.classList.contains('amarelo')) {
        document.getElementById('IMGP').style.color = 'yellow';
    } else if (body.classList.contains('rosa')) {
        document.getElementById('IMGP').style.color = 'pink';
    } else if (body.classList.contains('roxo')) {
        document.getElementById('IMGP').style.color = 'purple';
    }
});