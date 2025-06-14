"use client";

import { useEffect } from "react";
import loadSVGWithAnimation from "../utils/utilityFunctions";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const Hero = () => {
  useEffect(() => {
    loadSVGWithAnimation();

    let titleAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-title",
        start: "top top",
        scrub: true,
        pin: true,
        onEnter: () => {
          document.querySelector(".hero-title").style.display = "flex";
        },
        onLeave: () => {
          document.querySelector(".hero-title").style.display = "none";
        },
        onEnterBack: () => {
          document.querySelector(".hero-title").style.display = "flex";
        },
      },
    });

    titleAnimation.to(".hero-title", {
      scale: 15,
      opacity: 0,
    });

    // document.fonts.ready.then(() => {
    //   let split = SplitText.create(".hero-title", {
    //     type: "chars, words",
    //   });

    //   titleAnimation.to(split.chars, {
    //     // delay: "0.6",
    //     yPercent: "random(-100, 100)",
    //     xPercent: "random(-100, 100)",
    //     rotation: "random(-90, 90)",
    //     scale: 10,
    //     autoAlpha: 0,
    //     opacity: 0,
    //     ease: "back.out",
    //     stagger: {
    //       amount: 0.5,
    //       from: "random",
    //     },
    //   });
    // });
  }, []);

  return (
    <>
      <section
        id="bg_home"
        className="hero blur-3xl w-full h-[100vh] overflow-hidden"
      ></section>
      <article className="hero-title absolute top-0 w-full h-[100vh] z-10 flex flex-col justify-center items-center sm:text-6xl text-5xl uppercase font-[1000] text-[#a09c9c] gap-1">
        <p>Conto</p>
        <p>Home</p>
      </article>
    </>
  );
};

export default Hero;
