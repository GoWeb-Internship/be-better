import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BsPerson } from 'react-icons/bs';
import { reviewContainer, button } from './Reviews.module.css';
import Button from '../reusableComponents/Button';

const Review = ({ frontmatter }) => {
  const [showAllReview, setShowAllReview] = useState(false);
  const [overflow, setOverflow] = useState('overflow-hidden');

  useEffect(() => {
    if (showAllReview) {
      setOverflow('overflow-x-scroll');
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
      <div className={overflow}>
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

      <Button
        doAction={showMore}
        className="!bg-white !text-mainSecond !text-sm mt-1"
      >
        {showAllReview ? (
          <p className="!text-mainSecond">{button.reviewButtonLess}</p>
        ) : (
          <p className="!text-mainSecond">{button.reviewButtonMore}</p>
        )}
      </Button>
    </div>
  );
};

export default Review;
