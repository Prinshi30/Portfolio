let toggle_dark_btn = document.getElementById("toggle-dark-btn");
let nav = document.getElementsByTagName("nav")[0];
let clickCount = 0;
toggle_dark_btn.addEventListener("click", () => {
  if (clickCount === 0) {
    toggle_dark_btn.innerHTML = `<i class="fa-solid fa-sun mr-1"></i><span id="dark-text"> Light Mode</span>`;
    document.body.classList.toggle("toggle-dark-mode");
    nav.classList.toggle("navbar-dark");
  } else {
    if (toggle_dark_btn.innerHTML === `<i class="fa-solid fa-moon mr-1"></i><span id="dark-text"> Dark Mode</span>`) {
        toggle_dark_btn.innerHTML = `<i class="fa-solid fa-sun mr-1"></i><span id="dark-text"> Light Mode</span>`;
        document.body.classList.toggle("toggle-dark-mode");
        nav.classList.toggle("navbar-dark");
    } else {
      toggle_dark_btn.innerHTML = `<i class="fa-solid fa-moon mr-1"></i><span id="dark-text"> Dark Mode</span>`;
      document.body.classList.toggle("toggle-dark-mode");
      nav.classList.toggle("navbar-dark");
    }
  }
  // toggle_dark_btn = document.getElementById('toggle-dark-btn');
  // toggle_dark_btn.innerHTML = `<i class="fa-solid fa-sun mr-1"></i>`;

  clickCount++;
});