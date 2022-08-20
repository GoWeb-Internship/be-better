import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../reusableComponents/Button';
import PropTypes from 'prop-types';

const PriceCard = ({ priceData = {}, onClick }) => {
  const { t, i18n } = useTranslation();
  const buttonTranslate = t('littleComponents', { returnObjects: true });
  const price = t('price', { returnObjects: true });

  const economy = Boolean(priceData.economy) ? 'opacity-100' : 'opacity-0';
  return (
    <>
      <p className=" text-xl font-medium mb-14  ">
        {priceData[`${i18n.language}Subscription`]}
      </p>
      <p className=" mb-2 ">${priceData.price}</p>
      <p className={`${economy} mb-16 text-main `}>
        {price.economy} ${priceData.economy}
      </p>
      <p className="mb-2">{priceData[`${i18n.language}Hour`]}</p>
      <p className=" mb-6 text-likeGrey ">
        {priceData[`${i18n.language}Month`]}
      </p>
      <Button
        type="button"
        className="border border-gray-300 px-16 py-2 rounded-3xl"
        doAction={() => onClick(priceData.price)}
      >
        {buttonTranslate.button}
      </Button>
    </>
  );
};

export default PriceCard;
PriceCard.propTypes = {
  priceData: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
