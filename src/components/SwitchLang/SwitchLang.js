import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import React, { useState } from 'react';

const SwitchLang = () => {
  const { language, languages, changeLanguage, originalPath } = useI18next();
  // const [dropdown, setDropdown] = useState(false);
  // const [value, setValue] = useState(language);

  // const handleChange = lng => {
  //   setValue(lng);
  // };

  // const toggleDropdown = () => {
  //   setDropdown(prevState => !prevState);
  // };

  return (
    <ul>
      {languages.map(lng => (
        <li key={lng}>
          <Link to={originalPath} language={lng}>
            {lng}
          </Link>
        </li>
      ))}
    </ul>
    // <>
    //   <button
    //     id="dropdownDefault"
    //     data-dropdown-toggle="dropdown"
    //     onClick={toggleDropdown}
    //     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //     type="button"
    //   >
    //     {value}
    //   </button>
    //   {dropdown && (
    //     <div
    //       id="dropdown"
    //       className="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
    //     >
    //       <ul
    //         className="py-1 text-sm text-gray-700 dark:text-gray-200"
    //         aria-labelledby="dropdownDefault"
    //       >
    //         {languages.map(lng => (
    //           <li key={lng} onClick={() => handleChange(lng)}>
    //             <Link
    //               to={originalPath}
    //               language={lng}
    //               className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
    //             >
    //               {lng}
    //             </Link>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   )}
    // </>
  );
};

export default SwitchLang;
