'use client'

import React from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = ({ name, phone }) => {
    console.log(name, phone);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <h1>Welcome</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register('name', {
              required: 'Please enter email',
            })}
            autoFocus
          ></input>
          {errors.email && <div>{errors.name.message}</div>}
        </div>
        <div>
          <label htmlFor="phone">Phone number</label>
          <input
            type="tel"
            id="phone"
            {...register('phone', {
              required: 'Please enter phone number',
              length: { value: 10, message: 'enter a valid phone number' },
            })}
            autoFocus
          ></input>
          {errors.password && <div>{errors.password.message}</div>}
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}
