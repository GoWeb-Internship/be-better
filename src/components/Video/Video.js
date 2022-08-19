import React from 'react';
const Video = () => {
  return (
    <div>
      <iframe
        src="https://player.vimeo.com/video/429315965?title=0&portrait=0&byline=0&autoplay=1&muted=true"
        title="video"
        controls="controls"
        autoPlay=""
        muted=""
        loop=""
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        // width={400}
        // height={600}
      />
    </div>
  );
};

export default Video;
