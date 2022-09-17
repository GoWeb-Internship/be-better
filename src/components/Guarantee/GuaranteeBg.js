import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import {
  icon,
  photoMobile,
  photoTablet,
  photoDesktop,
} from './Guarantee.module.css';

import icons from 'images/sprite.svg';

const GuaranteeBg = () => {
  const { t } = useTranslation();

  const { background } = t('guarantee', { returnObjects: true });

  const foto = useStaticQuery(graphql`
    query {
      guaranteeMobile: file(name: { eq: "guaranteeMobile" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      guaranteeLaptop: file(name: { eq: "guaranteeTablet" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      guaranteeDesktop: file(name: { eq: "guaranteeDesktop" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
    }
  `);

  const mobileGuarantee = foto.guaranteeMobile.childImageSharp.gatsbyImageData;
  const tabletGuarantee = foto.guaranteeLaptop.childImageSharp.gatsbyImageData;
  const desktopGuarantee =
    foto.guaranteeDesktop.childImageSharp.gatsbyImageData;

  return (
    <div>
      <svg className={icon}>
        <use href={`${icons}#quote-left`} />
      </svg>
      <div className="laptop:hidden">
        <GatsbyImage
          image={mobileGuarantee}
          alt={background}
          style={{ position: 'absolute' }}
          className={photoMobile}
        />
      </div>
      <div className="hidden laptop:block desktop:hidden">
        <GatsbyImage
          image={tabletGuarantee}
          alt={background}
          style={{ position: 'absolute' }}
          className={photoTablet}
        />
      </div>
      <div className="hidden desktop:block">
        <GatsbyImage
          image={desktopGuarantee}
          alt={background}
          style={{ position: 'absolute' }}
          className={photoDesktop}
        />
      </div>
    </div>
  );
};

export default GuaranteeBg;
