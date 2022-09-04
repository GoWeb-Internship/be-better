import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Section from '../reusableComponents/Section';
import { StaticImage } from 'gatsby-plugin-image';
import { IoIosArrowRoundDown } from 'react-icons/io';
import icons from '../../images/formulaIcons.svg';
import {
  listFormula,
  formula,
  formulaContainer,
  itemFormula,
  iconFormula,
  svgBgFormula,
  svgContainerFormula,
  textContainerFormula,
  iconArrow,
  testSec,
  title,
} from './Formula.module.css';
import Heading from '../reusableComponents/Heading';

const Formula = () => {
  const { t } = useTranslation();
  const data = t('formula', { returnObjects: true });

  return (
    <Section className={formula} id="formula">
      <StaticImage
        layout="fullWidth"
        src="../../images/background/backgroundBlu.jpg"
        alt=""
        style={{ position: 'absolute' }}
        className="w-full h-full -z-10 top-0"
      />
      <div>
        <Heading tag="h2" className={title} text={data.title} />
        {/* <h2 className={title}>{data.title}</h2> */}

        {!!data.list.length && (
          <ul className={listFormula}>
            {data.list.map(({ svg, firstWord, colorWord, thirdWord }) => {
              return (
                <li key={icons} className={formulaContainer}>
                  <div className={itemFormula}>
                    <div className={textContainerFormula}>
                      <div className={svgContainerFormula}>
                        <svg className={iconFormula}>
                          <use href={`${icons}#icon-${svg}`} />
                        </svg>
                      </div>
                      <p className={testSec}>
                        {firstWord} <br />
                        <span className="text-main font-bold ">
                          {colorWord}
                        </span>
                        {thirdWord}
                      </p>
                      <svg className={svgBgFormula}>
                        <use href={`${icons}#icon-${svg}`} />
                      </svg>
                    </div>

                    <IoIosArrowRoundDown size={60} className={iconArrow} />
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </Section>
  );
};

export default Formula;
