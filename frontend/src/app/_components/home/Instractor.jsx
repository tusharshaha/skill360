import React from 'react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa6';
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaInstagram
} from 'react-icons/fa';

const Instractor = () => {
  const instractors = [
    {
      name: 'Ayman Sadiq',
      title: 'Web Developer',
      img: '/instractor/ayman.jpg'
    },
    {
      name: 'Moonjerin Shahid',
      title: 'Web Developer',
      img: '/instractor/moonjerin.jpeg'
    },
    {
      name: 'Sadman Sadiq',
      title: 'Web Developer',
      img: '/instractor/sadman.jpg'
    },
    {
      name: 'Sakib Bin Rashid',
      title: 'Web Developer',
      img: '/instractor/sakib.jpg'
    }
  ];
  return (
    <div className="bg-slate-50">
      <div className="cus-container py-28">
        <div className="flex flex-col xl:flex-row items-center gap-5">
          <div className="w-full xl:w-1/3 space-y-8">
            <Badge className="bg-indigo-100 text-indigo-500">
              Skilled Introduce
            </Badge>
            <h2 className="font-extrabold md:text-3xl xl:text-4xl">
              Our Top Class & Expert Instructors in One Place
            </h2>
            <p className="text-slate-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
              reprehenderit animi illum sapiente aperiam exercitationem veniam
              similique necessitatibus aliquam ratione, nemo tempora accusamus
              laborum blanditiis? Ullam eveniet et inventore laboriosam!
            </p>
            <Button className="gradient-btn px-6 py-2 rounded-full text-sm md:text-xl">
              See All Instractor
            </Button>
          </div>
          <div className="w-full xl:w-2/3 grid sm:grid-cols-2 gap-5 md:px-6">
            {instractors.map((ele, i) => (
              <div key={i} className="flex items-center gap-5">
                <Image
                  src={ele.img}
                  alt={ele.name}
                  width={200}
                  height={200}
                  className="rounded-full size-[120px] md:size-[150px]"
                />
                <div className="space-y-2">
                  <h3 className="font-bold">{ele.name}</h3>
                  <p className="text-indigo-500">{ele.title}</p>
                  <p className="flex items-center gap-2 text-slate-500">
                    <FaStar className="text-orange-500" /> (4.8 rating)
                  </p>

                  <div className="flex items-center justify-center sm:justify-normal gap-3 mt-6">
                    <div className="p-2 rounded-full outline outline-slate-500 text-slate-500 outline-2 trans hover:outline-indigo-500 hover:bg-indigo-500 hover:text-white">
                      <FaFacebookF />
                    </div>
                    <div className="p-2 rounded-full outline outline-slate-500 text-slate-500 outline-2 trans hover:outline-indigo-500 hover:bg-indigo-500 hover:text-white">
                      <FaTwitter />
                    </div>
                    <div className="p-2 rounded-full outline outline-slate-500 text-slate-500 outline-2 trans hover:outline-indigo-500 hover:bg-indigo-500 hover:text-white">
                      <FaWhatsapp />
                    </div>
                    <div className="p-2 rounded-full outline outline-slate-500 text-slate-500 outline-2 trans hover:outline-indigo-500 hover:bg-indigo-500 hover:text-white">
                      <FaInstagram />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instractor;
