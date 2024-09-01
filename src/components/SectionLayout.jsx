import React from "react";

const SectionLayout = (props) => {
  return (
    <section className={props.styleName} id={props.id}>
      <div className="inner">{props.children}</div>
    </section>
  );
};

export default SectionLayout;
