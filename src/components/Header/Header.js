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
  burgerMenuOverlay,
  burgerBtn,
  burgerIcon,
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
  };

  return (
    <header className={header} id="#home">
      {showNav && <BurgerMenu toggleNav={toggleNav} />}
      <div className={headerContainer}>
        <Link to="#home" className={link}>
          <svg className={icon}>
            <use href={`${icons}#logo`} />
          </svg>
        </Link>
        <Navigation />
        <SwitchLang />
        {/* <button type='button' className={burgerBtn} onClick={toggleNav}>
            <svg className={burgerIcon}>
              <use href={`${icons}#burger`} />
            </svg>
          </button> */}
        <div className={showNav ? `${burgerMenuActive} ${burgerMenuClose}` : `${burgerMenuClose}`}>
          <button type="button" className={burgerMenuButton} onClick={toggleNav}>
            <span className={burgerMenuLines}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
