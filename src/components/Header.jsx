"use client";

import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="global-nav ">
      <div className="inner">
        <div className="links">
          <Link href="/#top">Home</Link>
          <Link href="/profile/#top">Profile</Link>
          <Link href="/#works">Works</Link>
          <Link href="mailto:me.fk39&#64;gmail.com">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
