import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsPerson } from 'react-icons/bs';

const Review = ({ frontmatter }) => {
  const { i18n } = useTranslation();

  return (
    <div className="flex flex-col justify-between w-80 h-[360px] text-left px-8 pb-8 pt-10 bg-white rounded-2xl shadow-you">
      <div>
        <p>{frontmatter[`${i18n.language}Text`]}</p>
      </div>
      <div className="flex items-center">
        <div className="rounded-full mr-6 ">
          <BsPerson size={24} />
        </div>
        <div>
          <p className="text-xl font-bold">
            {frontmatter[`${i18n.language}Name`]}
          </p>
          <p>{frontmatter[`${i18n.language}Position`]}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
