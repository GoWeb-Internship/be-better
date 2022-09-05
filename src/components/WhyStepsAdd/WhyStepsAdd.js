import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Section from '../reusableComponents/Section';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import List from '../reusableComponents/Steps';
import svg from '../../images/iconsnew.svg';
import Reviews from '../Reviews';

const StepsAdd = () => {
  const { t } = useTranslation();
  const data = t('stepsnew', { returnObjects: true });


  const foto = useStaticQuery(graphql`
  query {
    avatarVan: file(name: { eq: "van" }) {
      id
      publicURL
      childImageSharp {
        id
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          layout: CONSTRAINED
        )
      }
    }
    avatarGr: file(name: { eq: "grow" }) {
      id
      publicURL
      childImageSharp {
        id
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          layout: CONSTRAINED
        )
      }
    }
    avatarVec: file(name: { eq: "vectwo-min" }) {
      id
      publicURL
      childImageSharp {
        id
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          layout: CONSTRAINED
        )
      }
    }
  }
  
`);

const avatarV = foto.avatarVan.childImageSharp.gatsbyImageData;
const avatarG = foto.avatarGr.childImageSharp.gatsbyImageData;
const avatarVect = foto.avatarVec.childImageSharp.gatsbyImageData;


  return (
    <Section className="relative" id="whyStep">
      <div className="relative max-h-full ">
        <div className="tablet:hidden desktop:block">
          <StaticImage
            layout="fullWidth"
            src="../../images/van.png"
            alt="features"
            style={{ position: 'absolute' }}
            className="-z-20 w-full h-full"
          />
        </div>
          {/* <div className="tablet:hidden desktop:block -ml-[1440px]">
          <GatsbyImage
              image={avatarV}
              alt="result"
              style={{ position: 'absolute' }}
              className="-z-20 w-full h-full"
            />
        </div> */}
        <div className="tablet:hidden laptop:block desktop:hidden">
          <StaticImage
            layout="fullWidth"
            src="../../images/grow.png"
            alt="features"
            style={{ position: 'absolute' }}
            className="-z-20 w-full h-full"
          />
        </div>
         {/* <div className="tablet:hidden laptop:block -ml-[770px] desktop:hidden">
         <GatsbyImage
              image={avatarG}
              alt="result"
              style={{ position: 'absolute' }}
              className="-z-20 w-full h-full"
            />
        </div> */}
        <div className="laptop:hidden">
          <StaticImage
            layout="fullWidth"
            src="../../images/vectwo-min.png"
            alt="vectwo"
            style={{ position: 'absolute' }}
            className="-z-20 w-full h-full"
          />
        </div>
        {/* <div className="laptop:hidden -ml-[320px]">
        <GatsbyImage
              image={avatarVect}
              alt="result"
              style={{ position: 'absolute' }}
              className="-z-20 w-full h-full"
            />
        </div> */}
        <List data={data} icons={svg} />
        <Reviews />
      </div>
    </Section>
  );
};

export default StepsAdd;
