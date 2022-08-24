import React from 'react';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import Form from '../Form';
import Social from '../Social';
import FooterNext from '../FooterNext';
import { StaticImage } from 'gatsby-plugin-image';
import { footerContainer, list, link } from './Footer.module.css';

const Footer = () => {
  const { t } = useTranslation();
  const { links } = t('footer', { returnObjects: true });
  const { priceByOne } = t('footer', { returnObjects: true });

  return (
    <footer className={footerContainer}>
      <StaticImage
        layout="fullWidth"
        src="../../images/background/bg-min.png"
        alt=""
        style={{ position: 'absolute' }}
        className="w-1036 h-[420px] -z-10 top-0"
      />
      <div className="flex mb-7 px-20 pt-14">
        <div className="mr-[126px]">
          <StaticImage
            src="../../images/logo.svg"
            width={90}
            height={56}
            layout="fixed"
            className="mb-11"
            alt=""
          />
          <StaticImage
            src="../../images/icf.png"
            width={96}
            height={96}
            layout="fixed"
            alt=""
          />
        </div>

        <FooterNext className="absolute" />
        <div className="hidden laptop:block">
          <Form clickFrom="footer" className="-mb-4" />
        </div>
        <Social />
      </div>
      <div className="flex items-center">
        <ul className={list}>
          {links.map(({ name, id }) => (
            <li key={id} className="mr-[70px] last:mr-0">
              <Link className={link} to={`/${id}`}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-sm">{priceByOne}</p>
      </div>
    </footer>
  );
};

export default Footer;
