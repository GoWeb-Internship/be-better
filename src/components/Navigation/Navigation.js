import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import SwitchLang from './SwitchLang';
import NavList from './NavList';

const Navigation = () => {
  const { t } = useTranslation();
  const { nav } = t('header', { returnObjects: true });

  return (
    <>
      <div className="flex justify-between">
        <p>Logo</p>
        <nav className="flex justify-between">
          <NavList navigation={nav} />
        </nav>
        <SwitchLang />
      </div>
    </>
  );
};

export default Navigation;
