document.addEventListener('DOMContentLoaded', function () {
    var body = document.body;
    var paragraphs = document.querySelectorAll('p.Idade');

    var colorMap = {
        'azul': 'blue',
        'amarelo':'yellow',
        'rosa': 'pink',
        'roxo': 'purple',
        'verde': 'green',
        'cinza': 'gray',
        'vermleho':'red'
    };

    paragraphs.forEach(paragraph => {
        for (var color in colorMap) {
            if (body.classList.contains(color) && paragraph.classList.contains(color)) {
                document.getElementById('IMGP').style.color = colorMap[color];
                break;
            }
        }
    });

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

    bubbleSort();
    filterAndShowItems();

});

function bubbleSort() {
    let items = document.querySelectorAll('.portfolio-item');
    let len = items.length;
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < len - 1; i++) {
            let currentName = items[i].querySelector('h3').innerText;
            let nextName = items[i + 1].querySelector('h3').innerText;

            if (currentName.toLowerCase() > nextName.toLowerCase()) {
                let temp = items[i].innerHTML;
                items[i].innerHTML = items[i + 1].innerHTML;
                items[i + 1].innerHTML = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

function filterAndShowItems() {
    filterPortfolio();
    showItems();
}

function filterPortfolio() {
    var input = document.getElementById('searchInput');
    var filter = input.value.toUpperCase();
    var portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        var h3 = item.querySelector('h3');
        var txtValue = h3.textContent || h3.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function showItems() {
    let items = document.querySelectorAll('.portfolio-item');
    items.forEach(item => {
        item.style.display = 'flex';
    });
}
