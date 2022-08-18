import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { RiWhatsappLine } from 'react-icons/ri';
import { TiSocialFacebook } from 'react-icons/ti';
import { TbBrandInstagram } from 'react-icons/tb';
import { TiSocialLinkedin } from 'react-icons/ti';
import {social} from './Social.module.css';

const Social = () => {
  return (
    <div className='pt-16 mr-14'>
    <div>
      <a
        href='https://instagram.com/yuliya_shayenko?igshid=YmMyMTA2M2Y='
        target="blank"
        rel="noreferrer noopener"
        
    >
<TbBrandInstagram className={social}/>

    </a>
    </div>

    <div>
      <a
        href='https://www.facebook.com/Yuliya.Shayenko'
        target="blank"
        rel="noreferrer noopener"
        
    >
<TiSocialFacebook className={social}/>
    </a>
    </div>

    <div>
      <a
        href="https://www.linkedin.com/in/yshayenko/"
        target="blank"
        rel="noreferrer noopener"
       
    >
<TiSocialLinkedin className={social}/>
    </a>
    </div>

    <div>
       <a
        href='https://t.me/Petmel'
        text="hello"
        target="blank"
        rel="noreferrer noopener"
    >
<FaTelegramPlane className={social}/>
    </a> 
    </div>

    <div>
      <a
        href="https://api.whatsapp.com/send?phone=380969019037"
        target="blank"
        rel="noreferrer noopener"
       
    >
<RiWhatsappLine className={social}/>
    </a>
    </div>

    
</div>
  );
};

export default Social;
