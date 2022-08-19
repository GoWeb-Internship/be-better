import React from 'react';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import Container from '../Container';
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
      {/* <Container className="m-0 p-0 w-full flex relative"> */}
      <div className={container}>
        {/* <StaticImage
      alt=''
      formats={['auto', 'webp', 'avif']}
      src='../../images/bg-min.png'
      width={1031}
      height={420}
      className="absolute -z-10"
      /> */}
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
            />
            <StaticImage
              src="../../images/icf.png"
              width={96}
              height={96}
              layout="fixed"
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

      {/* </Container> */}
    </footer>
  );
};

export default Footer;
