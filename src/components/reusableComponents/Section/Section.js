import React from 'react';

const Section = ({ children, className = '', id = '' }) => {
  return (
    <section className={`${className} relative`} id={id}>
      {children}
    </section>
  );
};

export default Section;
