import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BsPerson } from 'react-icons/bs';
import { reviewContainer, textContainer } from './Reviews.module.css';
import { useMedia } from 'react-use';
import { GatsbyImage } from 'gatsby-plugin-image';

const Review = ({ frontmatter }) => {
  const [overflow, setOverflow] = useState('overflow-hidden');
  const [limitText, setLimitText] = useState(200);

  const { i18n } = useTranslation();

  const isMobile = useMedia('(max-width:767px)');

  const isDesktop = useMedia('(min-width:1440px)');

  const avatarSize = isMobile ? 'h-8 w-8' : 'h-[60px] w-[60px]';
  const noAvatarSize = isMobile ? 32 : 60;

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
  }, [overflow, limitText]);

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

      <div className="flex items-center">
        {image ? (
          <div className="rounded-full mr-2 laptop:mr-6 ">
            <GatsbyImage
              image={image}
              className={`${avatarSize} rounded-full`}
            />
          </div>
        ) : (
          <div className="rounded-full mr-2 laptop:mr-6 ">
            <BsPerson size={noAvatarSize} />{' '}
          </div>
        )}

        {/* <div className="rounded-full mr-2 laptop:mr-6 ">
          {image ? (
            <GatsbyImage
              image={image}
              className={`${avatarSize} rounded-full`}
            />
          ) : (
            <BsPerson size={noAvatarSize} />
          )}
        </div> */}
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
