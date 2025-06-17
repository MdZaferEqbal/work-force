"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function loadSVGWithAnimation() {
  fetch("/assets/img/city.svg")
    .then((response) => response.text())
    .then((svg) => {
      gsap.to("#hero-loader", {
        opacity: 0,
        scale: 5,
        duration: 1,
        onComplete: () => {
          document.body.style.overflowY = "visible";
          document.getElementById("hero-loader").style.display = "none";

          setTimeout(() => {
            bgHome.classList.remove("blur-3xl");
          }, 1000);

          const svgElement = document.querySelector("#bg_home svg");
          if (svgElement) {
            svgElement.setAttribute("preserveAspectRatio", "xMidYMid slice");
            setAnimationScroll();
          }
        },
      });

      const bgHome = document.getElementById("bg_home");
      if (!bgHome) return;

      bgHome.innerHTML = svg;
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
      onEnter: () => {
        document.querySelector(".header")?.classList.remove("backdrop-blur-sm");
        document.querySelector(".header")?.classList.remove("border-b-2");
      },
      onLeave: () => {
        document.querySelector(".header")?.classList.add("backdrop-blur-sm");
        document.querySelector(".header")?.classList.add("border-b-2");
      },
      onEnterBack: () => {
        document.querySelector(".header")?.classList.remove("backdrop-blur-sm");
        document.querySelector(".header")?.classList.remove("border-b-2");
      },
    },
  });

  runAnimation
    .add([
      gsap.to("#bg_home svg", {
        scale: 1.5,
      }),
      gsap.to("#full_city", {
        opacity: 0,
      }),
    ])
    .add([
      gsap.to("#building_top", {
        y: -200,
        opacity: 0,
      }),
      gsap.to("#wall_side", {
        x: -200,
        opacity: 0,
      }),
      gsap.to("#wall_front", {
        x: 200,
        y: 200,
        opacity: 0,
      }),
    ])
    .add([
      gsap.to("#interior_wall_side", {
        x: -200,
        opacity: 0,
      }),
      gsap.to("#interior_wall_top", {
        y: -200,
        opacity: 0,
      }),
      gsap.to("#interior_wall_side_2", {
        opacity: 0,
      }),
      gsap.to("#interior_wall_front", {
        opacity: 0,
      }),
    ]);
}
