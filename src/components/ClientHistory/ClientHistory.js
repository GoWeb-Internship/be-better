import React, { useState, useEffect } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';
import loadable from '@loadable/component';
import Section from '../reusableComponents/Section';
import { title, icon } from './ClientHistory.module.css';
import { FaQuoteLeft } from 'react-icons/fa';
import Heading from '../reusableComponents/Heading';
import { useMedia } from 'react-use';
import ClientHistoryListSkeleton from './ClientHistoryListSkeleton';
import ObserverWrapper from '../ObserverWrapper/ObserverWrapper';

const ClientHistoryList = loadable(() => import('./ClientHistoryList'));

const ClientHistory = () => {
  const [size, setSize] = useState(120);

  const isMobile = useMedia('(max-width:767px)');

  const isDesktop = useMedia('(min-width:1440px)');

  useEffect(() => {
    if (isMobile) {
      setSize(55);
    } else if (isDesktop) {
      setSize(120);
    } else {
      setSize(64);
    }
  }, [isMobile, isDesktop, size]);

  const { t } = useTranslation();

  const data = t('clientHistory', { returnObjects: true });

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/clientHistory/" } }
      ) {
        nodes {
          frontmatter {
            ukName
            ukPosition
            ukText
            enName
            enPosition
            enText
            ruName
            ruPosition
            ruText
          }
          id
        }
      }
    }
  `);
  const clients = allMarkdownRemark.nodes;

  return (
    <Section
      className="py-8 laptop:pt-20 laptop:pb-[50px] desktop:pb-[77px] overflow-hidden"
      id="client"
    >
      <Heading tag="h2" className={title} text={data.title} />

      <ObserverWrapper
        component={<ClientHistoryList clients={clients} />}
        fallback={<ClientHistoryListSkeleton clients={clients} />}
      />

      <div className={icon}>
        <FaQuoteLeft size={size} />
      </div>
    </Section>
  );
};

export default ClientHistory;
