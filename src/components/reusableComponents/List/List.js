import React from 'react';

const List = ({ className = '', bgIcons = '', icons = '', data = {} }) => {
  return (
    <div>
      <h3 className=" text-34 text-orangeDark text-left mb-13 ">
        {data.title}
      </h3>
      {!!data.list.length && (
        <ul className="flex flex-wrap">
          {data.list.map(({ textPrimary, svg, textSecondary }) => {
            return (
              <li
                className={`relative mr-4 mb-13 ${className}`}
                key={className}
              >
                <div className="w-14 h-14 bg-white rounded-lg absolute shadow-you -top-icon left-2/4 -translate-x-1/2">
                  <svg className="h-8 w-8 fill-main m-auto mt-icon">
                    <use href={`${icons}#icon-${svg}`} />
                  </svg>
                </div>
                <div className=" w-50 h-36 bg-white rounded-lg shadow-you px-3 text-center flex flex-col justify-center ">
                  <p className=" text-mainSecond font-bold text-xl tracking-wide">
                    {textPrimary}
                  </p>
                  <p className=" text-black text-sm">{textSecondary}</p>
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
