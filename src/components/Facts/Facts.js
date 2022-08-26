import React from 'react';
import Section from '../reusableComponents/Section';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';
import List from '../reusableComponents/List';
import svg from '../../images/factsIcons.svg';
import Way from '../Way';

const Facts = () => {
  const { t } = useTranslation();
  const data = t('facts', { returnObjects: true });

  return (
    <Section className="relative py-8   laptop:pt-12 laptop:pb-[104px] desktop:pt-20 desktop:pb-16 ">
      <h3 className="title-secondary mb-4 laptop:mb-8 desktop:hidden laptop:text-34">
        {data.title}
      </h3>

      <StaticImage
        layout="fullWidth"
        src="../../images/background/features.jpg"
        alt=""
        style={{ position: 'absolute' }}
        className="w-full h-full -z-10 top-0"
      />
      <div className="flex flex-col-reverse desktop:flex-row px-5 laptop:px-16  desktop:px-46 ">
        <List data={data} icons={svg} />

        <div className="desktop:hidden ">
          <StaticImage
            alt="foto"
            src="../../images/factMob.jpg"
            className="rounded-2xl desktop:ml-13 w-70 h-[200px] laptop:w-[640px] laptop:h-[440px] "
            placeholder="blurred"
            formats={['auto', 'webp', 'avif']}
          />
        </div>

        <div className="hidden desktop:block">
          <StaticImage
            alt="foto"
            src="../../images/factsFoto.jpg"
            className="rounded-2xl desktop:ml-13  desktop:w-[380px] desktop:h-[560px] "
            placeholder="blurred"
            formats={['auto', 'webp', 'avif']}
          />
        </div>
      </div>
      <Way />
    </Section>
  );
};

export default Facts;
