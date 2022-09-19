import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import { useI18next } from 'gatsby-plugin-react-i18next';

import { list, item } from './SwitchLang.module.css';
import { normalizeLang } from './SwitchLang';

const LangList = ({ onClose }) => {
  const { languages, changeLanguage, originalPath } = useI18next();

  const handleClick = lng => {
    changeLanguage(lng);
    onClose();
  };

  return (
    <>
      <ul className={list}>
        {languages.map(lng => (
          <li key={lng} className={item}>
            <Link to={originalPath} onClick={() => handleClick(lng)}>
              {normalizeLang(lng)}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LangList;
