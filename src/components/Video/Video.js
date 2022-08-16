import React from 'react'
import Form from '../Form'
const Video = () => {
  return (
    <div>
      <iframe
      src="https://player.vimeo.com/video/429315965?title=0&portrait=0&byline=0&autoplay=1&muted=true"
      title="video"
      allow="play; autoplay; muted; loop; scrolling"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      className='h-auto'
      // width={400}
      // height={600}
    />
    </div>
  )
}

export default Video
