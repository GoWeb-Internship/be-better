import React from 'react';
import {
  titleFacts,
  iconFactsSteps,
  listFacts,
  itemFacts,
  svgBgFacts,
  svgContainerFacts,
  textContainer,
  itemFactsMob,
  textPrP,
  stepsHeihSt,
  iconClass,
  textSteps,
} from './Steps.module.css';
import { useMedia } from 'react-use';

const Steps = ({ icons = '', data = {}, img = '', icon = '' }) => {
  const isTablet = useMedia('(min-width: 768px)');

  return (
    <div className="max-w-full">
      <h3 className={titleFacts}>{data.title}</h3>
      {!!data.steps.length && (
        <ul className={`${listFacts}`}>
          {data.steps.map(({ textPrimary, svg, img, icon, textSecondary }) => {
            return (
              <li className={isTablet ? itemFacts : itemFactsMob} key={icons}>
                <div className="flex items-center gap-[10px] mb-1">
                  <svg className="m-0 w-[22px] h-[22px]">
                    <use href={`${icons}#icon-${img}`} />
                  </svg>
                  <h3 className={textPrP}>{textPrimary}</h3>
                </div>

                <div className={iconClass}>
                  <svg className="desktop:w-[16px] desktop:h-[16px]">
                    <use href={`${icons}#icon-${icon}`} />
                  </svg>
                </div>

                {/* <div className={textContainer}></div> */}
                <p className={textSteps}>{textSecondary}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Steps;
