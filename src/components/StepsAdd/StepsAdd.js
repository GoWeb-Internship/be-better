import React from 'react'
import Section from '../reusableComponents/Section'
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';
import Steps from '../Steps';

const StepsAdd = () => {
  const { t } = useTranslation();
  const data = t('stepsAdd', { returnObjects: true });
  return (
    <Section className="pt-20 pb-16 relative">
    <StaticImage
          layout="fullWidth"
          src="../../images/background/black-min.png"
          alt=""
          style={{ position: 'absolute' }}
          className="-z-20 w-full h-full"
        />
    <div className="flex px-46 ">
    </div>
    <Steps />
  </Section>
  )
}

export default StepsAdd
