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
  svgBgFacts,
  svgBgFormula,
  svgContainerFacts,
  textContainer,
  textPr,
  svgContainerFormula,
  iconArrow,
  testSec,
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
                <div
                  key={icons}
                  className="flex items-center flex-col desktop:flex-row"
                >
                  <li className={itemFormula}>
                    <div className={svgContainerFormula}>
                      <svg className={iconFormula}>
                        <use href={`${icons}#icon-${svg}`} />
                      </svg>
                    </div>
                    <div className={textContainer}>
                      <p className={testSec}>
                        {firstWord}
                        <span className="text-main">{colorWord}</span>
                        {thirdWord}
                      </p>
                    </div>
                    <svg className={svgBgFormula}>
                      <use href={`${icons}#icon-${svg}`} />
                    </svg>
                  </li>
                  <IoIosArrowRoundDown size={48} className={iconArrow} />
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
          {data.list.map(({ textPrimary, svg, textSecondary }) => {
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
                  <svg className={svgBgFacts}>
                    <use href={`${icons}#icon-${svg}`} />
                  </svg>
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
