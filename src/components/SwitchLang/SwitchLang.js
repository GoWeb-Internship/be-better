import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import React from 'react';

const SwitchLang = () => {
  const { language, languages, changeLanguage, originalPath } = useI18next();

  // const handleChange = e => {
  //   changeLanguage(e.target.value);
  // };

  return (
    <ul>
      {languages.map(lng => (
        <li key={lng}>
          <Link to={originalPath} language={lng}>
            {lng}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SwitchLang;
