import React from 'react';

const List = ({ className = '', bgIcons = '', icons = '', data = {} }) => {
  return (
    <div>
      <h3 className="title-secondary text-34 text-left mb-13 -m-4 ">
        {data.title}
      </h3>
      {!!data.list.length && (
        <ul className="flex flex-wrap w-648 ">
          {data.list.map(({ textPrimary, svg, textSecondary }) => {
            return (
              <li
                className={`relative mr-4 mb-13 ${className}`}
                key={className}
              >
                <div className="w-14 h-14 bg-white rounded-lg absolute shadow-you -top-icon left-2/4 -translate-x-1/2 z-10">
                  <svg className="h-8 w-8 fill-mainSecond m-auto mt-icon">
                    <use href={`${icons}#icon-${svg}`} />
                  </svg>
                </div>
                <div className=" w-50 h-36 bg-white rounded-lg shadow-you px-3 text-center flex flex-col justify-center ">
                  <p className=" text-mainSecond font-bold text-xl tracking-wide z-10">
                    {textPrimary}
                  </p>
                  <p className=" text-black text-sm z-10">{textSecondary}</p>
                  <svg className="h-16 w-16 fill-orangeContrast ml-auto mb-iconBG absolute ">
                    <use href={`${icons}#icon-${svg}`} />
                  </svg>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default List;
