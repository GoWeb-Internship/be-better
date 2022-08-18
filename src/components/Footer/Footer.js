import React from 'react';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import Container from '../Container';
import Form from '../Form';
import Social from '../Social';
import FooterNext from '../FooterNext';
import { StaticImage } from 'gatsby-plugin-image';
import {footerContainer, list, link, container} from './Footer.module.css';

const Footer = () => {
  const { t } = useTranslation();
  const { links } = t('footer', { returnObjects: true });

  return (
    <footer className={footerContainer}>
     
      {/* <Container className="m-0 p-0 w-full flex relative"> */}
        <div className={container}>
       
      <StaticImage
      alt=''
      src='../../images/bg-min.png'
      width={1031}
      height={420}
      className="absolute -z-10"
      />
      <div className='flex relative'>
        <div className='pt-16 pl-12 pr-14'>
      <StaticImage
            src="../../images/logo.png"
            width={90}
            height={56}
            layout="fixed"
            className="mb-11"
          />
      <StaticImage
            src="../../images/icf.png"
            width={96}
            height={96}
            layout="fixed"
          />
          </div>

          
          <FooterNext className="absolute"/>
       
       
        <Form clickFrom="footer" className="mt-20 absolute"/>
        <Social className="z-3 pt-16 absolute"/>
        </div>
          </div>
        <ul className={list}>
          {links.map(({ name, id }) => (
            <li key={id} className="last: ml-5 z-10">
              <Link className={link} to={`/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>
        
      {/* </Container> */}
    </footer>
  );
};

export default Footer;
