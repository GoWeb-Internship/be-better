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
        <div>
          <StaticImage
            src="../../images/aboutMe.jpeg"
            layout="constrained"
            alt="author"
            width={456}
            height={480}
            className="rounded-2xl  "
            placeholder="blurred"
            formats={['auto', 'webp', 'avif']}
          />
        </div>
        <div className={textContainer}>
          <h1 className={title}>{data.title}</h1>
          <p className="mb-8">
            {data.oneParagraphFirst}
            <span className={caveat}> {data.oneParagraphSpan}</span>
            {data.oneParagraphThird}
          </p>
          <p className="mb-[26px]">
            <span className={caveat}> {data.twoParagraphSpan}</span>
            {data.twoParagraphThird}
          </p>
          <p className="mb-8">
            {data.threeParagraphFirst}
            <span className={caveat}>{data.threeParagraphSpan}</span>
            {data.threeParagraphThird}
          </p>
          <p>{data.fourParagraph}</p>
          <p>
            <span className={caveat}>{data.fiveParagraphSpan}</span>
          </p>
          <AboutYou />
        </div>
      </div>

      <StaticImage
        className="ml-auto mt-13"
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
