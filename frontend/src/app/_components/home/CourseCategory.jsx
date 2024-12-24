import React from 'react';
import Badge from '../ui/Badge';
import Image from 'next/image';
import Link from 'next/link';

const CourseCategory = () => {
  const categories = [
    {
      name: 'Freelancing',
      icon: '/icons/web-design.png',
      count: 10
    },
    {
      name: 'Bundle',
      icon: '/icons/payment.png',
      count: 13
    },
    {
      name: 'Skills & Technology',
      icon: '/icons/server.png',
      count: 23
    },
    {
      name: 'Language Learning',
      icon: '/icons/language.png',
      count: 23
    },
    {
      name: 'Design & Creativity',
      icon: '/icons/paint.png',
      count: 9
    },
    {
      name: 'Career Development',
      icon: '/icons/infographic.png',
      count: 9
    },
    {
      name: 'Professional Course',
      icon: '/icons/personal.png',
      count: 9
    },
    {
      name: 'Free Course',
      icon: '/icons/smartphone.png',
      count: 29
    }
  ];
  return (
    <div className="">
      <div className="cus-container pb-28 pt-10">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <Badge className="bg-indigo-100 text-indigo-500">Categories</Badge>
          <h2 className="font-extrabold">
            Explore Top Courses Caterories That Change Yourself
          </h2>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mt-14 md:mt-24">
          {categories.map((ele, i) => (
            <div
              key={i}
              className="category-card text-center trans hover:-translate-y-4"
            >
              <Image
                src={ele.icon}
                height={70}
                width={70}
                alt={ele.name}
                className="size-[70px] mx-auto"
              />
              <h3 className="font-extrabold text-xl my-4">{ele.name}</h3>
              <Link href="" className="trans hover:text-indigo-600">
                {ele.count} Courses &#8594;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCategory;
