'use client';
import Button from '../../_components/ui/Button';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

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
      <h3 className="font-semibold text-xl md:text-2xl">
        Login into your account
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 text-xl space-y-6"
      >
        <div>
          <p className="text-xl">Email</p>
          <input
            className="px-6 py-2 border rounded-md w-full focus:outline-indigo-500 focus:outline-2 mt-3"
            type="email"
            {...register('email', { required: true })}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-2">This field is required</p>
          )}
        </div>
        <div>
          <p className="text-xl">Password</p>
          <input
            className="px-6 py-2 border rounded-md w-full focus:outline-indigo-500 focus:outline-2 mt-3"
            type="password"
            {...register('password', {
              required: true,
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
              {errors.password.message || 'This field is required'}
            </p>
          )}
        </div>
        <p className="font-bold text-indigo-900 text-xl">Forgot Password?</p>

        <div className="flex items-center gap-2">
          <input type="checkbox" name="" id="remb" className="text-2xl" />
          <label htmlFor="remb" className="text-lg">
            Remember me
          </label>
        </div>
        <div className="space-y-3">
          <Button className="gradient-btn w-full rounded-md py-3">Login</Button>
          <p className="text-slate-500 text-sm md:text-lg text-center">
            New User?{' '}
            <Link href="/register" className="underline text-indigo-500">
              Create an Account
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
