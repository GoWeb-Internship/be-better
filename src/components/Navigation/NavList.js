import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import { links } from './Nav.module.css';

const NavList = ({ navigation }) => {
  return (
    <ul className="flex">
      {navigation.map(({ id, name }) => (
        <li key={id} className="mr-10 ">
          <Link to={`#${id}`} className={links}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
