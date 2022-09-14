import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Section from '../reusableComponents/Section';
import List from '../reusableComponents/Page';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import svg from '../../images/iconku.svg';

const Steps = () => {
  const { t } = useTranslation();
  const data = t('steps', { returnObjects: true });


  return (
    <Section className="laptop:pb-16" id="steps">
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
          <div className="tablet:hidden laptop:block desktop:hidden laptop:w-[768px] ">
            <StaticImage
              layout="fullWidth"
              src="../../images/group.png"
              alt=""
              style={{ position: 'absolute' }}
              className="-z-20 w-full h-full"
            />
          </div>
           <div className="laptop:hidden">
            <StaticImage
              layout="fullWidth"
              src="../../images/vanMin.png"
              alt=""
              style={{ position: 'absolute' }}
              className="-z-20 w-full h-full"
            />
           </div> 
          <List data={data} icons={svg} />
        </div>
    </Section>
  );
};

export default Steps;
