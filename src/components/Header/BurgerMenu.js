import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Link } from 'react-scroll';
import icons from '../../images/sprite.svg';

const BurgerMenu = ({ toggleNav }) => {
  const { t } = useTranslation();
  const { nav, toMain } = t('header', { returnObjects: true });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-20 laptop:hidden">
      <div className=" bg-white z-30 pl-12 pb-4 w-70 ml-auto">
        <button
          className="absolute top-1 right-5 w-11 h-11"
          onClick={toggleNav}
        >
          <svg className="w-7 h-7 m-auto fill-main">
            <use href={`${icons}#close`} />
          </svg>
        </button>
        <ul className="flex flex-col pt-12 text-main ">
          {nav.map(({ id, name }) => (
            <li key={id} className="cursor-pointer h-11 pt-3 ">
              <Link
                to={`${id}`}
                smooth
                spy
                offset={-52}
                className="hover:border-b-2 border-main"
                onClick={toggleNav}
              >
                {name}
              </Link>
            </li>
          ))}
          <li key={toMain} className="cursor-pointer h-11 pt-3 ">
            <Link
              to={'home'}
              smooth
              spy
              offset={-52}
              className="hover:border-b-2 border-main"
              onClick={toggleNav}
            >
              {toMain}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
