import React from 'react';

const VideoIframe = props => {
  return (
    <iframe
      title={props.title}
      className='has-ratio'
      width='560'
      height='315'
      frameborder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowfullscreen
      {...props}
    ></iframe>
  );
};

export default VideoIframe;
