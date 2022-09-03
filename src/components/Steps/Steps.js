import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import Section from '../reusableComponents/Section';
import List from '../reusableComponents/Page';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import svg from '../../images/iconku.svg';

const Steps = () => {
  const { t } = useTranslation();
  const data = t('steps', { returnObjects: true });

//   const foto = useStaticQuery(graphql`
//   query {
//     avatarVanMin:  file(name: {eq: "vanMin"}, id: {}, publicURL: {}) {
//       childrenImageSharp {
//         id
//         gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: CONSTRAINED)
//       }
//     }
//   }
// `);

// const avatarVan = foto.avatarVanMin.childrenImageSharp.gatsbyImageData;
 

  return (
    <Section className="pt-20 pb-16  relative" id="steps">
      <div className="relative">
        {/* <div className="laptop:hidden  z-1">
          <StaticImage
            layout="fullWidth"
            alt=""
            src="../../images/background/van-min.png"
            className=""
            width=""
            height=""
            style={{ position: 'absolute' }}
          />
        </div> */}
        {/* <div className="laptop:hidden  z-1">
          <GatsbyImage
            alt="avatar"
            src={avatarVan}
            style={{ position: 'absolute' }}
          />
        </div> */}
        <div className="relative max-h-full">
          <div className="tablet:hidden desktop:block laptop:w-[768px] ">
            <StaticImage
              layout="fullWidth"
              src="../../images/background/results.png"
              alt=""
              style={{ position: 'absolute' }}
              className="-z-20 w-full h-full"
            />
          </div>
          <div className="tablet:hidden laptop:block desktop:hidden laptop:w-[768px] ">
            <StaticImage
              layout="fullWidth"
              src="../../images/background/group.png"
              alt=""
              style={{ position: 'absolute' }}
              className="-z-20 w-full h-full"
            />
          </div>
           <div className="laptop:hidden">
            <StaticImage
              layout="fullWidth"
              src="../../images/background/van-min.png"
              alt=""
              style={{ position: 'absolute' }}
              className="-z-20 w-full h-full"
            />
           </div> 
            {/* <div className="laptop:hidden">
            <GatsbyImage
              src={avatarVan}
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
