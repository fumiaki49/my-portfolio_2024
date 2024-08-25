import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="inner">
          <div className="links">
            <Link href="/">Home</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/#works">Works</Link>
            <Link href="/">Contact</Link>
          </div>
          <p className="copyright">&copy;Kitagawa Fumiaki</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
