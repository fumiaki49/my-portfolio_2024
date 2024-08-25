import React from "react";
import Link from "next/link";

const MoreBtn = () => {
  return (
    <>
      <Link href="/profile" className="default-link">
        More
      </Link>
    </>
  );
};

export default MoreBtn;
