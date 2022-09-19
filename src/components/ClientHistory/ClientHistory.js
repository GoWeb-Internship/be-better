import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import loadable from '@loadable/component';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Section from 'components/reusableComponents/Section';
import Heading from 'components/reusableComponents/Heading';
import ClientHistoryListSkeleton from './ClientHistoryListSkeleton';
import ObserverWrapper from 'components/ObserverWrapper/ObserverWrapper';
import useMediaRules from 'helpers/getMedia';

import { title, icon, background } from './ClientHistory.module.css';

import { FaQuoteLeft } from 'react-icons/fa';

import Container from 'components/Container';
import useObserver from 'components/ObserverWrapper/useObserver';

const ClientHistoryList = loadable(() => import('./ClientHistoryList'));

const ClientHistory = () => {
  const [size, setSize] = useState(120);
  const [show, getRef] = useObserver();
  const media = useMediaRules();

  useEffect(() => {
    if (media === 'mobile') {
      setSize(55);
    } else if (media === 'desktop') {
      setSize(120);
    } else {
      setSize(64);
    }
  }, [media, size]);

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
      className="overflow-hidden desktop:overflow-visible"
      id="client"
      backgroundClass={show ? background : ''}
      style={{ position: 'static' }}
    >
      <Container
        className="relative py-8 laptop:pt-20 laptop:pb-[50px] desktop:pb-[77px] bg-white"
        getRef={getRef}
      >
        <Heading tag="h2" className={title} text={data.title} />

        <ObserverWrapper
          component={<ClientHistoryList clients={clients} />}
          fallback={<ClientHistoryListSkeleton clients={clients} />}
        />
        <div className={icon}>
          <FaQuoteLeft size={size} />
        </div>
      </Container>
    </Section>
  );
};

export default ClientHistory;
