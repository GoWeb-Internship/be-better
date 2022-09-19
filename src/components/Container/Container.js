import React, { useEffect, useRef } from 'react';

import { wrapper } from './Container.module.css';

const Container = ({ children, className = '', getRef }) => {
  const container = useRef(null);
  useEffect(() => {
    if (!container.current || !getRef) return;
    getRef(container);
  }, [getRef]);

  return (
    <div ref={container} className={wrapper + ' ' + className}>
      {children}
    </div>
  );
};

export default Container;
