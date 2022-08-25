import React from 'react'
import { titleFacts,
    iconFacts,
    listFacts,
    itemFacts,
    svgBgFacts,
    svgContainerFacts,
    textContainer,
    textPrP,
    iconClass,
    testSecS,} from './Steps.module.css'

const Steps = ({ icons = '', data = {}, img ='', icon='' }) => {

  return (
    <div className='max-w-full'>
      <h3 className={titleFacts}>{data.title}</h3>
      {!!data.steps.length && (
        <ul className={`${listFacts}`}>
          {data.steps.map(({ textPrimary, svg, img, icon, textSecondary }) => {
            return (
              <li className={itemFacts} key={icons}>
            <div><p className={textPrP}>{textPrimary}</p></div>

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
                  <p className={testSecS}>{textSecondary}</p>
                
              </li>
            );
          })}
        </ul>
      )}
    </div>
  )

}

export default Steps
