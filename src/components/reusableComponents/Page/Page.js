import React from 'react'
import { titleFacts,iconFacts, listFacts, itemFacts, svgBgFacts, svgContainerFacts, textContainer, textPr, iconClass, testSec,} from './Page.module.css'

const Page = ({ icons = '', data = {}, img ='', icon='' }) => {

  return (
    <div className='max-w-full'>
      <h3 className={titleFacts}>{data.title}</h3>
      {!!data.page.length && (
        <ul className={`${listFacts}`}>
          {data.page.map(({ textPrimary, svg, img, icon, textSecondary }) => {
            return (
              <li className={itemFacts} key={icons}>
  <div className={iconClass}>
                <svg className={icons}>
                    <use  href={`${icons}#icon-${icon}`} />
                  </svg>
                </div> 
                <div className={svgContainerFacts}>
                  <svg className={iconFacts}>
                    <use href={`${icons}#icon-${img}`} />
                  </svg>
                  <p className={textPr}>{textPrimary}</p>
                </div>
                
                <div className={textContainer}>
                 
                 
                  <svg className={svgBgFacts}>
                    <use href={`${icons}#icon-${svg}`} />
                  </svg>
                </div>
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
