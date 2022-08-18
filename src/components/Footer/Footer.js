import React from 'react';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import Container from '../Container';
import Form from '../Form';
import Social from '../Social';
import FooterNext from '../FooterNext';
import { StaticImage } from 'gatsby-plugin-image';
import {footerContainer} from './Footer.module.css';

const Footer = () => {
  const { t } = useTranslation();
  const { links } = t('footer', { returnObjects: true });

  return (
    <footer className={footerContainer}>
     
      {/* <Container className="m-0 p-0 w-full flex relative"> */}
        <div className='justify-between m-0 p-0 w-full '>
       
      <StaticImage
      alt=''
      src='../../images/bg-min.png'
      width={1100}
      height={420}
      className="absolute m-0 -z-10"
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

          
          <FooterNext/>
       
       
        <Form clickFrom="footer" className="pt-16"/>
        <Social className="z-3 pt-16"/>
        </div>
          </div>
        <ul className="flex text-left pl-44 ml-10 mr-4 z-10">
          {links.map(({ name, id }) => (
            <li key={id} className="last: ml-5 z-10">
              <Link className='pr-7 text-black font-normal text-sm  px-0' to={`/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>
        
      {/* </Container> */}
    </footer>
  );
};

export default Footer;
