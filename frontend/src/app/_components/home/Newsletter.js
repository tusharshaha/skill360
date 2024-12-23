import React from 'react';

const Newsletter = () => {
  return (
    <div className="newsletter bg-indigo-600 text-white py-32">
      <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
        <span className="backdrop-blur-md bg-white/20 rounded-full uppercase px-10 py-2 font-semibold">
          Get latest skill360 update
        </span>
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
            className="px-6 py-3 text-xl w-full focus:outline-none text-slate-500"
          />

          <button className="gradient-btn px-6 py-3 rounded-md">
            Subscribe
          </button>
        </div>
        <p className="text-slate-100 text-sm">
          No ads, No trails, No commitments
        </p>
        <div className="md:divide-x grid md:grid-cols-2 pt-6">
          <div className="space-y-2">
            <p className="text-5xl font-extrabold">500+</p>
            <p className="text-2xl font-semibold">Successfully Trained</p>
            <p className=" text-slate-100">Successfully Trained</p>
          </div>
          <div className="space-y-2">
            <p className="text-5xl font-extrabold">100+</p>
            <p className="text-2xl font-semibold">Certification Students</p>
            <p className=" text-slate-100">Online Course</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
