import React from 'react';
import { IconContext } from 'react-icons';
import {
  titleFacts,
  listFacts,
  itemFacts,
  itemFactsMob,
  textPr,
  iconClass,
  testSec,
} from './Page.module.css';
import { useMedia } from 'react-use';
import { FaRocketchat } from 'react-icons/fa';
import { MdBookmarks, MdCenterFocusWeak } from 'react-icons/md';
import { CgArrowAlignV } from 'react-icons/cg';
import { TiArrowRepeatOutline } from 'react-icons/ti';
import { BiMedal } from 'react-icons/bi';

const stepsIcons = [
  <FaRocketchat />,
  <MdBookmarks />,
  <MdCenterFocusWeak />,
  <CgArrowAlignV />,
  <TiArrowRepeatOutline />,
  <BiMedal />,
];
const Page = ({ icons = '', data = {}, img = '', icon = '' }) => {
  const isTablet = useMedia('(min-width: 768px)');

  return (
    <div className="max-w-full pt-8 laptop:pt-20 laptop:pb-[230px] desktop:pb-[106px] desktop:h-[680px]">
      <h3 className={titleFacts}>{data.title}</h3>
      {!!data.page.length && (
        <ul className={`${listFacts}`}>
          {data.page.map(({ textPrimary, icon, textSecondary }, index) => {
            return (
              <li className={isTablet ? itemFacts : itemFactsMob} key={icons}>
                <div className="flex items-center gap-[10px] mb-1">
                  <IconContext.Provider
                    value={{
                      className: 'm-0 w-[22px] h-[22px]',
                      color: '#27B6D8',
                    }}
                  >
                    {stepsIcons[index]}
                  </IconContext.Provider>

                  <h3 className={textPr}>{textPrimary}</h3>
                </div>

                <div className={iconClass}>
                  <svg className="desktop:w-[16px] desktop:h-[16px]">
                    <use href={`${icons}#icon-${icon}`} />
                  </svg>
                </div>

                <p className={testSec}>{textSecondary}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Page;
