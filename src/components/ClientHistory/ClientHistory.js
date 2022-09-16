import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import loadable from '@loadable/component';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { useMedia } from 'react-use';

import Section from 'components/reusableComponents/Section';
import Heading from 'components/reusableComponents/Heading';
import ClientHistoryListSkeleton from './ClientHistoryListSkeleton';
import ObserverWrapper from 'components/ObserverWrapper/ObserverWrapper';

import { title, icon } from './ClientHistory.module.css';

import { FaQuoteLeft } from 'react-icons/fa';

import StoriesBackground from 'images/vectorBackgrounds/stories.inline.svg';

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
      className="py-8 laptop:pt-20 laptop:pb-[50px] desktop:pb-[77px] overflow-hidden desktop:overflow-visible z-auto"
      id="client"
      Background={StoriesBackground}
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
