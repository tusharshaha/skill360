import React from 'react';
import Badge from '../ui/Badge';
import Image from 'next/image';

const CourseCategory = () => {
  const categories = [
    {
      name: "Freelancing",
      icon: "/icons/web-design.png",
      count: 10
    },
    {
      name: "Bundle",
      icon: "/icons/payment.png",
      count: 13
    },
    {
      name: "Skills & Technology",
      icon: "/icons/server.png",
      count: 23
    },
    {
      name: "Language Learning",
      icon: "/icons/language.png",
      count: 23
    },
    {
      name: "Design & Creativity",
      icon: "/icons/paint.png",
      count: 9
    },
    {
      name: "Career Development",
      icon: "/icons/infographic.png",
      count: 9
    },
    {
      name: "Professional Course",
      icon: "/icons/personal.png",
      count: 9
    },
    {
      name: "Free Course",
      icon: "/icons/smartphone.png",
      count: 29
    },
  ]
  return (
    <div className='bg-slate-50'>
      <div className='cus-container py-28'>
      <div className='text-center space-y-8 max-w-3xl mx-auto'>
        <Badge className="bg-indigo-100 text-indigo-500">Categories</Badge>
        <h2 className='font-extrabold'>Explore Top Courses Caterories That Change Yourself</h2>
      </div>
      <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-8 mt-14 md:mt-24'>
        {categories.map((ele, i) => <div key={i} className='text-center space-y-4 bg-white shadow-lg rounded-lg py-14 px-4'>
          <Image src={ele.icon} height={70} width={70} alt={ele.name} className='size-[70px] mx-auto' />
          <h3 className='font-extrabold text-xl'>{ele.name}</h3>
          <p className=''>{ele.count} Courses &#8594;</p>
        </div>)}
      </div>
    </div>
    </div>
  );
};

export default CourseCategory;