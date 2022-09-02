import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';
import { useMedia } from 'react-use';
import Section from '../reusableComponents/Section';
import Heading from '../reusableComponents/Heading';
import { sectionContainer, aboutMeContainer } from './AboutMe.module.css';
import icon from '../../images/signature.svg';
import AboutMeLap from './AboutMeLap';
import AboutMePrimaryText from './AboutMePrimaryText';

const AboutMe = () => {
  const { t } = useTranslation();

  const isDesktop = useMedia('(min-width:1440px)');

  const foto = useStaticQuery(graphql`
    query {
      avatarLaptop: file(name: { eq: "aboutMe" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      avatarDesktop: file(name: { eq: "aboutFoto" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  const data = t('aboutMe', { returnObjects: true });
  const smartScreenAvatar = foto.avatarLaptop.childImageSharp.gatsbyImageData;
  const DesktopScreenAvatar =
    foto.avatarDesktop.childImageSharp.gatsbyImageData;

  return (
    <Section className={sectionContainer} id="nav-about">
      <div className={aboutMeContainer}>
        <div className="flex mb-6 laptop:block desktop:h-[342px]">
          {isDesktop ? (
            <GatsbyImage
              image={DesktopScreenAvatar}
              alt="author"
              className="  desktop:w-[456px] desktop:h-[480px]"
            />
          ) : (
            <>
              <div className="w-[134px] text-left laptop:hidden mr-3">
                <Heading
                  tag={'h2'}
                  className="title-primary text-left mb-4 laptop:mb-13 laptop:font-semibold laptop:text-34"
                  text={data.title}
                />
                <span className="text-black text-left text-sm">
                  {data.oneParagraphFirst}
                  <span className="text-caveat leading-[0.9]">
                    {data.oneParagraphSpan}
                  </span>
                </span>
              </div>
              <GatsbyImage
                image={smartScreenAvatar}
                alt="author"
                className=" w-[134px] h-[160px] laptop:w-[270px]  laptop:h-[342px] laptop:mr-5  rounded-2xl "
              />
            </>
          )}
        </div>
        <AboutMePrimaryText data={data} />
      </div>
      <AboutMeLap data={data} />
      <div className="w-[265px] mt-8  ml-auto laptop:mr-0 laptop:mt-16 desktop:mt-13">
        <svg className="w-[212px] ml-auto h-16 laptop:w-[265px] laptop:h-20">
          <use href={`${icon}#icon-signature`} />
        </svg>
      </div>
    </Section>
  );
};

export default AboutMe;
