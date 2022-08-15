import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Button from '../reusableComponents/Button';
import { container, list, item } from './Price.module.css';
import ModalWindow from '../ModalWindow';
import Form from '../Form';

const Price = () => {
  const [modal, setModal] = React.useState(false);
  const [currentPrice, setCurrentPrice] = React.useState('');

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/price/" } }) {
        nodes {
          html
          frontmatter {
            hour
            month
            price
            economy
          }
          id
        }
      }
    }
  `);
  const data = allMarkdownRemark.nodes;

  const showModal = price => {
    setCurrentPrice(price);
    setModal(true);
  };

  const hideModal = () => {
    setModal(false);
  };

  return (
    <div className={container} id="nav-price">
      <h1>Price</h1>
      <ul className={list}>
        {allMarkdownRemark &&
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
                  Записаться
                </Button>
              </li>
            );
          })}
      </ul>
      {modal && (
        <ModalWindow handleClose={hideModal}>
          <Form
            title="Привет!Я скоро свяжусь с тобой!"
            seeYou="Увидимся!"
            clickFrom={currentPrice}
          />
        </ModalWindow>
      )}
    </div>
  );
};

export default Price;
