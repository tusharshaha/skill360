import Button from '../../_components/ui/Button';
import Link from 'next/link';
import React from 'react';

const Register = () => {
  return (
    <div>
      <h3 className="font-semibold text-xl md:text-2xl">Create an account</h3>
      <form className="mt-8 text-xl space-y-6">
        <div>
          <p className="text-xl">Email</p>
          <input
            className="px-6 py-2 border rounded-md w-full focus:outline-indigo-500 focus:outline-2 mt-3"
            type="email"
            name="email"
            id=""
            placeholder="Enter your email address"
          />
        </div>
        <div>
          <p className="text-xl">Password</p>
          <input
            className="px-6 py-2 border rounded-md w-full focus:outline-indigo-500 focus:outline-2 mt-3"
            type="password"
            name="password"
            id=""
            placeholder="Enter your password"
          />
        </div>
        <div>
          <p className="text-xl">Confirm Password</p>
          <input
            className="px-6 py-2 border rounded-md w-full focus:outline-indigo-500 focus:outline-2 mt-3"
            type="password"
            name="password"
            id=""
            placeholder="Enter your password"
          />
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" name="" id="remb" className="text-2xl" />
          <label htmlFor="remb" className="text-lg">
            Remember me
          </label>
        </div>
        <div className="space-y-3">
          <Button className="gradient-btn w-full rounded-md py-3">Register</Button>
          <p className="text-slate-500 text-sm md:text-lg text-center">
            Already have an Account? Please {" "}
            <Link href="/login" className="underline text-indigo-500">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
