import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';
import { useMedia } from 'react-use';
import Container from '../Container';
import Form from '../Form';
import Social from '../Social';
import FormWithBackground from '../Form/FormWithBackground';
import {
  footerContainer,
  gradient,
  content,
  logo,
  social,
  titleContainer,
  discountText,
  discount,
  icf,
  form,
  list,
  link,
  donate,
  title,
  price
} from './Footer.module.css';
import icons from '../../images/sprite.svg';
import Donations from '../Donations';
import WithDiscount from '../reusableComponents/WithDiscount';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const { links } = t('footer', { returnObjects: true });
  const { priceByOne } = t('footer', { returnObjects: true });

  const isDesktop = useMedia('(min-width:1440px)');

  const markdown = useStaticQuery(graphql`
    query {
      text: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/footer/" } }
      ) {
        nodes {
          html
          frontmatter {
            title
            language
          }
          id
        }
      }
    }
  `);
  const data = markdown.text.nodes;

  return (
    <footer id="nav-feedback">
      <FormWithBackground clickFrom="footer-m" />
      <div
        className={
          isDesktop ? `${footerContainer} ${gradient}` : `${footerContainer}`
        }
      >
        <Container>
          <div className={content}>
            <svg className={logo}>
              <use href={`${icons}#logo`} />
            </svg>
            <div className={social}>
              <Social
                classNameList="space-y-6 laptop:space-y-4"
                classNameLink="bg-main"
              />
              <div>
                {data.map(node => {
                  if (node.frontmatter.language === i18n.language) {
                    return (
                      <div
                        key={node.frontmatter.language}
                        className={titleContainer}
                      >
                        <h3 className={title}>{node.frontmatter.title}</h3>
                        <WithDiscount
                          classnameText={discountText}
                          classnameDiscount={discount}
                        />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div className="laptop:flex">
              <div className={icf}>
                <StaticImage src="../../images/icf.png" alt="icf" />
              </div>
              <div className={form}>
                <Form clickFrom="footer" className="-mb-4" />
              </div>
            </div>
            <Donations className={donate} classNameText="text-main " />
            <p className={price}>
              {priceByOne}
            </p>
            <ul className={list}>
              {links.map(({ name, id }) => (
                <li key={id} className={link}>
                  <Link to={`/${id}`} className='focus:text-[#038bab] focus:outline-none'>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
