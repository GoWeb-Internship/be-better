import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useMedia } from 'react-use';
import { Link } from 'gatsby';
import { title, container, textContainer } from './NotFound.module.css';

const NotFound = () => {
  const isMobile = useMedia('(max-width:767px)');

  const foto = useStaticQuery(graphql`
    query {
      bg: file(name: { eq: "404" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      light: file(name: { eq: "light" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  const bgFoto = foto.bg.childImageSharp.gatsbyImageData;
  const badWeather = foto.light.childImageSharp.gatsbyImageData;
  return (
    <div className={container}>
      <GatsbyImage
        image={bgFoto}
        style={{ position: 'absolute' }}
        className="w-full h-full -z-10 top-0 left-0"
      />
      <div className=" laptop:flex laptop:justify-around">
        <div className={textContainer}>
          <h1 className={title}>404</h1>
          <p className="mb-2 text-2xl desktop:text-34 desktop:leading-[46.3px] font-semibold desktop:mb-4">
            Что-то пошло не так(
          </p>
          <p className="mb-[56px] laptop:mb-[93px] laptop:text-2xl desktop:text-34 desktop:leading-[46.3px] font-semibold desktop:mb-[72px]  text-main">
            Мы уже работаем, чтоб это исправить!
          </p>
          <p className="mb-20  laptop:text-base laptop:mb-6   desktop:text-xl  leading-[27.24px] font-medium desktop:mb-20 ">
            А пока, ты можешь вернуться на главную страницу
          </p>
          <Link
            to="/"
            className="px-[39px] laptop:px-[53px] font-bold text-lg text-white bg-main rounded-full py-3 desktop:px-15 hover:bg-[#038bab] ease-in duration-300"
          >
            Вернуться на главную
          </Link>
        </div>
        <div>
          {!isMobile && (
            <GatsbyImage
              image={badWeather}
              className="laptop:w-[310px] laptop:h-[436px] desktop:w-[390px] desktop:h-[512px]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
