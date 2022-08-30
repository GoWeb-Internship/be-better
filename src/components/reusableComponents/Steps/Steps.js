import React from 'react';
import { IconContext } from 'react-icons';
import {
  titleFacts,
  listFacts,
  itemFacts,
  itemFactsMob,
  textPrP,
  iconClass,
  textSteps,
} from './Steps.module.css';
import { useMedia } from 'react-use';
import { FaRegHandPaper} from 'react-icons/fa';
import {MdOutlineChat} from 'react-icons/md';
import {BsBarChartSteps, BsCalendarCheck} from 'react-icons/bs';
import {ImPower} from 'react-icons/im';
import {AiOutlineSearch} from 'react-icons/ai';



const stepsIcons = [
  <FaRegHandPaper/>,
  <MdOutlineChat/>,
  <BsBarChartSteps/>,
  <ImPower/>,
  <AiOutlineSearch/>,
  <BsCalendarCheck/>
]
const Steps = ({ icons = '', data = {}, img = '', icon = '' }) => {
  const isTablet = useMedia('(min-width: 768px)');

  return (
    <div className="max-w-full">
      <h3 className={titleFacts}>{data.title}</h3>
      {!!data.steps.length && (
        <ul className={`${listFacts}`}>
          {data.steps.map(({ textPrimary,  icon, textSecondary }, index) => {
            return (
              <li className={isTablet ? itemFacts : itemFactsMob} key={icons}>

                <div className="flex items-center gap-[10px] mb-1">
                <IconContext.Provider
                 value={{
                  className: 'm-0 w-[22px] h-[22px]',
                  color: 'red'
                }}
                  >
                    {stepsIcons[index]}
                    </IconContext.Provider>

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
