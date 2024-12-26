import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { MdSchool } from 'react-icons/md';

const Sidebar = ({ menu, className }) => {
  const [open, setOpen] = useState(null);

  return (
    <div
      className={`trans h-screen w-[250px] absolute top-0 bg-white shadow-2xl ${className}`}
    >
      <div className="px-8 py-4 font-bold text-xl bg-indigo-500 text-white">
        Skill30
      </div>
      {/* Sidebar Content */}
      <ul className="">
        {menu.map((ele, i) => (
          <li key={i} className="border-b px-6 py-2">
            <button onClick={()=> setOpen(i)} className="flex items-center justify-between text-lg w-full p-2">
              <div className="flex items-center gap-2">
                <MdSchool />
                <span>{ele.name}</span>
              </div>
              <FaAngleDown />
            </button>
            <ul className={`${open === i ? "block": "hidden"} bg-indigo-100`}>
              {
                ele.subLink.map((ele, i)=> <li key={i} className='py-1 hover:bg-slate-200 trans px-3'>{ele}</li>)
              }
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
