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