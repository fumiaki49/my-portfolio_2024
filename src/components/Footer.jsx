import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="inner">
          <div className="links">
            <Link href="/#top">Home</Link>
            <Link href="/profile/#top">Profile</Link>
            <Link href="/#works">Works</Link>
            <Link href="mailto:me.fk39&#64;gmail.com">Contact</Link>
          </div>
          <p className="copyright">&copy;Kitagawa Fumiaki</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
