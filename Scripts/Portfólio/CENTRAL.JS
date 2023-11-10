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