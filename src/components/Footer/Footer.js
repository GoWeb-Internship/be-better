import React from 'react';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import Container from '../Container';
import Form from '../Form';
import Social from '../Social';
import FooterNext from '../FooterNext';
import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => {
  const { t } = useTranslation();
  const { links } = t('footer', { returnObjects: true });

  return (
    <footer className='bg-bright'>
      <Container>
        <div className='flex justify-between'>
        <div>
      <StaticImage
            src="../../images/logo.png"
            width={90}
            height={56}
            layout="fixed"
            className="mb-11"
          />
      <StaticImage
            src="../../images/rectang.png"
            width={96}
            height={96}
            layout="fixed"
          />
          </div>
          <FooterNext/>

       
        <Form clickFrom="footer" />
        <Social />

          </div>
        <ul className="flex justify-center">
          {links.map(({ name, id }) => (
            <li key={id} className="last: ml-10">
              <Link to={`/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
