import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsPerson } from 'react-icons/bs';
import { reviewContainer } from './Reviews.module.css';

const Review = ({ frontmatter }) => {
  const { i18n } = useTranslation();

  return (
    <div className={reviewContainer}>
      <div>
        <p>{frontmatter[`${i18n.language}Text`]}</p>
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
  );
};

export default Review;
