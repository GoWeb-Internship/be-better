import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const BackgroundImg = ({ data = {}, className = '' }) => {
  const img = getImage(data.file.childImageSharp.gatsbyImageData);

  return (
    <GatsbyImage
      image={img}
      alt=""
      layout="fullWidth"
      formats={['auto', 'webp', 'avif']}
      className={`-z-10 absolute top-0 left-1/2 -translate-x-1/2 max-h-full mx-auto md:w-[768px] lg:w-[1440px] ${className}`}
    />
  );
};

BackgroundImg.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default BackgroundImg;
