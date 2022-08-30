import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Link } from 'react-scroll';
import {burgerMenuOverlay, burgerMenuNav, menuContainer, menuBg, closeBtn, closeIcon, menuList, menuItem, menuLink} from './Header.module.css';
// import icons from '../../images/sprite.svg';

const BurgerMenu = ({ toggleNav }) => {
  const { t } = useTranslation();
  const { nav, toMain } = t('header', { returnObjects: true });

  return (
    <div className={burgerMenuOverlay}>
      <div className={menuBg}>
        {/* <button
          className={closeBtn}
          onClick={toggleNav}
        >
          <svg className={closeIcon}>
            <use href={`${icons}#close`} />
          </svg>
        </button> */}
        <ul className={menuList}>
          {nav.map(({ id, name }) => (
            <li key={id} className={menuItem}>
              <Link
                to={`${id}`}
                smooth
                spy
                offset={-52}
                className={menuLink}
                onClick={toggleNav}
                href={`${id}`}
              >
                {name}
              </Link>
            </li>
          ))}
          <li key={toMain} className={menuItem}>
            <Link
              to={'home'}
              smooth
              spy
              className={menuLink}
              onClick={toggleNav}
              href='home'
            >
              {toMain}
            </Link>
          </li>
        </ul>
      </div>
    </div>
    // <div className={menuContainer}>
    //   <div className={menuBg}>
    //     <button
    //       className={closeBtn}
    //       onClick={toggleNav}
    //     >
    //       <svg className={closeIcon}>
    //         <use href={`${icons}#close`} />
    //       </svg>
    //     </button>
    //     <ul className={menuList}>
    //       {nav.map(({ id, name }) => (
    //         <li key={id} className={menuItem}>
    //           <Link
    //             to={`${id}`}
    //             smooth
    //             spy
    //             offset={-52}
    //             className={menuLink}
    //             onClick={toggleNav}
    //             href={`${id}`}
    //           >
    //             {name}
    //           </Link>
    //         </li>
    //       ))}
    //       <li key={toMain} className={menuItem}>
    //         <Link
    //           to={'home'}
    //           smooth
    //           spy
    //           className={menuLink}
    //           onClick={toggleNav}
    //           href='home'
    //         >
    //           {toMain}
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default BurgerMenu;
