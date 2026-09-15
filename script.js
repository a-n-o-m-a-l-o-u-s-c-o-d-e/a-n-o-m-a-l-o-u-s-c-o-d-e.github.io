"use strict";

const navbar = document.querySelector(".navbar");

function updateNavbar() {
    if (!navbar) {
        return;
    }

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

window.addEventListener(
    "scroll",
    updateNavbar,
    { passive: true }
);

updateNavbar();


/*
 * SHŌGI ICHIBAN
 *
 * Type "shogi" anywhere on the site.
 */

let secretInput = "";

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey || event.altKey || event.metaKey) {
        return;
    }

    if (event.key.length !== 1) {
        return;
    }

    secretInput += event.key.toLowerCase();

    if (secretInput.length > 5) {
        secretInput = secretInput.slice(-5);
    }

    if (secretInput === "shogi") {
        window.location.href = "shogi.html";
    }
});