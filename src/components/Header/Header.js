import React, { useState } from 'react';
import { Link } from 'gatsby';
import {
  header,
  headerContainer,
  link,
  icon,
  burgerMenuActive,
  burgerMenuClose,
  burgerMenuButton,
  burgerMenuLines,
} from './Header.module.css';
import Navigation from '../Navigation';
import SwitchLang from '../SwitchLang';
import BurgerMenu from './BurgerMenu';
import icons from '../../images/sprite.svg';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = e => {
    e.preventDefault();
    setShowNav(prevState => !prevState);
    if (!showNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  return (
    <header className={header} id="#home">
      <div className={headerContainer}>
        <Link to="#home" className={link}>
          <svg className={icon}>
            <use href={`${icons}#logo`} />
          </svg>
        </Link>
        <Navigation />
        <SwitchLang />
        <div className={showNav ? `${burgerMenuActive} ${burgerMenuClose}` : `${burgerMenuClose}`}>
          <button type="button" className={burgerMenuButton} onClick={toggleNav}>
            <span className={burgerMenuLines}></span>
          </button>
        </div>
      </div>
      {showNav && <BurgerMenu toggleNav={toggleNav} />}
    </header>
  );
};

export default Header;
