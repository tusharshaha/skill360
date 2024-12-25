'use client';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { MdOutlineMenu } from 'react-icons/md';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // navbar list items
  const list = [
    {
      name: 'Class',
      subLink: ['Class 10', 'Class 9', 'Class 8', 'Class 7', 'Class 6']
    },
    {
      name: 'Skills',
      subLink: ['All Course', 'Language Learning', 'Freelancing', 'Free Course']
    },
    {
      name: 'Admission',
      subLink: ['Medical', 'Engineering', 'University', 'College']
    },
    {
      name: 'Online Batch',
      subLink: ['HSC', 'SSC']
    },
    {
      name: 'English Center',
      subLink: ['All Programs', 'IELTS Program', 'Spoken English']
    },
    {
      name: 'More',
      subLink: ['Job Preparation', 'Blog', 'Book Store', 'Free Notes']
    }
  ];

  // navbar open close functionality
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener('mousedown', handler);
    return () => document.body.removeEventListener('mousedown', handler);
  });

  // navbar menu items
  const menu = (
    <ul className="flex items-center flex-col md:flex-row gap-8 text-slate-500 md:text-base-100 font-medium">
      {list.map((ele, i) => (
        <li
          key={i}
          className="w-full border-2 border-primary md:border-none rounded-full whitespace-nowrap flex items-center gap-1 group relative"
        >
          <span>{ele.name}</span>
          <FaAngleDown />
          <ul className="hidden group-hover:block bg-white absolute top-5 left-[-15px] p-3">
            {ele.subLink.map((sub, i) => (
              <li key={i} className="py-2 px-6 hover:bg-gray-100">
                {sub}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="bg-white shadow-md border-b py-5 sticky top-0 z-[50]">
      <div className="cus-container mx-auto px-5 flex items-center justify-between gap-4">
        <div ref={menuRef} className="lg:hidden">
          <button onClick={handleMenu} className="text-2xl sm:text-3xl">
            <MdOutlineMenu />
          </button>
          {/* mobile menu */}
          
            <Sidebar menu={list} className={isOpen ? 'left-0' : '-left-full'} />
          
        </div>
        <Link
          href="/"
          className="flex items-center font-extrabold text-xl sm:text-2xl text-base-100"
        >
          Skill360
        </Link>

        {/* desktop menu  */}
        <div className="hidden lg:block">{menu}</div>

        {/* action button  */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="gradient-btn rounded-md px-6 py-2 text-sm sm:text-xl"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
