import React from 'react';
import Button from '../ui/Button';
import EffectCard from '../ui/EffectCard';
import Image from 'next/image';

const Header = () => {
  const courses = [
    {
      title: 'IELTS LIVE Batch',
      lession: 20,
      instructor: 'Moonjerin Shahid',
      reviews: 15,
      students: 100,
      price: 100,
      image:
        'https://cdn.10minuteschool.com/images/thumbnails/ielts-live-batch-10-thumbnail.jpg'
    },
    {
      title: 'ঘরে বসে Spoken English',
      lession: 25,
      instructor: 'Moonjerin Shahid',
      reviews: 15,
      students: 200,
      price: 200,
      image:
        'https://cdn.10minuteschool.com/images/thumbnails/skills/ghore-boshe-Spoken-English-course-thumbnail-by-Munzereen-Shahid-16x9.jpg'
    },
    {
      title: 'সহজে Spoken আরবি',
      lession: 50,
      instructor: 'Mahade Hasan',
      reviews: 15,
      students: 150,
      price: 150,
      image:
        'https://cdn.10minuteschool.com/images/Thumbnails/sohoje_spoken_arbi_16x9.jpg'
    }
  ];
  return (
    <div className="banner">
      <div className="cus-container pt-16 pb-48 lg:pb-32 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
        <div className="w-full md:w-1/2 lg:w-1/3 space-y-8">
          <span className="bg-white py-4 px-8 inline-block rounded-md shadow-md text-center heighlight">
            🏆 The Leader in Online Learning{' '}
          </span>
          <h1 className="font-extrabold capitalize text-2xl md:text-4xl text-slate-800">
            Build the skills to drive your career.
          </h1>
          <p className="text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quidem
            similique velit blanditiis molestiae laudantium quibusdam. Enim
            fugiat aspernatur magnam.
          </p>
          <Button className="gradient-btn px-8 py-3 rounded-md">
            View Courses &#8594;
          </Button>
        </div>
        <div className="hidden lg:block lg:w-1/3">
          <Image
            src="/images/banner-01.png"
            alt="banner"
            width={500}
            height={500}
            className="size-[600px]"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 space-y-8">
          <EffectCard data={courses} />
        </div>
      </div>
    </div>
  );
};

export default Header;
