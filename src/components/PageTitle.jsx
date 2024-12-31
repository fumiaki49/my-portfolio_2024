"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

function PageTitle(props) {
  const [startTyping, setStartTyping] = useState(false);
  const [enableAnimation, setEnableAnimation] = useState(true);
  const delayStart = 500;

  useEffect(() => {
    const handleResize = () => {
      setEnableAnimation(window.innerWidth > 500);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, delayStart);

    return () => clearTimeout(timer);
  }, []);

  return (
    <h1 className="page-title">
      {enableAnimation && startTyping ? (
        <Typewriter words={[props.word]} cursor typeSpeed={40} />
      ) : (
        props.word
      )}
    </h1>
  );
}

export default PageTitle;
