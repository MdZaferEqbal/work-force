"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function loadSVGWithAnimation() {
  fetch("/assets/img/city.svg")
    .then((response) => response.text())
    .then((svg) => {
      const bgHome = document.getElementById("bg_home");
      if (!bgHome) return;

      bgHome.innerHTML = svg;
      setTimeout(() => {
        bgHome.classList.remove("blur-3xl");
      }, 1000);
      const svgElement = document.querySelector("#bg_home svg");
      if (svgElement) {
        svgElement.setAttribute("preserveAspectRatio", "xMidYMid slice");
        setAnimationScroll();
      }
    });
}

function setAnimationScroll() {
  let runAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: "#bg_home",
      start: "top top",
      end: "+=1000",
      scrub: 0.5,
      pin: true,
    },
  });

  runAnimation
    .add([
      gsap.to("#bg_home svg", 2, {
        scale: 1.5,
      }),
      gsap.to("#full_city", 2, {
        opacity: 0,
      }),
    ])
    .add([
      gsap.to("#building_top", 2, {
        y: -200,
        opacity: 0,
      }),
      gsap.to("#wall_side", 2, {
        x: -200,
        opacity: 0,
      }),
      gsap.to("#wall_front", 2, {
        x: 200,
        y: 200,
        opacity: 0,
      }),
    ])
    .add([
      gsap.to("#interior_wall_side", 2, {
        x: -200,
        opacity: 0,
      }),
      gsap.to("#interior_wall_top", 2, {
        y: -200,
        opacity: 0,
      }),
      gsap.to("#interior_wall_side_2", 2, {
        opacity: 0,
      }),
      gsap.to("#interior_wall_front", 2, {
        opacity: 0,
      }),
    ]);
}
