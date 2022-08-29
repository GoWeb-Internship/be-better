import React, { useState } from 'react';
import Section from '../reusableComponents/Section';
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import {
  couchContainer,
  flexContainer,
  mainImg,
  title,
  caveat,
  button,
} from './Couch.module.css';
import Button from '../reusableComponents/Button';
import FormInModal from '../Form/FormInModal';

const Couch = () => {
  const [modal, setModal] = useState(false);
  const [currentChange, setCurrentChange] = useState('');
  const { t } = useTranslation();

  const form = t('form', { returnObjects: true });
  const couch = t('couch', { returnObjects: true });

  const showModal = change => {
    setCurrentChange(change);
    setModal(true);
  };
  const hideModal = () => {
    setModal(false);
  };
  return (
    <Section className={couchContainer}>
      <div className={flexContainer}>
        <div className="flex laptop:block">
          <h3 className={`${title} laptop:hidden`}>{couch.title}</h3>
          <div className=" hidden laptop:block">
            <StaticImage
              placeholder="blurred"
              layout="constrained"
              formats={['auto', 'webp', 'avif']}
              alt="author with notebook"
              src="../../images/withNote.jpg"
              className={`${mainImg}`}
            />
          </div>
          <div className="laptop:hidden">
            <StaticImage
              placeholder="blurred"
              layout="constrained"
              formats={['auto', 'webp', 'avif']}
              alt="author with notebook"
              src="../../images/withNoteMob.jpg"
              className={`${mainImg} `}
            />
          </div>
        </div>

        <div>
          <div className="laptop:w-[310px] desktop:w-[326px] relative laptop:leading-[1.36]">
            <h3 className={`${title} hidden laptop:block`}>{couch.title}</h3>
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
            <StaticImage
              src="../../images/note.jpg"
              placeholder="blurred"
              formats={['auto', 'webp', 'avif']}
              layout="fullWidth"
              alt="notebook"
              className="mt-4 rounded-2xl desktop:w-[416px] desktop:h-[280px]"
            />
            <p className="mt-[58px] w-[280px] desktop:w-81">{couch.why}</p>
            <div className="desktop:hidden">
              <Button
                type="button"
                className={`${button}  !ml-0  !mt-12 `}
                doAction={() => showModal()}
              >
                {form.button}
              </Button>
            </div>
            <div className="hidden laptop:block absolute right-0 rounded-2xl mt-[20px] mr-auto">
              <StaticImage
                src="../../images/skyscraper.jpg"
                placeholder="blurred"
                formats={['auto', 'webp', 'avif']}
                width={160}
                height={176}
                layout="fixed"
                alt="skyscraper"
              />
            </div>
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
          <div className="w-[201px] h-[174px]">
            <StaticImage
              src="../../images/skyscraperMob.jpg"
              placeholder="blurred"
              formats={['auto', 'webp', 'avif']}
              layout="fullWidth"
              alt="skyscraper"
            />
          </div>
        </div>
      </div>
      {modal && <FormInModal hideModal={hideModal} currentPlace="with couch" />}
    </Section>
  );
};

export default Couch;
