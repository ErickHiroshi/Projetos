document.addEventListener('DOMContentLoaded', function () {
    var body = document.body;
    var paragraphs = document.querySelectorAll('p.Idade');

    var colorMap = {
        'azul': 'blue',
        'amarelo': 'yellow',
        'rosa': 'pink',
        'roxo': 'purple',
        'verde': 'green',
        'cinza': 'gray',
        'vermleho': 'red',
        'marrom': 'brown',
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
    smoothScrollToItem();
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
    smoothScrollToItem();
}


function showItems() {
    let items = document.querySelectorAll('.portfolio-item');
    items.forEach(item => {
        item.style.display = 'flex';
        smoothScrollToItem();
    });
}

function doScrolling(elementY, duration) {
    var startingY = window.pageYOffset;
    var diff = elementY - startingY;
    var start;

    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        var time = timestamp - start;
        var percent = Math.min(time / duration, 1);

        window.scrollTo(0, startingY + diff * percent);

        if (time < duration) {
            window.requestAnimationFrame(step);
        }
    })
}

function smoothScrollToItem() {
    const filter = document.getElementById('searchInput').value.toUpperCase();

    if (filter.trim() !== '') {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        const filteredItems = Array.from(portfolioItems).filter(item => {
            const h3 = item.querySelector('h3');
            const txtValue = h3.textContent || h3.innerText;
            return txtValue.toUpperCase().indexOf(filter) > -1;
        });


        if (filteredItems.length > 0) {
            const firstItem = filteredItems[0];
            const offsetTop = firstItem.getBoundingClientRect().top + window.pageYOffset - 50;
            const start = window.pageYOffset;
            const end = offsetTop;
            const distance = end - start;
            const duration = 650;

            let startTime = null;

            function scrollAnimation(currentTime) {
                if (startTime === null) { startTime = currentTime; }

                const timeElapsed = currentTime - startTime;
                const run = ease(timeElapsed, start, distance, duration);

                window.scrollTo(0, run);

                if (timeElapsed < duration) { requestAnimationFrame(scrollAnimation); }
            }
            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }
            requestAnimationFrame(scrollAnimation);
        }
    } else {
        window.scrollTo(0, run);
    }
}