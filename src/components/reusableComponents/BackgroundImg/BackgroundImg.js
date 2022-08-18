import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';

const BackgroundImg = ({ img = '', className = '' }) => {
  return (
    <StaticImage
      src="../../../images/background/backgroundBlu.jpg"
      alt=""
      layout="fullWidth"
      formats={['auto', 'webp', 'avif']}
      className={`-z-10 absolute  ${className}`}
    />
  );
};

BackgroundImg.propTypes = {
  img: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default BackgroundImg;
