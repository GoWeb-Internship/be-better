import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';
import SwitchLang from './SwitchLang';

import NavList from './NavList';
import { headerContainer, navContainer, logo } from './Nav.module.css';

const Navigation = () => {
  const { t } = useTranslation();
  const { nav } = t('header', { returnObjects: true });

  return (
    <>
      <div className={headerContainer}>
        <Link to="#home" className={logo}>
          <StaticImage
            src="../../images/logo.png"
            width={90}
            height={56}
            layout="fixed"
          />
        </Link>
        <nav className={navContainer}>
          <NavList navigation={nav} />
        </nav>
        <SwitchLang />
      </div>
    </>
  );
};

export default Navigation;
