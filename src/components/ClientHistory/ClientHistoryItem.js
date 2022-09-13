import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { name, profession, slide, client } from './ClientHistory.module.css';

const ClientHistoryItem = ({ itemData }) => {
  const { i18n } = useTranslation();
  return (
    <div className={slide}>
      <div className="w-[173px]">
        <p className={name}>{itemData[`${i18n.language}Name`]}</p>
        <p className={profession}>{itemData[`${i18n.language}Position`]}</p>
      </div>
      <div className={client}>
        <p>{itemData[`${i18n.language}Text`]}</p>
      </div>
    </div>
  );
};

export default ClientHistoryItem;
