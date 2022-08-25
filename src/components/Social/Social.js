import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { list, link } from './Social.module.css';

const Social = ({ classNameList = '', classNameLink = '' }) => {
  return (
    <ul className={`${list} ${classNameList}`}>
      <li>
        <a
          className={`${link} ${classNameLink}`}
          href="https://instagram.com/yuliya_shayenko?igshid=YmMyMTA2M2Y="
          target="blank"
          rel="noreferrer noopener"
        >
          <FaInstagram size={24} />
        </a>
      </li>
      <li>
        <a
          className={`${link} ${classNameLink}`}
          href="https://www.facebook.com/Yuliya.Shayenko"
          target="blank"
          rel="noreferrer noopener"
        >
          <FaFacebookF size={24} />
        </a>
      </li>
      <li>
        <a
          className={`${link} ${classNameLink}`}
          href="https://www.linkedin.com/in/yshayenko/"
          target="blank"
          rel="noreferrer noopener"
        >
          <FaLinkedinIn size={24} />
        </a>
      </li>
    </ul>
  );
};

export default Social;
