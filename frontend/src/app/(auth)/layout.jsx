import Link from 'next/link';
import React from 'react';
import { MdSchool } from 'react-icons/md';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar / Banner */}
      <div className="hidden md:flex banner w-1/2 h-screen sticky top-0 left-0 items-center justify-center">
        <div className="max-w-xl mx-auto px-6 text-center">
          <MdSchool className="text-[90px] mx-auto" />
          <h1 className="font-extrabold text-4xl my-5">
            Welcome To <br /> Skill360 Courses
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            harum recusandae libero? Est ea quisquam alias dolorem rerum
            adipisci earum perferendis saepe numquam. Nobis autem sint velit cum
            magni debitis!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-1/2 ml-auto overflow-y-auto">
        <div className="max-w-2xl py-20 px-8 mx-auto">
          <div className="flex items-center justify-between gap-4 mb-8 md:mb-14">
            <div className="font-extrabold flex items-center gap-2 text-2xl md:text-3xl">
              <MdSchool /> <span>Skill360</span>
            </div>
            <Link
              href="/"
              className="text-slate-500 hover:text-indigo-500 underline trans text-md md:text-lg"
            >
              Back to home &#8594;
            </Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
