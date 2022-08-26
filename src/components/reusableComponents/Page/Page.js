import React from 'react'
import { titleFacts,iconFacts, listFacts, itemFacts,itemFactsMob, svgBgFacts, svgContainerFacts, textContainer, textPr, iconClass, testSec,} from './Page.module.css'
import {useMedia} from 'react-use'

const Page = ({ icons = '', data = {}, img ='', icon='' }) => {
const isTablet = useMedia('(min-width: 768px)');

  return (
    <div className='max-w-full'>
      <h3 className={titleFacts}>{data.title}</h3>
      {!!data.page.length && (
        <ul className={`${listFacts}`}>
          {data.page.map(({ textPrimary, svg, img, icon, textSecondary }) => {
            return (
              <li className={isTablet ? itemFacts : itemFactsMob} key={icons}>
            <div><p className={textPr}>{textPrimary}</p></div>
            <div className={iconClass}>
                <svg className="tablet:hidden desktop:block  desktop:w-10 desktop:h-10 desktop:-mt-20 desktop:ml-6">
                    <use className='desktop:w-10 desktop:h-10 desktop:-mt-40'  href={`${icons}#icon-${icon}`} />
                  </svg>
                </div> 

                <div className={svgContainerFacts}>
                  <svg className={iconFacts}>
                    <use href={`${icons}#icon-${img}`} />
                  </svg>
                  
                </div>
                
                {/* <div className={textContainer}>
                 
                 
                  <svg className={svgBgFacts}>
                    <use href={`${icons}#icon-${svg}`} />
                  </svg>
                </div> */}
                  <p className={testSec}>{textSecondary}</p>
                
              </li>
            );
          })}
        </ul>
      )}
    </div>
  )

}

export default Page
