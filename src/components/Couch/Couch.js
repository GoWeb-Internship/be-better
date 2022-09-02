import React, { useState } from 'react';
import Section from '../reusableComponents/Section';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';
import {
  couchContainer,
  flexContainer,
  mainImg,
  title,
  caveat,
  button,
} from './Couch.module.css';
import Button from '../reusableComponents/Button';
// import FormInModal from '../Form/FormInModal';
import { useMedia } from 'react-use';
import loadable from '@loadable/component';
import Heading from '../reusableComponents/Heading';

const FormInModal = loadable(() => import('../Form/FormInModal'));

const Couch = () => {
  const [modal, setModal] = useState(false);
  const [currentChange, setCurrentChange] = useState('');
  const { t } = useTranslation();
  const form = t('form', { returnObjects: true });
  const couch = t('couch', { returnObjects: true });

  const foto = useStaticQuery(graphql`
    query {
      avatarWithNote: file(name: { eq: "withNote" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
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
            formats: [AUTO, WEBP, AVIF]
            layout: CONSTRAINED
          )
        }
      }
      notebook: file(name: { eq: "note" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      skyscraper: file(name: { eq: "skyscraper" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      skyscraperMob: file(name: { eq: "skyscraperMob" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
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

  const showModal = change => {
    setCurrentChange(change);
    setModal(true);
  };
  const hideModal = () => {
    setModal(false);
  };
  return (
    <Section className={couchContainer} id="couch">
      <div className={flexContainer}>
        <div className="flex laptop:block">
          {/* <h2 className={`${title} laptop:hidden`}>{couch.title}</h2> */}
          <Heading
            tag="h2"
            className={`${title} laptop:hidden`}
            text={couch.title}
          />
          {isMobile ? (
            <GatsbyImage
              image={DesktopScreenAvatar}
              alt="author with notebook"
              className={mainImg}
            />
          ) : (
            <GatsbyImage
              image={smartScreenAvatar}
              alt="author with notebook"
              className={mainImg}
            />
          )}
        </div>

        <div>
          <div className="laptop:w-[310px] desktop:w-[326px] relative laptop:leading-[1.36]">
            {/* <h3 className={`${title} hidden laptop:block`}>{couch.title}</h3> */}
            <Heading
              tag="h2"
              className={`${title} hidden laptop:block`}
              text={couch.title}
            />
            <p className="mb-2 laptop:mb-4 desktop:mb-6 ">{couch.mySelf}</p>
            <p className="mb-2 laptop:mb-4 desktop:mb-6 ">{couch.course}</p>
            <p className="desktop:mb-12 ">{couch.noTime}</p>
            <p className={`${caveat} hidden laptop:hidden desktop:block`}>
              {couch.mySelf}
            </p>
            <div className=" hidden desktop:block">
              <Button
                type="button"
                className={`${button} !mt-[180px]`}
                doAction={() => showModal()}
              >
                {form.button}
              </Button>
            </div>
          </div>
        </div>
        <div className="relative laptop:hidden desktop:block">
          <div className=" laptop:hidden desktop:block">
            {(isMobile || isDesktop) && (
              <GatsbyImage
                image={notebookImg}
                alt="notebook"
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
                  alt="skyscraper"
                  className="w-[160px] h-[176px]"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="hidden laptop:block laptop:mt-8 laptop:w-auto desktop:hidden">
        <p className="laptop:w-auto">{couch.why}</p>
        <div className="flex justify-between mt-8">
          <div className="w-[420px] ">
            <p className="text-caveat leading-[1.08]">{couch.mySelf}</p>
            <Button
              type="button"
              className={`${button} !ml-0  !mt-12 `}
              doAction={() => showModal()}
            >
              {form.button}
            </Button>
          </div>
          <GatsbyImage
            image={skyscraperMob}
            className="w-[201px] h-[174px]"
            alt="skyscraper"
          />
        </div>
      </div>
      {modal && <FormInModal hideModal={hideModal} currentPlace="with couch" />}
    </Section>
  );
};

export default Couch;
