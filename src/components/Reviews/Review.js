import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BsPerson } from 'react-icons/bs';
import {
  reviewContainer,
  textContainer,
  buttonCss,
} from './Reviews.module.css';
import Button from '../reusableComponents/Button';

const Review = ({ frontmatter }) => {
  const [showAllReview, setShowAllReview] = useState(false);
  const [overflow, setOverflow] = useState('overflow-hidden');

  useEffect(() => {
    if (showAllReview) {
      setOverflow('overflow-auto');
      return;
    } else {
      setOverflow('overflow-hidden');
      return;
    }
  }, [showAllReview]);

  const { t, i18n } = useTranslation();

  const showMore = () => {
    setShowAllReview(!showAllReview);
  };
  const button = t('littleComponents', { returnObjects: true });
  return (
    <div className={reviewContainer}>
      <div className="flex flex-col justify-between h-full">
        <div className={`${overflow} ${textContainer}`}>
          <div>
            <p>{frontmatter[`${i18n.language}Text`]}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="rounded-full mr-6 ">
            <BsPerson size={24} />
          </div>
          <div>
            <p className="  laptop:text-xl font-bold">
              {frontmatter[`${i18n.language}Name`]}
            </p>
            <p>{frontmatter[`${i18n.language}Position`]}</p>
          </div>
        </div>
      </div>
      {!showAllReview && (
        <Button doAction={showMore} className={buttonCss}>
          <p className="!text-mainSecond">{button.reviewButtonMore}</p>
        </Button>
      )}
    </div>
  );
};

export default Review;
