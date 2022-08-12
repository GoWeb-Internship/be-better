import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';

const NavList = ({ navigation }) => {
  return (
    <ul className="flex">
      {navigation.map(({ id, name }) => (
        <li key={id} className="mr-10">
          <Link to={`#${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
