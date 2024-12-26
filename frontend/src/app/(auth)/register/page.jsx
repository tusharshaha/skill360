'use client';
import Button from '../../_components/ui/Button';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  // Watch the password field
  const password = watch('password');

  const onSubmit = (data) => {
    // fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/login`, {
    //   method: 'post',
    //   mode: "no-cors",
    //   headers: { 'Content-Type': 'application/json' },
    //   body: data
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  };
  return (
    <div>
      <h3 className="font-semibold text-xl md:text-2xl">Create an account</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 text-xl space-y-6"
      >
        <div>
          <p className="text-xl">Email</p>
          <input
            className="px-6 py-2 border rounded-md w-full focus:outline-indigo-500 focus:outline-2 mt-3"
            type="email"
            {...register('email', {
              required: "This field is required.",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@(?:gmail|yahoo|hotmail|outlook)\.com$/,
                message:
                  'Invalid email address. use gmail/yahoo/hotmail/outlook'
              }
            })}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-2">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <p className="text-xl">Password</p>
          <input
            className="px-6 py-2 border rounded-md w-full focus:outline-indigo-500 focus:outline-2 mt-3"
            type="password"
            {...register('password', {
              required: "This field is required.",
              pattern: {
                value: /^(?=.*[a-z])(?=.*\d).{6,}$/,
                message:
                  'Password must be 6 characters with at least one letter and one number.'
              }
            })}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-sm text-red-500 mt-2">
              {errors.password.message}
            </p>
          )}
        </div>
        <div>
          <p className="text-xl">Confirm Password</p>
          <input
            className="px-6 py-2 border rounded-md w-full focus:outline-indigo-500 focus:outline-2 mt-3"
            type="password"
            {...register('confirmPass', {
              required: 'Confirm password is required',
              validate: (value) =>
                value === password || 'Passwords do not match'
            })}
            id=""
            placeholder="Confirm password"
          />
          {errors.confirmPass && (
            <p className="text-sm text-red-500 mt-2">
              {errors.confirmPass.message}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" name="" id="remb" className="text-2xl" />
          <label htmlFor="remb" className="text-lg">
            Remember me
          </label>
        </div>
        <div className="space-y-3">
          <Button className="gradient-btn w-full rounded-md py-3">
            Register
          </Button>
          <p className="text-slate-500 text-sm md:text-lg text-center">
            Already have an Account? Please{' '}
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
