import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { RiWhatsappLine } from 'react-icons/ri';
import { TiSocialFacebook } from 'react-icons/ti';
import { TbBrandInstagram } from 'react-icons/tb';
import { TiSocialLinkedin } from 'react-icons/ti';
import { social } from './Social.module.css';

const Social = () => {
  return (
    <ul className="flex flex-col space-y-8 ">
      <li className="flex justify-center items-center w-11 h-11 bg-main text-white border border-main rounded-2xl hover:bg-white hover:text-main transition">
        <a
          href="https://instagram.com/yuliya_shayenko?igshid=YmMyMTA2M2Y="
          target="blank"
          rel="noreferrer noopener"
        >
          <TbBrandInstagram className="w-6 h-6  fill-inherit" />
        </a>
      </li>
      <li className="flex justify-center items-center w-11 h-11 bg-main text-white border border-main rounded-2xl hover:bg-white hover:text-main transition">
        <a
          href="https://www.facebook.com/Yuliya.Shayenko"
          target="blank"
          rel="noreferrer noopener"
        >
          <TiSocialFacebook className="w-6 h-6  fill-inherit" />
        </a>
      </li>
      <li className="flex justify-center items-center w-11 h-11 bg-main text-white border border-main rounded-2xl hover:bg-white hover:text-main transition">
        <a
          href="https://www.linkedin.com/in/yshayenko/"
          target="blank"
          rel="noreferrer noopener"
        >
          <TiSocialLinkedin className="w-6 h-6 fill-inherit " />
        </a>
      </li>
    </ul>
    //     <div className='pt-4 mr-14 mt-5'>
    //     <div>
    //       <a
    //         href='https://instagram.com/yuliya_shayenko?igshid=YmMyMTA2M2Y='
    //         target="blank"
    //         rel="noreferrer noopener"

    //     >
    // <TbBrandInstagram className={social}/>

    //     </a>
    //     </div>

    //     <div>
    //       <a
    //         href='https://www.facebook.com/Yuliya.Shayenko'
    //         target="blank"
    //         rel="noreferrer noopener"

    //     >
    // <TiSocialFacebook className={social}/>
    //     </a>
    //     </div>

    //     <div>
    //       <a
    //         href="https://www.linkedin.com/in/yshayenko/"
    //         target="blank"
    //         rel="noreferrer noopener"

    //     >
    // <TiSocialLinkedin className={social}/>
    //     </a>
    //     </div>

    //     <div>
    //        <a
    //         href='https://t.me/Petmel'
    //         text="hello"
    //         target="blank"
    //         rel="noreferrer noopener"
    //     >
    // <FaTelegramPlane className={social}/>
    //     </a>
    //     </div>

    //     <div>
    //       <a
    //         href="https://api.whatsapp.com/send?phone=380969019037"
    //         target="blank"
    //         rel="noreferrer noopener"

    //     >
    // <RiWhatsappLine className={social}/>
    //     </a>
    //     </div>

    // </div>
  );
};

export default Social;
