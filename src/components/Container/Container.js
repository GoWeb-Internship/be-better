import React from 'react';
// import {wrapper} from './Container.module.css';

const Container = ({ children }) => {
  return <div className="container text-center mt-4 m-auto max-w-xs h-full laptop:max-w-3xl  desktop:max-w-7xl">{children}</div>;
};

export default Container;