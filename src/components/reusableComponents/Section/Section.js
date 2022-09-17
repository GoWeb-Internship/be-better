import React from 'react';

const Section = ({ children, className = '', id = '', Background }) => {
  return (
    <section className={`${className} relative`} id={id}>
      {children}
      {Background && <Background />}
    </section>
  );
};

export default Section;
