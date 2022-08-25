import React from 'react';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';
import Container from '../Container';
import Form from '../Form';
import Social from '../Social';
import FormWithBackground from '../Form/FormWithBackground';
import FooterNext from '../FooterNext';
import { footerContainer, list, link, donate } from './Footer.module.css';
import icons from '../../images/sprite.svg';
import Donations from '../Donations';

const Footer = () => {
  const { t } = useTranslation();
  const { links } = t('footer', { returnObjects: true });
  const { priceByOne } = t('footer', { returnObjects: true });

  return (
    <footer>
      <FormWithBackground clickFrom="footer" />
      <div className={footerContainer}>
        <div className="hidden desktop:block">
          <StaticImage
            layout="fullWidth"
            src="../../images/background/bg-min.png"
            alt=""
            style={{ position: 'absolute' }}
            className="w-1036 h-[420px] -z-10 top-0"
          />
        </div>
        <Container>
          <div className="px-5 pt-10 pb-6 desktop:mb-7 desktop:px-20 desktop:pt-14">
            <svg className=" hidden desktop:w-[90px] desktop:h-14">
              <use href={`${icons}#logo`} />
            </svg>
            <div className="flex">
              <Social classNameList="space-y-6" classNameLink="bg-main" />
              <FooterNext />
            </div>
            <div className="w-[60px] h-14 ml-17.5 mb-[10px]">
              <StaticImage src="../../images/icf.png" alt="" />
            </div>
            <Donations className={donate} classNameText="text-main " />
            <div className="hidden laptop:block">
              <Form clickFrom="footer" className="-mb-4" />
            </div>
            <p className="mb-6 ml-16 text-xs laptop:text-sm">{priceByOne}</p>
            <ul className={list}>
              {links.map(({ name, id }) => (
                <li key={id} className={link}>
                  <Link to={`/${id}`}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
