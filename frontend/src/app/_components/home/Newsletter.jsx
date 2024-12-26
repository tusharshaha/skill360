import React from 'react';
import Badge from '../ui/Badge';

const Newsletter = () => {
  return (
    <div className="newsletter bg-indigo-600 text-white py-32">
      <div className="max-w-2xl px-5 mx-auto text-center space-y-6 relative z-10">
        <Badge className="backdrop-blur-md bg-white/20">
          Get latest skill360 update
        </Badge>
        <h2 className="font-extrabold">Subscribe Our Newsletter</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vel
          reiciendis numquam ea asperiores delectus similique esse eos vero
          nemo.
        </p>
        <div className="flex items-center justify-between gap-4 p-2 bg-white rounded-md">
          <input
            type="text"
            placeholder="Enter your email"
            className="px-6 py-1 md:py-2 text-base md:text-lg w-full focus:outline-none text-slate-500"
          />

          <button className="gradient-btn px-6 py-2 md:py-3 rounded-md">
            Subscribe
          </button>
        </div>
        <p className="text-slate-100 text-sm">
          No ads, No trails, No commitments
        </p>
        <div className="md:divide-x grid md:grid-cols-2 gap-6 md:gap-4 md:pt-6">
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl font-extrabold">500+</p>
            <p className="text-lg md:text-xl font-semibold">
              Successfully Trained
            </p>
            <p className=" text-slate-100">Successfully Trained</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl font-extrabold">100+</p>
            <p className="text-lg md:text-xl font-semibold">
              Certification Students
            </p>
            <p className=" text-slate-100">Online Course</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
