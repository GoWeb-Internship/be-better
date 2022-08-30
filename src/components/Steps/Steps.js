import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Section from '../reusableComponents/Section';
import List from '../reusableComponents/Page';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import svg from '../../images/iconku.svg';

const Steps = () => {
  const { t } = useTranslation();
  const data = t('steps', { returnObjects: true });

  return (
    <Section className="pt-20 pb-16  relative" id="steps">
      <div className="relative">
        <div className="laptop:hidden  z-1">
          <StaticImage
            layout="fullWidth"
            alt=""
            src="../../images/background/van-min.png"
            className=""
            width=""
            height=""
            style={{ position: 'absolute' }}
          />
        </div>
        <div className="relative max-h-full">
          <StaticImage
            layout="fullWidth"
            src="../../images/background/Frame-min.png"
            alt=""
            style={{ position: 'absolute' }}
            className="tablet:hidden laptop:block  laptop:top-[70%] laptop:left-1/4 w-96 h-52 -z-10  desktop:pl-40 desktop:left-2/4 desktop:top-2/4 "
          />
          <div className="tablet:hidden laptop:block">
            <StaticImage
              layout="fullWidth"
              src="../../images/background/backgroundBlu.jpg"
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
          <List data={data} icons={svg} />
        </div>
      </div>
    </Section>
  );
};

export default Steps;
