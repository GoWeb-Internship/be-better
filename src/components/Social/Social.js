import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { list, link } from './Social.module.css';

const Social = ({ classNameList = '', classNameLink = '' }) => {
  return (
    <ul className={`${list} ${classNameList}`}>
      <li>
        <a
          className={`${link} ${classNameLink}`}
          href="https://instagram.com/yuliya_shayenko?igshid=YmMyMTA2M2Y="
          target="blank"
          rel="noreferrer noopener nofollow"
          aria-label='link to instagram'
        >
          <FaInstagram size={24} />
        </a>
      </li>
      <li>
        <a
          className={`${link} ${classNameLink}`}
          href="https://www.facebook.com/Yuliya.Shayenko"
          target="blank"
          rel="noreferrer noopener nofollow"
          aria-label='link to facebook'
        >
          <FaFacebookF size={24} />
        </a>
      </li>
      <li>
        <a
          className={`${link} ${classNameLink}`}
          href="https://www.linkedin.com/in/yshayenko/"
          target="blank"
          rel="noreferrer noopener nofollow"
          aria-label='link to linkedin'
        >
          <FaLinkedinIn size={24} />
        </a>
      </li>
    </ul>
  );
};

Social.propTypes = {
  classNameList: PropTypes.string,
  classNameLink: PropTypes.string,
}
export default Social;
