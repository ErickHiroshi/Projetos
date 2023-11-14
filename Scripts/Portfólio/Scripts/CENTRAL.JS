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
    var p = this.document.p;

    if (body.classList.contains('azul') && p.classList.contains('azul')) {
        document.getElementById('IMGP').style.color = 'blue';
    } else if (body.classList.contains('amarelo') && p.classList.contains('amarelo')) {
        document.getElementById('IMGP').style.color = 'yellow';
    } else if (body.classList.contains('rosa') && p.classList.contains('rosa')) {
        document.getElementById('IMGP').style.color = 'pink';
    } else if (body.classList.contains('roxo') && p.classList.contains('roxo')) {
        document.getElementById('IMGP').style.color = 'purple';
    } else if (body.classList.contains('verde') && p.classList.contains('verde')) {
        document.getElementById('IMGP').style.color = 'green';
    } else if (body.classList.contains('cinza') && p.classList.contains('cinza')) {
        document.getElementById('IMGP').style.color = 'gray';
    } else if (body.classList.contains('vermleho') && p.classList.contains('vermelho')) {
        document.getElementById('IMGP').style.color = 'vermleho';
    }
});

function filterPortfolio() {
    var input, filter, portfolioItems, a, h3, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    portfolioItems = document.getElementsByClassName('portfolio-item');

    for (i = 0; i < portfolioItems.length; i++) {
        h3 = portfolioItems[i].getElementsByTagName('h3')[0];
        txtValue = h3.textContent || h3.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            portfolioItems[i].style.display = '';
        } else {
            portfolioItems[i].style.display = 'none';
        }
    }
}