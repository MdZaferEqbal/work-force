"use client";

import Image from "next/image";
import {
  cnn,
  cocaCola,
  daevoo,
  google,
  harryPotter,
  intel,
  lG,
  mtv,
  nokia,
  rbs,
} from "../utils";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const testimonials = [
    { src: daevoo, alt: "Daevoo" },
    { src: cocaCola, alt: "Coca-Cola" },
    { src: google, alt: "Google" },
    { src: cnn, alt: "CNN" },
    { src: harryPotter, alt: "Harry Potter" },
    { src: intel, alt: "Intel" },
    { src: lG, alt: "LG" },
    { src: mtv, alt: "MTV" },
    { src: nokia, alt: "Nokia" },
    { src: rbs, alt: "The Royal Bank of Scotland" },
  ];

  useEffect(() => {
    let aboutAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-title",
        start: "+450 top",
        end: "-=1000 bottom",
        scrub: 0.5,
      },
    });

    document.fonts.ready.then(() => {
      let split = SplitText.create(".about-title", {
        type: "chars, words",
      });

      aboutAnimation.from(split.chars, {
        duration: 3,
        yPercent: "random(-100, 100)",
        scale: 0.8,
        autoAlpha: 0,
        opacity: 0,
        ease: "back.out",
        stagger: {
          amount: 0.5,
          from: "random",
        },
      });
    });
  }, []);

  return (
    <section
      id="about"
      className="about w-full flex mt-3 flex-col items-center relative min-h-[100vh]"
    >
      <article className="sm:w-[70%] w-[80%] flex flex-col gap-5">
        <h1 className="about-title text-center uppercase sm:text-9xl text-6xl font-extrabold text-[#a09c9c]">
          About
        </h1>
        <div className="flex flex-col gap-10" role="document">
          <p className="about-welcome text-center sm:text-5xl">
            Welcome to Workforce, where we make modern web design.
          </p>
          <p className="about-desc text-center sm:text-2xl text-[#a09c9c]">
            We’ve carefully crafted our website using GSAP (GreenSock Animation
            Platform), a powerful JavaScript library known for creating
            high-performance animations on the web. By leveraging GSAP, we’ve
            been able to design a digital experience that feels not only modern
            and responsive but also visually captivating. Every scroll,
            transition, and interaction on the site has been thoughtfully
            animated to enhance user engagement and guide navigation smoothly.
            The result is a browsing experience that feels effortless,
            intuitive, and refined — helping users connect with our content in a
            more dynamic and enjoyable way.
          </p>
        </div>
        <div className="tetimonials flex flex-wrap gap-10 justify-center border-t-8 border-black mb-3 mt-7">
          {testimonials.map((testimonial) => (
            <Image
              key={testimonial.alt}
              src={testimonial.src}
              alt={testimonial.alt}
              height={45}
            />
          ))}
        </div>
      </article>
    </section>
  );
};

export default About;
