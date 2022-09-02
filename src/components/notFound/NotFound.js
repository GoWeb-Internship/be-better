import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useMedia } from 'react-use';
import { Link } from 'gatsby';
import {
  title,
  container,
  textContainer,
  something,
  work,
  timeReturn,
  link,
  img,
} from './NotFound.module.css';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Heading from '../reusableComponents/Heading';

const NotFound = () => {
  const isMobile = useMedia('(max-width:767px)');

  const { t } = useTranslation();
  const data = t('notFound', { returnObjects: true });

  const foto = useStaticQuery(graphql`
    query {
      bg: file(name: { eq: "404" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      light: file(name: { eq: "light" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  const bgFoto = foto.bg.childImageSharp.gatsbyImageData;
  const badWeather = foto.light.childImageSharp.gatsbyImageData;
  return (
    <div className={container}>
      <GatsbyImage
        image={bgFoto}
        style={{ position: 'absolute' }}
        className="w-full h-full -z-10 top-0 left-0"
      />
      <div className=" laptop:flex laptop:justify-around">
        <div className={textContainer}>
          <Heading tag="h1" className={title} text="404" />
          <p className={something}>{data.something}</p>
          <p className={work}>{data.work}</p>
          <p className={timeReturn}>{data.timeToReturn}</p>
          <Link to="/" className={link}>
            {data.returnLink}
          </Link>
        </div>
        <div>
          {!isMobile && <GatsbyImage image={badWeather} className={img} />}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
