"use strict";


const navbar = document.querySelector(".navbar");


/*
 * Navigation glass effect.
 */

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
 * Slight mouse movement on the hero logo.
 */

const hero = document.querySelector(".hero");
const mark = document.querySelector(".hero-mark");

const reducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


if (
    hero &&
    mark &&
    !reducedMotion.matches &&
    window.matchMedia("(pointer: fine)").matches
) {

    hero.addEventListener("pointermove", (event) => {

        const rect =
            hero.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) /
            rect.width -
            0.5;

        const y =
            (event.clientY - rect.top) /
            rect.height -
            0.5;

        const rotate =
            7 + x * 4;

        const moveX =
            x * 10;

        const moveY =
            y * 10;

        mark.style.transform =
            `translate(${moveX}px, calc(-50% + ${moveY}px)) rotate(${rotate}deg)`;

    });


    hero.addEventListener("pointerleave", () => {

        mark.style.transform =
            "translateY(-50%) rotate(7deg)";

    });

}