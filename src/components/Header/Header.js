import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Navigation from '../Navigation';
import SwitchLang from '../SwitchLang';

const Header = ({ siteTitle }) => (
  <header className="container m-auto h-20">
    <div className="fixed flex justify-between w-[1440px] h-20 px-20 z-20 items-center bg-white">
      <Link to="#home" className="hover:scale-110">
        <StaticImage
          src="../../images/logo.png"
          width={90}
          height={56}
          layout="fixed"
          alt="logo"
        />
      </Link>
      <Navigation />
      <SwitchLang />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
