import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Button from '../reusableComponents/Button';
import {
  container,
  list,
  item,
  modalform,
  formtitle,
  formmargin,
  formtext,
  accenttext,
  price,
} from './Price.module.css';
import ModalWindow from '../ModalWindow';
import Form from '../Form';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Price = () => {
  const [modal, setModal] = useState(false);
  const [currentPrice, setCurrentPrice] = useState('');
  const [currentRate, setCurrentRate] = useState('');

  // const { allMarkdownRemark } = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/price/" } }) {
  //       nodes {
  //         html
  //         frontmatter {
  //           hour
  //           month
  //           price
  //           economy
  //         }
  //         id
  //       }
  //     }
  //   }
  // `);
  // const data = allMarkdownRemark.nodes;
  const { t } = useTranslation();
  const buttonTranslate = t('littleComponents', { returnObjects: true });

  useEffect(() => {
    switch (currentPrice) {
      case '$320':
        setCurrentRate('Минимальный');
        break;

      case '$600':
        setCurrentRate('Базовый');
        break;

      case '$850':
        setCurrentRate('Оптимальный');
        break;

      default:
        setCurrentRate('');
    }
  }, [currentPrice]);

  const showModal = price => {
    setCurrentPrice(price);
    setModal(true);
  };

  const hideModal = () => {
    setModal(false);
  };

  return (
    <section className={container} id="nav-price">
      <h1>Price</h1>
      <ul className={list}>
        {/* {allMarkdownRemark &&
          data.map(({ id, frontmatter: { hour, month, price, economy } }) => {
            return (
              <li className={item} key={id}>
                <p>{price}</p>
                {economy && <p>{economy}</p>}
                <p>{month}</p>
                <p>{hour}</p>
                <Button
                  type="button"
                  className="border border-gray-300 px-16 py-2 rounded-3xl"
                  doAction={() => showModal(price)}
                >
                  {buttonTranslate.button}
                </Button>
              </li>
            );
          })} */}
      </ul>
      {modal && (
        <ModalWindow className={modalform} handleClose={hideModal}>
          <>
            <h2 className={formtitle}>Привет!</h2>
            <p className={formtext}>
              Ты выбрал пакет{' '}
              <span className={accenttext}>"{currentRate}"</span>
            </p>
            <p className={price}>{currentPrice}</p>
            <Form
              clickFrom={currentPrice}
              formClassname={formmargin}
              checkboxClassname="mb-8"
              closeFormModal={hideModal}
            />
            <p className={formtext}>Я скоро свяжусь с тобой!</p>
          </>
        </ModalWindow>
      )}
    </section>
  );
};

export default Price;
