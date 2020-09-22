/* *===== HAMBURGER NAV MENU *===== */
const navTriggerEl = document.querySelector(".hamburger");
const navEl = document.querySelector(".header__nav");
const hamburgerBarsEl = document.getElementsByTagName("span");

function toggleNav() {
      navTriggerEl.addEventListener("click", function() {
              navEl.classList.toggle("open");
              navEl.classList.toggle("shift");
              animateHamburgers();
            });
}

function animateHamburgers() {
      for (let item of hamburgerBarsEl) {
              item.classList.toggle("change");
            }
}

toggleNav();