import React from 'react';

const List = ({ className = '', bgIcons = '', icons = '', data = [] }) => {
  return (
    <div>
      <ul>
        {data.map(item => {
          <li className={`relative ${className}`} key={className}>
            <div className="w-14 h-14 bg-white rounded-lg absolute shadow-you -top-icon left-2/4 -translate-x-1/2">
              <svg className="h-8 w-8 fill-main m-auto mt-icon">
                <use href={`${icons}#icon-${item.svg}`} />
              </svg>
            </div>
            <div className=" bg-white rounded-lg shadow-you ">
              <p className=" text-mainSecond">{item.textPrimary}</p>
              <p className=" text-black">{item.textSecondary}</p>
            </div>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default List;
{
  /* <li className={`relative ${className}`} key={className}>
  <div className="w-14 h-14 bg-white rounded-lg absolute shadow-you -top-icon left-2/4 -translate-x-1/2">
    <svg className="h-8 w-8 fill-main m-auto mt-icon">
      <use href={`${icons}#icon-${svg}`} />
    </svg>
  </div>
  <div className=" bg-white rounded-lg shadow-you ">
    <p className=" text-mainSecond">{textPrimary}</p>
    <p className=" text-black">{textSecondary}</p>
  </div>
</li>; */
}
