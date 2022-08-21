import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';
import Navigation from '../Navigation';
import SwitchLang from '../SwitchLang';

const Header = ({ siteTitle }) => {
  const handleClick = e => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target.slice(3)).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - document.getElementById('header').clientHeight,
    });
  };

  return (
    <header className="container m-auto h-20" id="header">
      <div className="fixed flex justify-between w-[1440px] h-20 px-20 z-20 items-center bg-white">
        <Link to="#home" className="hover:scale-110 transition-transform">
          <StaticImage
            src="../../images/logo.png"
            width={90}
            height={56}
            layout="fixed"
            alt="logo"
          />
        </Link>
        <Navigation handleClick={handleClick} />
        <SwitchLang />
      </div>
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
