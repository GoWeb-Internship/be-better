import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import {
  formulaContainer,
  list,
  itemLi,
  title,
  iconArrow,
  text,
} from './Formula.module.css';
import Section from '../reusableComponents/Section';
import BackgroundImg from '../reusableComponents/BackgroundImg';
import { IoIosArrowRoundDown } from 'react-icons/io';
import svg from '../../images/formulaIcons.svg';

const Formula = () => {
  const { t } = useTranslation();
  const data = t('formula', { returnObjects: true });

  const image = useStaticQuery(graphql`
    query {
      file(name: { eq: "backgroundBlu" }) {
        id
        publicURL
        childImageSharp {
          gatsbyImageData
          id
        }
      }
    }
  `);

  return (
    <Section className={formulaContainer}>
      <BackgroundImg data={image} />
      <h3 className={title}>{data.title}</h3>
      <ul className={list}>
        {data.list.map(item => (
          <div key={item} className="flex flex-col items-center">
            <li className={itemLi}>
              <p className={text}>{item}</p>
            </li>
            <IoIosArrowRoundDown className={iconArrow} />
          </div>
        ))}
      </ul>
    </Section>
  );
};

export default Formula;
