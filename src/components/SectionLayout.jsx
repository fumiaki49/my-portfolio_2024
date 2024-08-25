import React from "react";

const SectionLayout = (props) => {
  return (
    <section className={props.class} id={props.id}>
      <div className="inner">{props.children}</div>
    </section>
  );
};

export default SectionLayout;
