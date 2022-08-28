import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Navigation from '../Navigation';
import SwitchLang from '../SwitchLang';
import BurgerMenu from './BurgerMenu';
import icons from '../../images/sprite.svg';

const Header = ({ siteTitle }) => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(prevState => !prevState);
  };

  return (
    <header
      className="h-[52px] fixed bg-white w-full laptop:h-20 z-20"
      id="#home"
    >
      {showNav ? (
        <BurgerMenu toggleNav={toggleNav} />
      ) : (
        <div className="container m-auto flex justify-end laptop:justify-between w-80 laptop:h-20 laptop:w-768 desktop:w-[1440px] py-1 px-5 laptop:px-16 desktop:px-20  items-center">
          <Link
            to="#home"
            className="mr-auto laptop:mr-2 hover:scale-110 transition-transform"
          >
            <svg className="w-[72px] h-11 laptop:w-20 laptop:h-12 desktop:w-[90px] desktop:h-14">
              <use href={`${icons}#logo`} />
            </svg>
          </Link>
          <Navigation />
          <SwitchLang />
          <button className="w-11 h-11 ml-2 laptop:hidden" onClick={toggleNav}>
            <svg className="w-4 h-4 m-auto">
              <use href={`${icons}#burger`} />
            </svg>
          </button>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
