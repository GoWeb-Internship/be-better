import React from 'react';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import Form from '../Form';
import Social from '../Social';
import FooterNext from '../FooterNext';
import { StaticImage } from 'gatsby-plugin-image';
import { footerContainer, list, link, container } from './Footer.module.css';

const Footer = () => {
  const { t } = useTranslation();
  const { links } = t('footer', { returnObjects: true });

  return (
    <footer className={footerContainer}>
      <div className={container}>
        <StaticImage
          layout="fullWidth"
          src="../../images/background/bg-min.png"
          alt=""
          style={{ position: 'absolute' }}
          className="w-3/4 -z-10 top-0"
        />
        <div className="flex">
          <div className="pt-16 pl-12 pr-14">
            <StaticImage
              src="../../images/logo.png"
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

          <Form clickFrom="footer" className="-mb-4" />
          <Social className="z-3 pt-16 absolute" />
        </div>
        <div>
          <ul className={list}>
            {links.map(({ name, id }) => (
              <li key={id} className="last: ml-5 z-10">
                <Link className={link} to={`/${id}`}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
