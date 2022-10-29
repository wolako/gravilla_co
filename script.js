function headerChgCol() {
  let nav = document.getElementById("nav");
  let scrollValue = window.scrollY;

  if (scrollValue > 100) {
    nav.classList.add("bgColor");
  } else {
    nav.classList.remove("bgColor");
  }
}

window.addEventListener("scroll", headerChgCol);
