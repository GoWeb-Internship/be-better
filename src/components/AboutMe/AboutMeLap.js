import React from 'react';
import { caveat } from './AboutMe.module.css';
import PropTypes from 'prop-types';

const AboutMeLap = ({ data }) => {
  return (
    <div>
      <div className=" hidden laptop:block laptop:w-[420px] laptop:ml-auto  desktop:hidden text-left">
        <p className="mb-2  desktop:mb-8">
          {data.threeParagraphFirst}
          <span className={caveat}>{data.threeParagraphSpan}</span> <br />
          <span className="text-black block mt-4">
            {data.threeParagraphThird}
          </span>
        </p>
      </div>
      <div className="text-left hidden  laptop:block laptop:w-[640px] laptop:mt-12  desktop:hidden ">
        <p className="mb-6 laptop:mb-0">{data.fourParagraph}</p>
        <p className="mb-4 laptop:mt-8 laptop:mb-0">
          <span className="text-caveat">{data.fiveParagraphSpan}</span>
        </p>
      </div>
    </div>
  );
};

export default AboutMeLap;

AboutMeLap.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
};
