import * as React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';

const Header = ({ siteTitle }) => (
  <header className="m-auto ">
    <Navigation />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
