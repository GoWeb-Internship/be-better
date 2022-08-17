import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import SwitchLang from './SwitchLang';
import NavList from './NavList';
import { headerContainer, navContainer } from './Nav.module.css';
const Navigation = () => {
  const { t } = useTranslation();
  const { nav } = t('header', { returnObjects: true });

  return (
    <>
      <div className={headerContainer}>
        <p>Logo</p>
        <nav className={navContainer}>
          <NavList navigation={nav} />
        </nav>
        <SwitchLang />
      </div>
    </>
  );
};

export default Navigation;
