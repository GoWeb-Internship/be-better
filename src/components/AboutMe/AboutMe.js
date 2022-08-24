import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import AboutYou from '../AboutYou';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Section from '../reusableComponents/Section';
import {
  title,
  sectionContainer,
  textContainer,
  caveat,
  aboutMeContainer,
} from './AboutMe.module.css';

const AboutMe = () => {
  const { t } = useTranslation();

  const data = t('aboutMe', { returnObjects: true });

  return (
    <Section className={sectionContainer} id="nav-about">
      <div className={aboutMeContainer}>
        <div className="flex">
          <div className="w-[134px] laptop:hidden">
            <h1 className="title-primary text-left mb-4 laptop:mb-13 laptop:font-semibold laptop:text-34">
              {data.title}
            </h1>
            <span className="text-black text-left">
              {data.oneParagraphFirst}
              <span className={caveat}> {data.oneParagraphSpan}</span>
            </span>
          </div>

          <StaticImage
            src="../../images/aboutMe.jpeg"
            layout="constrained"
            alt="author"
            // width={456}
            // height={480}
            className=" w-[134px] h-[160px] rounded-2xl  "
            placeholder="blurred"
            formats={['auto', 'webp', 'avif']}
          />
        </div>
        <div className={textContainer}>
          <h1 className={title}>{data.title}</h1>
          <p className="mb-2 desktop:mb-8">
            <span className="text-black hidden laptop:block">
              {data.oneParagraphFirst}
              <span className={caveat}> {data.oneParagraphSpan}</span>
            </span>
            {data.oneParagraphThird}
          </p>
          <p className="mb-2 desktop:mb-[26px]">
            <span className={caveat}> {data.twoParagraphSpan}</span>
            {data.twoParagraphThird}
          </p>
          <p className="mb-2 desktop:mb-8">
            {data.threeParagraphFirst}
            <span className={caveat}>{data.threeParagraphSpan}</span>
            {data.threeParagraphThird}
          </p>
          <p className="mb-6 laptop:mb-0">{data.fourParagraph}</p>
          <p className="mb-4 laptop:mb-0">
            <span className={`text-caveat`}>{data.fiveParagraphSpan}</span>
          </p>
          <AboutYou />
        </div>
      </div>

      <StaticImage
        className="mx-auto mt-8  desktop:ml-auto desktop:mt-13"
        src="../../images/signature.png"
        width={265}
        height={80}
        layout="fixed"
        alt=""
      />
    </Section>
  );
};

export default AboutMe;
