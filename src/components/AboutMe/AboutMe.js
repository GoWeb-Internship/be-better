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
        <div className="flex mb-6 laptop:block desktop:h-[342px]">
          <div className="w-[134px] text-left laptop:hidden mr-3">
            <h1 className="title-primary text-left mb-4 laptop:mb-13 laptop:font-semibold laptop:text-34">
              {data.title}
            </h1>
            <span className="text-black text-left">
              {data.oneParagraphFirst}
              <span className="text-caveat leading-[0.9]">
                {data.oneParagraphSpan}
              </span>
            </span>
          </div>

          <StaticImage
            src="../../images/aboutMe.jpeg"
            layout="constrained"
            alt="author"
            className=" w-[134px] h-[160px] laptop:w-[270px]  laptop:h-[342px] laptop:mr-5  rounded-2xl desktop:hidden"
            placeholder="blurred"
            formats={['auto', 'webp', 'avif']}
          />
          <StaticImage
            src="../../images/about.jpg"
            layout="constrained"
            alt="author"
            className="hidden desktop:block  desktop:w-[456px] desktop:h-[480px]"
            placeholder="blurred"
            formats={['auto', 'webp', 'avif']}
          />
        </div>
        <div className={textContainer}>
          <h1 className={title}>{data.title}</h1>
          <p className="mb-2 desktop:mb-8">
            <span className="text-black hidden laptop:inline">
              {data.oneParagraphFirst}
              <span className={caveat}> {data.oneParagraphSpan}</span>
            </span>
            {data.oneParagraphThird}
          </p>
          <p className="mb-2 desktop:mb-[26px]">
            <span className={caveat}> {data.twoParagraphSpan}</span>
            {data.twoParagraphThird}
          </p>
          <p className="mb-2 laptop:hidden desktop:block desktop:mb-8">
            {data.threeParagraphFirst}
            <span className={caveat}>{data.threeParagraphSpan}</span>
            {data.threeParagraphThird}
          </p>
          <p className="mb-6 laptop:hidden desktop:block laptop:mb-0">
            {data.fourParagraph}
          </p>
          <p className="mb-4 laptop:hidden desktop:block laptop:mb-0">
            <span className="text-caveat">{data.fiveParagraphSpan}</span>
          </p>
          <AboutYou />
        </div>
      </div>
      <div>
        <div className=" hidden laptop:block laptop:w-[420px] laptop:ml-auto  desktop:hidden text-left">
          <p className="mb-2    desktop:mb-8">
            {data.threeParagraphFirst}
            <span className={caveat}>{data.threeParagraphSpan}</span> <br />
            <span className="text-black block mt-4">
              {data.threeParagraphThird}
            </span>
          </p>
        </div>
        <div className="text-left hidden laptop:block laptop:mt-4 desktop:hidden ">
          <p className="mb-6 laptop:mb-0">{data.fourParagraph}</p>
          <p className="mb-4 laptop:mt-8 laptop:mb-0">
            <span className="text-caveat">{data.fiveParagraphSpan}</span>
          </p>
        </div>
      </div>
      <StaticImage
        className="mx-auto mt-8  laptop:ml-auto laptop:mr-0 laptop:mt-16 desktop:mt-13"
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
