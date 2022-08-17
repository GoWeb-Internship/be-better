import React from 'react';
import { wrapper } from './Container.module.css';

const Container = ({ children }) => {
  return <div className={wrapper}>{children}</div>;
};

export default Container;
