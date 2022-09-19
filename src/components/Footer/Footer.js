import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';
import { useMedia } from 'react-use';

import Container from 'components/Container';
import Form from 'components/Form';
import Social from 'components/Social';
import Donations from 'components/Donations';
import WithDiscount from 'components/reusableComponents/WithDiscount';
import Heading from 'components/reusableComponents/Heading';

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
  accepttext,
  list,
  link,
  donate,
  title,
  price,
  background,
} from './Footer.module.css';

import icons from 'images/sprite.svg';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const translation = t('footer', { returnObjects: true });

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
    <footer id="nav-feedback" className={background}>
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
              <Social classNameList="space-y-6 laptop:space-y-4" />
              <div>
                {data.map((node, id) => (
                  <React.Fragment key={id}>
                    {node.frontmatter.language === i18n.language && (
                      <div
                        key={node.frontmatter.language}
                        className={titleContainer}
                      >
                        <Heading
                          tag="h2"
                          className={title}
                          text={node.frontmatter.title}
                        />
                        <WithDiscount
                          classnameText={discountText}
                          classnameDiscount={discount}
                        />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="laptop:flex laptop:flex-row-reverse laptop:-mt-2 desktop:block">
              <div className={form}>
                <Form
                  clickFrom="footer"
                  formClassname="mb-6"
                  classnameAccept={accepttext}
                />
              </div>
              <div className={icf}>
                <StaticImage
                  src="../../images/icf.png"
                  alt={translation.logo}
                />
              </div>
            </div>
            <Donations className={donate} classNameText="text-main " />
            <p className={price}>{translation.priceByOne}</p>
            <ul className={list}>
              {translation.links.map(({ name, id }) => (
                <li key={id} className={link}>
                  <Link
                    to={`/${id}`}
                    className="focus:text-[#038bab] focus:outline-none"
                  >
                    {name}
                  </Link>
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
