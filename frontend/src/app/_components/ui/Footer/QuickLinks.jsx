"use client";

import Link from "next/link";
import { useState } from "react";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

const quickLinks = [
  {
    title: "Company",
    links: [
      { path: "", title: "About Us" },
      { path: "", title: "Why Skill360" },
      { path: "", title: "Contact With Us" },
      { path: "", title: "Our Partners" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { path: "", title: "About Us" },
      { path: "", title: "Pricing Plan" },
      { path: "", title: "Blog" },
      { path: "", title: "Contact Us" },
    ],
  },
  {
    title: "Legal",
    links: [
      { path: "", title: "Help & Support" },
      { path: "", title: "Terms & Conditon" },
      { path: "", title: "Affiliate" },
      { path: "", title: "Careers" },
    ],
  },
];

const QuickLinks = () => {
  const [collapse, setCollapse] = useState({});
  const handleCollapse = (id) => {
    setCollapse((prev) => ({
      isOpen: prev.id === id ? !prev.isOpen : true,
      id,
    }));
  };

  
  return (
    <>
      {quickLinks.map((ele, i) => (
        <div key={i} className="flex justify-start lg:justify-center">
          <div className="w-full sm:w-auto">
            <div
              onClick={() => handleCollapse(i)}
              className="bg-blue-950  sm:bg-inherit py-3 px-5 sm:p-0 flex items-center justify-between text-slate-200 box-shadow"
            >
              <h2 className="text-xl sm:text-3xl font-semibold text-white">{ele.title}</h2>
              <span className="inline sm:hidden">
                {collapse.isOpen && collapse.id === i ? (
                  <TiArrowSortedUp />
                ) : (
                  <TiArrowSortedDown />
                )}
              </span>
            </div>
            <ul
              className={`${
                collapse.isOpen && collapse.id === i
                  ? "h-[180px] p-5 border-t"
                  : "h-0"
              } sm:h-auto mt-0 sm:mt-8 sm:p-0 bg-blue-950 sm:bg-inherit overflow-hidden space-y-3 text-white sm:border-none border-slate-500 trans`}
            >
              {ele.links.map((link, i) => (
                <li key={i}>
                  <Link href={link.path} className="trans hover:text-fuchsia-400">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default QuickLinks;