"use client";

import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="global-nav ">
      <div className="links inner">
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/#works">Works</Link>
        <Link href="https://www.wantedly.com/id/fumiaki_kitagawa_d">
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
