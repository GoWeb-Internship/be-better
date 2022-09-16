import React from 'react';

const Section = ({ children, className = '', id = '', Background }) => {
  return (
    <section className={`${className} relative  -z-10 `} id={id}>
      {children}
      {Background && (
        <Background
          className={'absolute top-0 left-1/2 -translate-x-1/2 -z-50'}
        />
      )}
    </section>
  );
};

export default Section;
