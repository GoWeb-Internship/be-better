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

const Formula = () => {
  const { t } = useTranslation();
  const data = t('formula', { returnObjects: true });

  return (
    <Section className={formula}>
      <StaticImage
        layout="fullWidth"
        src="../../images/background/backgroundBlu.jpg"
        alt=""
        style={{ position: 'absolute' }}
        className="w-full h-full -z-10 top-0"
      />
      <div>
        <h2 className={title}>{data.title}</h2>

        {!!data.list.length && (
          <ul className={listFormula}>
            {data.list.map(({ svg, firstWord, colorWord, thirdWord }) => {
              return (
                <div key={icons} className={formulaContainer}>
                  <li className={itemFormula}>
                    <div className={svgContainerFormula}>
                      <svg className={iconFormula}>
                        <use href={`${icons}#icon-${svg}`} />
                      </svg>
                    </div>
                    <div className={textContainerFormula}>
                      <p className={testSec}>
                        {firstWord}
                        <span className="text-main font-bold ">
                          {colorWord}
                        </span>
                        {thirdWord}
                      </p>
                    </div>
                    <svg className={svgBgFormula}>
                      <use href={`${icons}#icon-${svg}`} />
                    </svg>
                  </li>
                  <IoIosArrowRoundDown size={60} className={iconArrow} />
                </div>
              );
            })}
          </ul>
        )}
      </div>
    </Section>
  );
};

export default Formula;
