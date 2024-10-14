"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

function PageTitle(props) {
  const [startTyping, setStartTyping] = useState(false);
  const delayStart = 500;

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, delayStart);

    return () => clearTimeout(timer);
  }, []);

  return (
    <h1 className="page-title">
      {startTyping && <Typewriter words={[props.word]} cursor typeSpeed={40} />}
    </h1>
  );
}

export default PageTitle;
