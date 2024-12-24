import React from 'react';
import Button from '../ui/Button';

const Header = () => {
  return (
    <div className="banner">
      <div className="cus-container py-20 flex items-center justify-between gap-6">
        <div className="w-1/3 space-y-8">
          <h1 className="font-bold md:font-extrabold capitalize text-4xl text-slate-800">
            Build the skills to drive your career.
          </h1>
          <p className='text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quidem similique velit blanditiis molestiae laudantium quibusdam. Enim fugiat aspernatur magnam.</p>
          <Button className="gradient-btn px-8 py-3 rounded-md">View Courses &#8594;</Button>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default Header;
