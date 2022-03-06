import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import "./Title.css";

function Title() {
  const boxRef = useRef();
  gsap.registerPlugin(TextPlugin);
  useEffect(() => {
    gsap.to(boxRef.current, {
      duration: 2,
      delay: 1,
      text: "Troolla",
      ease: "bounce.out",
    });
    gsap.to(boxRef.current, {
      x: 0,
      y: -40,
      scale: 2,
      delay: 3,
      perspective: 500,
    });
  });
  return (
    <div className="title">
      <h1 id="test" ref={boxRef}>
        hello
      </h1>
    </div>
  );
}

export default Title;
