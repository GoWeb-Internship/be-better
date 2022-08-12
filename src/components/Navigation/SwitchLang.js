import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import React from 'react';

const SwitchLang = () => {
  const { languages, originalPath } = useI18next();
  return (
    <ul className="flex justify-between">
      {languages.map(lng => (
        <li key={lng} className="mr-10 last:mr-0">
          <Link to={originalPath} language={lng}>
            {lng}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SwitchLang;
