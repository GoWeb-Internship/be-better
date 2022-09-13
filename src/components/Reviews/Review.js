import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  reviewContainer,
  textContainer,
  avatarDesk,
  authorContainer,
  avatarMob,
} from './Reviews.module.css';
import { useMedia } from 'react-use';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

const Review = ({ frontmatter }) => {
  const [overflow, setOverflow] = useState('overflow-hidden');
  const [limitText, setLimitText] = useState(200);

  const { i18n } = useTranslation();

  const isMobile = useMedia('(max-width:767px)');

  const isDesktop = useMedia('(min-width:1440px)');

  useEffect(() => {
    const showScroll = () => {
      const contentText = frontmatter[`${i18n.language}Text`].length;

      if (contentText > limitText) {
        setOverflow('overflow-y-auto');
      } else {
        setOverflow('overflow-hidden');
      }
    };
    showScroll();
  }, [overflow, limitText, frontmatter, i18n.language]);

  useEffect(() => {
    if (isMobile) {
      setLimitText(150);
    } else if (isDesktop) {
      setLimitText(220);
    } else {
      setLimitText(180);
    }
  }, [limitText, isMobile, isDesktop]);

  const positionLength = frontmatter[`${i18n.language}Position`];

  const position = positionLength === null ? 'mb-6' : 'opacity-0';
  const image = frontmatter.image?.childImageSharp.gatsbyImageData;

  return (
    <div className={reviewContainer}>
      <div className={`${overflow} ${textContainer} h-28  laptop:h-[200px] `}>
        <div>
          <p>{frontmatter[`${i18n.language}Text`]}</p>
        </div>
      </div>

      <div className={authorContainer}>
        <GatsbyImage
          image={image}
          className={
            isDesktop ? `${avatarDesk} mr-2 laptop:mr-6` : `${avatarMob}`
          }
        />

        <div>
          <p className={`{${position}} laptop:text-xl font-bold`}>
            {frontmatter[`${i18n.language}Name`]}
          </p>
          <p className={`h-4 laptop:h-6 text-orangeDirty`}>
            {frontmatter[`${i18n.language}Position`]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;

Review.propTypes = {
  frontmatter: PropTypes.object,
};
