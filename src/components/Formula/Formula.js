import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { formulaContainer, list, itemLi, title } from './Formula.module.css';
const Formula = () => {
  const { t } = useTranslation();
  const data = t('formula', { returnObjects: true });

  return (
    <div className={formulaContainer}>
      <h3 className={title}>{data.title}</h3>
      <ul className={list}>
        {data.list.map(item => (
          <li className={itemLi} key={item}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Formula;
