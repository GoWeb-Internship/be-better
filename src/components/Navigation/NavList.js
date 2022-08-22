import React from 'react';
import { Link } from 'react-scroll';
import { links, active } from './Nav.module.css';

const NavList = ({ navigation }) => {
  return (
    <ul className="flex">
      {navigation.map(({ id, name }) => (
        <li key={id} className="mr-10 cursor-pointer">
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

export default NavList;
