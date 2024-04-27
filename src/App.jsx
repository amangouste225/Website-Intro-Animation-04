import Container from "./Container";
import Content from "./Content";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Intro from "./Intro";

function App() {
  useGSAP(() => {
    let tl = gsap.timeline({ delay: 0 });

    tl.to(".loader", {
      opacity: 1,
      ease: "power4.inOut",
      duration: 6,
    });
    tl.to(
      ".loader",
      {
        opacity: 0,
        duration: 1,
      },
      "-=0.5"
    );

    tl.to(
      ".col",
      {
        top: 0,
        duration: 3,
        ease: "power4.inOut",
      },
      "-=2.5"
    );

    tl.to(
      ".c-1 .item",
      {
        top: 0,
        stagger: 0.25,
        duration: 3,
        ease: "power4.inOut",
      },
      "-=2"
    );

    tl.to(
      ".c-2 .item",
      {
        top: 0,
        stagger: -0.25,
        duration: 3,
        ease: "power4.inOut",
      },
      "-=4"
    );

    tl.to(
      ".c-3 .item",
      {
        top: 0,
        stagger: 0.25,
        duration: 3,
        ease: "power4.inOut",
      },
      "-=4"
    );

    tl.to(
      ".c-4 .item",
      {
        top: 0,
        stagger: -0.25,
        duration: 3,
        ease: "power4.inOut",
      },
      "-=4"
    );

    tl.to(
      ".c-5 .item",
      {
        top: 0,
        stagger: 0.25,
        duration: 3,
        ease: "power4.inOut",
      },
      "-=4"
    );

    tl.to(
      ".contain",
      {
        scale: 6,
        duration: 4,
        ease: "power4.inOut",
      },
      "-=1"
    );

    tl.to(
      ".nav-item a, .title p, .numbers span, .preview img",
      {
        top: 0,
        stagger: 0.075,
        duration: 2.5,
        ease: "power3.inOut",
      },
      "-=2"
    );

    tl.to(
      ".icon1 span",
      {
        scale: 1,
        stagger: 0.5,
        ease: "power3.inOut",
      },
      "-=1"
    );
  });

  return (
    <>
      <Intro />
      <Container />
      <Content />
    </>
  );
}

export default App;
