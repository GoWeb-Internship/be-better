import React from 'react';
import instagram from '../../images/instag.svg'
import facebook from '../../images/facebook.svg'
import telegram from '../../images/teleg.svg'
import whatApp from '../../images/watApp.svg'
import linkudun from '../../images/linkudun.svg'

// import instagran from '../../images/symbol-defs.svg/#icon-instag'


const Social = () => {
  return (
    <div className='flex'>
    <div>
      <a
        href='https://instagram.com/yuliya_shayenko?igshid=YmMyMTA2M2Y='
        target="blank"
        rel="noreferrer noopener"
        
    >
{/* <img src={instagram}  alt="instagram"/> */}
<svg><use href='../../images/symbol-defs.svg/#icon-instag'></use></svg>
    </a>
    </div>

    <div>
      <a
        href='https://www.facebook.com/Yuliya.Shayenko'
        target="blank"
        rel="noreferrer noopener"
        
    >
<img src={facebook}  alt="faceebok"/>
    </a>
    </div>



    <div>
       <a
        href='https://t.me/Petmel'
        text="hello"
        target="blank"
        rel="noreferrer noopener"
    >
<img src={telegram}  alt="telegram"/>
    </a> 
   
    </div>


    <div>
      <a
        href="https://api.whatsapp.com/send?phone=380969019037"
        target="blank"
        rel="noreferrer noopener"
       
    >
<img src={whatApp}  alt="whatApp"/>
    </a>
    </div>

    <div>
      <a
        href="https://www.linkedin.com/in/yshayenko/"
        target="blank"
        rel="noreferrer noopener"
       
    >
<img src={linkudun}  alt="linkudun"/>
    </a>
    </div>
</div>
  );
};

export default Social;
