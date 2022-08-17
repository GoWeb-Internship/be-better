import React from 'react';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import Container from '../Container';
import Form from '../Form';
import Social from '../Social';

const Footer = () => {
  const { t } = useTranslation();
  const { links } = t('footer', { returnObjects: true });

  return (
    <footer>
      <Container>
        <Social />
        <Form clickFrom="footer" />
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
