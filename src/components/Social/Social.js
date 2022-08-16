import React from 'react';
import instagram from '../../images/inst.png';
import facebook from '../../images/facebook.png';
import telegram from '../../images/telegram.png';
import whatApp from '../../images/whatApp.png';

const Social = () => {
  return (
    <div className="flex">
      <div>
        <a
          href="https://www.instagram.com/"
          target="blank"
          rel="noreferrer noopener"
        >
          <img src={instagram} alt="instagram" />
        </a>
      </div>

      <div>
        <a
          href="https://uk-ua.facebook.com/"
          target="blank"
          rel="noreferrer noopener"
        >
          <img src={facebook} alt="faceebok" />
        </a>
      </div>

      <div>
        <a
          href="https://t.me/Petmel"
          text="hello"
          target="blank"
          rel="noreferrer noopener"
        >
          <img src={telegram} alt="telegram" />
        </a>
      </div>

      <div>
        <a
          href="https://api.whatsapp.com/send?phone=380969019037"
          target="blank"
          rel="noreferrer noopener"
        >
          <img src={whatApp} alt="whatApp" />
        </a>
      </div>
    </div>
  );
};

export default Social;
