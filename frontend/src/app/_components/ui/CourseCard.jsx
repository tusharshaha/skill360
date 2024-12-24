import Image from 'next/image';
import React from 'react';
import { FaBook, FaUserFriends } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const CourseCard = ({ course }) => {
  return (
    <div className='bg-white rounded-md p-8'>
      <Image src={course.image} alt={course.title} width={350} height={500} className='rounded-md h-[250px]' />
      <div className='mt-4 space-y-5'>
        <div className='text-slate-500 flex items-center gap-6 text-sm'>
          <span className='flex items-center gap-2'><FaBook /> {course.lession} Lession</span>
          <span className='flex items-center gap-2'><FaUserFriends /> {course.students} Student</span>
        </div>
        <h3 className='font-bold'>{course.title}</h3>
        <p className="text-slate-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, porro.</p>
        <div className='flex items-center gap-2'>
          <span className="flex items-center text-orange-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
          <span className="text-slate-500 text-sm">({course.reviews} reiviews)</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;