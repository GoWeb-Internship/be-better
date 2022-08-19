import React from 'react';
import beach from '../../images/video/beach.mp4';

const Video = () => {
  return (
    <div className="absolute -z-10 top-0 left-0">
      <video autoPlay loop muted className="w-[1036px]">
        <source src={beach} type="video/mp4" />
        <source src={beach} type="video/ogg" />
      </video>
    </div>
  );
};

export default Video;
