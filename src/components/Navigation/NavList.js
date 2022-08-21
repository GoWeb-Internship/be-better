import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import { links } from './Nav.module.css';

const NavList = ({ navigation, handleClick }) => {
  return (
    <ul className="flex">
      {navigation.map(({ id, name }) => (
        <li key={id} className="mr-10 ">
          <Link
            to={`#${id}`}
            onClick={handleClick}
            className={links}
            activeClassName="text-orangeDark"
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
