import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import React, { useState } from 'react';
import icons from '../../images/sprite.svg';

const SwitchLang = () => {
  const { language, languages, changeLanguage, originalPath } = useI18next();
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(prevState => !prevState);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="flex justify-between items-center w-[45px] text-main"
        onClick={toggleDropdown}
      >
        {language.toUpperCase()}
        <svg width="16px" height="16px">
          <use href={`${icons}#vector`} />
        </svg>
      </button>
      {dropdown && (
        <ul className="absolute top-0 w-full py-2 space-y-4 text-center bg-white text-likeGrey rounded">
          {languages.map(lng => (
            <li key={lng} className="hover:text-main focus:text-main">
              <Link
                to={originalPath}
                onClick={e => {
                  e.preventDefault();
                  changeLanguage(lng);
                }}
              >
                {lng.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SwitchLang;
