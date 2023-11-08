document.addEventListener("scroll", function() {
    let scrolled = window.pageYOffset;
    let background = document.querySelector(".background");
    background.style.backgroundPositionY = -scrolled * 0.5 + "px";
  });
  