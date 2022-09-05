import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import Section from '../reusableComponents/Section';
import List from '../reusableComponents/Page';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import svg from '../../images/iconku.svg';

const Steps = () => {
  const { t } = useTranslation();
  const data = t('steps', { returnObjects: true });

  const foto = useStaticQuery(graphql`
  query {
    avatarVanMin: file(name: { eq: "vanMin" }) {
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
    avatarResults: file(name: { eq: "results" }) {
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
    avatarGroup: file(name: { eq: "group" }) {
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

const avatarVan = foto.avatarVanMin.childImageSharp.gatsbyImageData;
const avatarRes = foto.avatarResults.childImageSharp.gatsbyImageData;
const avatarGr = foto.avatarGroup.childImageSharp.gatsbyImageData;


 

  return (
    <Section className="pt-20 pb-16  relative" id="steps">
      <div className="relative">
        <div className="relative max-h-full">
          <div className="tablet:hidden desktop:block laptop:w-[768px] ">
            <StaticImage
              layout="fullWidth"
              src="../../images/results.png"
              alt=""
              style={{ position: 'absolute' }}
              className="-z-20 w-full h-full"
            />
          </div>
          {/* <div className="tablet:hidden desktop:block laptop:w-[768px] pl-[0px] -ml-[384px] pr-0 mr-0">
          <GatsbyImage
              image={avatarRes}
              alt="result"
              style={{ position: 'absolute' }}
              className="-z-20 w-full h-full"
            />
          </div> */}
          <div className="tablet:hidden laptop:block desktop:hidden laptop:w-[768px] ">
            <StaticImage
              layout="fullWidth"
              src="../../images/group.png"
              alt=""
              style={{ position: 'absolute' }}
              className="-z-20 w-full h-full"
            />
          </div>
          {/* <div className="tablet:hidden laptop:block desktop:hidden laptop:w-[768px] -ml-[383px]">
          <GatsbyImage
              image={avatarGr}
              alt="result"
              style={{ position: 'absolute' }}
              className="-z-20 w-full h-full"
            />
          </div> */}

           <div className="laptop:hidden">
            <StaticImage
              layout="fullWidth"
              src="../../images/vanMin.png"
              alt=""
              style={{ position: 'absolute' }}
              className="-z-20 w-full h-full"
            />
           </div> 
            {/* <div className="-ml-[335px] laptop:hidden">
             <GatsbyImage
              image={avatarVan}
              alt="avatar"
              style={{ position: 'absolute' }}
              className="-z-20 w-full h-full"
            />
           </div> */}
          <List data={data} icons={svg} />
        </div>
      </div>
    </Section>
  );
};

export default Steps;
