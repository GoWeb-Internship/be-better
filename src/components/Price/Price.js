import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Section from '../reusableComponents/Section';
import { container, list, item, title } from './Price.module.css';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import PriceCard from './PriceCard';
import Donations from '../Donations';
import ModalPriceWindow from './ModalPriceWindow';

const Price = () => {
  const [modal, setModal] = useState(false);
  const [currentPrice, setCurrentPrice] = useState('');
  const [currentRate, setCurrentRate] = useState('');

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/price/" } }) {
        nodes {
          frontmatter {
            ukSubscription
            price
            economy
            ukMonth
            ukHour
            enSubscription
            enMonth
            enHour
            ruSubscription
            ruMonth
            ruHour
          }
          id
        }
      }
    }
  `);

  const data = allMarkdownRemark.nodes;
  const { t } = useTranslation();

  const pricePac = t('price', { returnObjects: true });

  useEffect(() => {
    switch (currentPrice) {
      case '$320':
        setCurrentRate('Basic');
        break;

      case '$600':
        setCurrentRate('Standard');
        break;

      case '$850':
        setCurrentRate('Professional');
        break;

      default:
        setCurrentRate('');
    }
  }, [currentPrice]);

  const showModal = price => {
    setCurrentPrice(`$${price}`);
    setModal(true);
  };

  const hideModal = () => {
    setModal(false);
  };

  return (
    <Section className={container} id="nav-price">
      <h1 className={title}>{pricePac.title}</h1>
      <ul className={list}>
        {allMarkdownRemark &&
          data.map(({ frontmatter }, id) => {
            return (
              <li className={item} key={id}>
                <PriceCard priceData={frontmatter} onClick={showModal} />
              </li>
            );
          })}
      </ul>
      {modal && (
        <ModalPriceWindow
          hideModal={hideModal}
          currentRate={currentRate}
          currentPrice={currentPrice}
        />
      )}
      <Donations />
    </Section>
  );
};

export default Price;
