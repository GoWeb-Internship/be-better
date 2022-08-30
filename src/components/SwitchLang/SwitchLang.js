import React, { useState } from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import {switcher, list, item} from './SwitchLang.module.css';
import icons from '../../images/sprite.svg';

const SwitchLang = () => {
  const { language, languages, changeLanguage, originalPath } = useI18next();
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        className={switcher}
        onClick={() => setDropdown(true)}
      >
        {language === 'uk' ? "UA" : language.toUpperCase()}
        <svg width="16px" height="16px">
          <use href={`${icons}#vector`} />
        </svg>
      </button>
      {dropdown && (
        <ul
          className={list}
          onMouseLeave={() => setDropdown(false)}
        >
          {languages.map(lng => (
            <li key={lng} className={item}>
              <Link
                to={originalPath}
                onClick={e => {
                  e.preventDefault();
                  changeLanguage(lng);
                }}
              >
                {lng === 'uk' ? "UA" : lng.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SwitchLang;
