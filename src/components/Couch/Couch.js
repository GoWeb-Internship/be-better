import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import loadable from '@loadable/component';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useMedia } from 'react-use';

import Section from 'components/reusableComponents/Section';
import Heading from 'components/reusableComponents/Heading';
import Button from 'components/reusableComponents/Button';
import useMediaRules from 'helpers/getMedia';

import { preloadFormInModal } from 'services/preloader';

import {
  couchContainer,
  flexContainer,
  mainImg,
  title,
  caveat,
  button,
} from './Couch.module.css';

const FormInModal = loadable(() => import('components/Form/FormInModal'));

const Couch = () => {
  const [modal, setModal] = useState(false);
  const { t } = useTranslation();
  const form = t('form', { returnObjects: true });
  const couch = t('couch', { returnObjects: true });
  const media = useMediaRules();

  const foto = useStaticQuery(graphql`
    query {
      avatarWithNote: file(name: { eq: "withNote" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            layout: CONSTRAINED
          )
        }
      }
      avatarWithNoteMob: file(name: { eq: "withNoteMob" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            layout: CONSTRAINED
          )
        }
      }
      notebook: file(name: { eq: "note" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      skyscraper: file(name: { eq: "skyscraper" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      skyscraperMob: file(name: { eq: "skyscraperMob" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
    }
  `);

  const isMobile = useMedia('(max-width:767px)');
  const isDesktop = useMedia('(min-width:1440px)');

  const smartScreenAvatar = foto.avatarWithNote.childImageSharp.gatsbyImageData;
  const DesktopScreenAvatar =
    foto.avatarWithNoteMob.childImageSharp.gatsbyImageData;
  const notebookImg = foto.notebook.childImageSharp.gatsbyImageData;
  const skyscraper = foto.skyscraper.childImageSharp.gatsbyImageData;
  const skyscraperMob = foto.skyscraperMob.childImageSharp.gatsbyImageData;

  const showModal = () => {
    setModal(true);
  };
  const hideModal = () => {
    setModal(false);
  };
  return (
    <Section className={couchContainer} id="couch">
      <div className={flexContainer}>
        <div className="flex laptop:block">
          <Heading
            tag="h2"
            className={`${title} laptop:hidden`}
            text={couch.title}
          />
          {isMobile ? (
            <GatsbyImage
              image={DesktopScreenAvatar}
              alt={couch.withNote}
              className={mainImg}
            />
          ) : (
            <GatsbyImage
              image={smartScreenAvatar}
              alt={couch.withNote}
              className={mainImg}
            />
          )}
        </div>

        <div>
          <div className="laptop:w-[310px] desktop:w-[326px] relative laptop:leading-[1.36]">
            <Heading
              tag="h3"
              className={`${title} hidden laptop:block`}
              text={couch.title}
            />
            <p className="mb-2 laptop:mb-4 desktop:mb-6 ">{couch.mySelf}</p>
            <p className="mb-2 laptop:mb-4 desktop:mb-6 ">{couch.course}</p>
            <p className="desktop:mb-12 ">{couch.noTime}</p>
            <p className={`${caveat} hidden laptop:hidden desktop:block`}>
              {couch.mySelf}
            </p>

            {media === 'desktop' && (
              <Button
                id="button-couch"
                type="button"
                className={`${button} !mt-[180px]`}
                doAction={() => showModal()}
              >
                {form.button}
              </Button>
            )}
          </div>
        </div>
        {media !== 'tablet' && (
          <div className="relative">
            <div>
              {(isMobile || isDesktop) && (
                <GatsbyImage
                  image={notebookImg}
                  alt={couch.notebook}
                  className="mt-4 rounded-2xl desktop:w-[416px] desktop:h-[280px] "
                />
              )}

              <p className="mt-[58px] w-[280px] desktop:w-81">{couch.why}</p>

              {!isDesktop && (
                <Button
                  type="button"
                  className={`${button}  !ml-0  !mt-12 `}
                  doAction={() => showModal()}
                >
                  {form.button}
                </Button>
              )}

              {!isMobile && (
                <div className="absolute right-0 rounded-2xl mt-[20px] mr-auto">
                  <GatsbyImage
                    image={skyscraper}
                    alt={couch.skyscraper}
                    className="w-[160px] h-[176px]"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {media === 'tablet' && (
        <div className="laptop:mt-8 laptop:w-auto">
          <p className="laptop:w-auto">{couch.why}</p>
          <div className="flex justify-between mt-8">
            <div className="w-[420px] ">
              <p className="text-caveat leading-[1.08]">{couch.mySelf}</p>
              <Button
                type="button"
                className={`${button} !ml-0  !mt-12 `}
                doAction={() => showModal()}
                onMouseOver={preloadFormInModal}
                onTouchStart={preloadFormInModal}
              >
                {form.button}
              </Button>
            </div>
            <GatsbyImage
              image={skyscraperMob}
              className="w-[201px] h-[174px]"
              alt={couch.skyscraper}
            />
          </div>
        </div>
      )}

      {modal && <FormInModal hideModal={hideModal} currentPlace="with couch" />}
    </Section>
  );
};

export default Couch;
