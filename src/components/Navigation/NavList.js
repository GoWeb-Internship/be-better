import React from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import { links, active } from './Nav.module.css';

const NavList = ({ navigation }) => {
  return (
    <ul className="flex">
      {navigation.map(({ id, name }) => (
        <li key={id} className="cursor-pointer">
          <Link
            to={`${id}`}
            smooth
            spy
            offset={-80}
            className={links}
            activeClass={active}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

NavList.propTypes = {
  navigation: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }))
}
export default NavList;
