import React from 'react';
import {video} from './Video.module.css';
import beach from '../../images/video/beach.mp4';

const Video = () => {
  return (
    <div className={video}>
      <video autoPlay loop muted playsInline className="w-[1036px]">
        <source src={beach} type="video/mp4" />
        <source src={beach} type="video/ogg" />
      </video>
    </div>
  );
};

export default Video;
