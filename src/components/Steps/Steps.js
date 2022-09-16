import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';

import useMediaRules from 'helpers/getMedia';
import Section from 'components/reusableComponents/Section';
import List from 'components/reusableComponents/Page';

import svg from 'images/iconku.svg';

const Steps = () => {
  const { t } = useTranslation();
  const data = t('steps', { returnObjects: true });
  const media = useMediaRules();

  return (
    <Section className="laptop:pb-16" id="steps">
      <div className="relative max-h-full">
        {media === 'desktop' && (
          <StaticImage
            layout="fullWidth"
            src="../../images/results.png"
            alt={data.background}
            style={{ position: 'absolute' }}
            className="-z-20 w-full h-full"
            formats={['auto', 'webp']}
          />
        )}
        {media === 'tablet' && (
          <StaticImage
            layout="fullWidth"
            src="../../images/group.png"
            alt={data.background}
            style={{ position: 'absolute' }}
            className="-z-20 w-full h-full"
            formats={['auto', 'webp']}
          />
        )}
        {media === 'mobile' && (
          <StaticImage
            layout="fullWidth"
            src="../../images/vanMin.png"
            alt={data.background}
            style={{ position: 'absolute' }}
            className="-z-20 w-full h-full"
            formats={['auto', 'webp']}
          />
        )}
        <List data={data} icons={svg} />
      </div>
    </Section>
  );
};

export default Steps;
