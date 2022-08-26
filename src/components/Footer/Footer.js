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
        <Container>
          <div className="hidden desktop:block w-1036 h-[420px] -z-10 absolute top-0">
            <div className="bg-bright  w-1036 h-[420px] "></div>
          </div>
          <div className="px-5 pt-10 pb-6 laptop:px-16 laptop:pt-12 desktop:mb-7 desktop:px-20 desktop:pt-14">
            <svg className=" hidden desktop:block desktop:w-[90px] desktop:h-14">
              <use href={`${icons}#logo`} />
            </svg>
            <div className="flex desktop:flex-row-reverse desktop:-mt-14">
              <Social
                classNameList="space-y-6 laptop:space-y-4"
                classNameLink="bg-main"
              />
              <FooterNext />
            </div>
            <div className="laptop:flex">
              <div className="w-[60px] h-14 ml-17.5 mb-[10px] laptop:ml-[110px] laptop:w-[90px] laptop:h-[82px] desktop:ml-0 desktop:-mt-20">
                <StaticImage src="../../images/icf.png" alt="" />
              </div>
              <div className="hidden laptop:block laptop:ml-auto desktop:-mt-40 desktop:ml-[666px]">
                <Form clickFrom="footer" className="-mb-4" />
              </div>
            </div>
            <Donations className={donate} classNameText="text-main " />
            <p className="mb-6 ml-16 text-xs laptop:text-sm laptop:ml-0 laptop:text-left desktop:text-right">
              {priceByOne}
            </p>
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
