import React from 'react';
import instagram from '../../images/instag.svg'
import facebook from '../../images/facebook.svg'
import telegram from '../../images/teleg.svg'
import whatApp from '../../images/watApp.svg'
import linkudun from '../../images/linkudun.svg'


const Social = () => {
  return (
    <div className='flex'>
    <div>
      <Link
        to='https://instagram.com/yuliya_shayenko?igshid=YmMyMTA2M2Y='
        target="blank"
        rel="noreferrer noopener"
        
    >
<img src={instagram}  alt="instagram"/>
    </Link>
    </div>

    <div>
      <Link
        to='https://www.facebook.com/Yuliya.Shayenko'
        target="blank"
        rel="noreferrer noopener"
        
    >
<img src={facebook}  alt="faceebok"/>
    </Link>
    </div>



    <div>
       <Link
        to='https://t.me/Petmel'
        text="hello"
        target="blank"
        rel="noreferrer noopener"
    >
<img src={telegram}  alt="telegram"/>
    </Link> 
   
    </div>


    <div>
      <Link
        to="https://api.whatsapp.com/send?phone=380969019037"
        target="blank"
        rel="noreferrer noopener"
       
    >
<img src={whatApp}  alt="whatApp"/>
    </Link>
    </div>

    <div>
      <Link
        to="https://www.linkedin.com/in/yshayenko/"
        target="blank"
        rel="noreferrer noopener"
       
    >
<img src={linkudun}  alt="linkudun"/>
    </Link>
    </div>
</div>
  );
};

export default Social;
