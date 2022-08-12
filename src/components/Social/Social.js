import { Link } from 'gatsby';
import React from 'react';
import instagram from '../../images/inst.png'
import facebook from '../../images/facebook.png'
import telegram from '../../images/telegram.png'
import whatApp from '../../images/whatApp.png'


const Social = () => {
  return (
    <div className='flex'>
    <div>
      <Link
        to='https://www.instagram.com/'
        target="blank"
        rel="noreferrer noopener"
        
    >
<img src={instagram}  alt="instagram"/>
    </Link>
    </div>

    <div>
      <Link
        to='https://uk-ua.facebook.com/'
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
        to='whatsapp://send?phone=+380962153975 text=Привет'
        target="blank"
        rel="noreferrer noopener"
       
    >
<img src={whatApp}  alt="whatApp"/>
    </Link>
    </div>
    </div>
  )
}

export default Social