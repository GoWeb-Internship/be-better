import React, { useEffect, useState } from 'react';
import loadable from '@loadable/component';
import { useMedia } from 'react-use';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Heading from '../reusableComponents/Heading';
import ObserverWrapper from '../ObserverWrapper/ObserverWrapper';
import ReviewsListSkeleton from './ReviewsListSkeleton';

import { title } from './Reviews.module.css';
import { CgQuote } from 'react-icons/cg';

const ReviewsList = loadable(() => import('./ReviewsList'));

const Reviews = () => {
  const [slide, setSlide] = useState(3);

  const { t } = useTranslation();
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/reviews/" } }) {
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
            image {
              id
              childImageSharp {
                gatsbyImageData
                id
              }
            }
          }
          id
        }
      }
    }
  `);
  const clients = allMarkdownRemark.nodes;

  const isMobile = useMedia('(max-width:767px)');

  const isDesktop = useMedia('(min-width:1440px)');

  useEffect(() => {
    if (isMobile) {
      setSlide(1);
    } else if (isDesktop) {
      setSlide(3);
    } else {
      setSlide(2);
    }
  }, [isMobile, isDesktop, slide]);

  const reviews = t('reviews', { returnObjects: true });

  return (
    <div
      id="nav-reviews"
      className="px-5 mt-[73px] laptop:mt-[324px] desktop:mt-[160px] pb-[83px] laptop:pb-[131px] desktop:pb-[142px] relative"
    >
      <Heading tag="h2" className={title} text={reviews.title} />

      <CgQuote
        className="text-mainSecond absolute top-0 -left-[15px] desktop:left-[60px] "
        size={120}
      />

      <ObserverWrapper
        component={<ReviewsList reviewsData={clients} slidesPerView={slide} />}
        fallback={<ReviewsListSkeleton reviewsData={clients} />}
      />

      {!isMobile && (
        <CgQuote
          className="text-mainSecond absolute  right-[120px] bottom-[80px]"
          size={120}
        />
      )}
    </div>
  );
};

export default Reviews;
