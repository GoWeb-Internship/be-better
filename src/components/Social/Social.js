import React from 'react';
import instagram from '../../images/instag.svg';
import facebook from '../../images/facebook.svg';
import telegram from '../../images/teleg.svg';
import whatApp from '../../images/watApp.svg';

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
