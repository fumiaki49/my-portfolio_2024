"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

function PageTitle(props) {
  return (
    <h1 className="page-title">
      <Typewriter words={[props.word]} cursor typeSpeed={40} />
    </h1>
  );
}

export default PageTitle;
