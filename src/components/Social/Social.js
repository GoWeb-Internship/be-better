import React from 'react';

import { FaTelegramPlane } from 'react-icons/fa';
import { RiWhatsappLine } from 'react-icons/ri';
import { TiSocialFacebook } from 'react-icons/ti';
import { TbBrandInstagram } from 'react-icons/tb';
import { TiSocialLinkedin } from 'react-icons/ti';

const Social = () => {
  return (
    <div>
    <div>
      <a
        href='https://instagram.com/yuliya_shayenko?igshid=YmMyMTA2M2Y='
        target="blank"
        rel="noreferrer noopener"
        
    >
<TbBrandInstagram className='w-11 h-11  bg-main text-white rounded-lg cursor-pointer mb-4 hover:text-main hover:bg-white'/>

    </a>
    </div>

    <div>
      <a
        href='https://www.facebook.com/Yuliya.Shayenko'
        target="blank"
        rel="noreferrer noopener"
        
    >
<TiSocialFacebook className='w-11 h-11 bg-main text-white rounded-lg cursor-pointer mb-4  hover:text-main hover:bg-white'/>
    </a>
    </div>

    <div>
      <a
        href="https://www.linkedin.com/in/yshayenko/"
        target="blank"
        rel="noreferrer noopener"
       
    >
<TiSocialLinkedin className='w-11 h-11  bg-main text-white rounded-lg cursor-pointer mb-4  hover:text-main hover:bg-white'/>
    </a>
    </div>

    <div>
       <a
        href='https://t.me/Petmel'
        text="hello"
        target="blank"
        rel="noreferrer noopener"
    >
<FaTelegramPlane className='w-11 h-11  bg-main text-white rounded-lg cursor-pointer mb-4  hover:text-main hover:bg-white'/>
    </a> 
    </div>

    <div>
      <a
        href="https://api.whatsapp.com/send?phone=380969019037"
        target="blank"
        rel="noreferrer noopener"
       
    >
<RiWhatsappLine className='w-11 h-11  bg-main text-white rounded-lg cursor-pointer mb-4  hover:text-main hover:bg-white'/>
    </a>
    </div>

    
</div>
  );
};

export default Social;
