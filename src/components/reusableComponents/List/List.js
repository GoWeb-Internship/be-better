import React from 'react';
import {
  titleFacts,
  iconFacts,
  titleFormula,
  listFacts,
  listFormula,
  iconFormula,
  itemFacts,
  itemFormula,
  bgFacts,
  svgBgFormula,
  svgContainerFacts,
  textContainer,
  textPr,
  svgContainerFormula,
  iconArrow,
  testSec,
  formulaContainer,
  textContainerFormula,
} from './List.module.css';
import { IoIosArrowRoundDown } from 'react-icons/io';

const List = ({ icons = '', data = {}, formula = false }) => {
  if (formula) {
    return (
      <div>
        <h3 className={titleFormula}>{data.title}</h3>
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
                  <IoIosArrowRoundDown className={iconArrow} />
                </div>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
  return (
    <div>
      <h3 className={titleFacts}>{data.title}</h3>
      {!!data.list.length && (
        <ul className={`${listFacts}`}>
          {data.list.map(({ textPrimary, svg, textSecondary, bg }) => {
            return (
              <li className={itemFacts} key={icons}>
                <div className={svgContainerFacts}>
                  <svg className={iconFacts}>
                    <use href={`${icons}#icon-${svg}`} />
                  </svg>
                </div>
                <div className={textContainer}>
                  <p className={textPr}>{textPrimary}</p>
                  <p className={testSec}>{textSecondary}</p>
                  <p className={bgFacts}>{bg}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default List;
