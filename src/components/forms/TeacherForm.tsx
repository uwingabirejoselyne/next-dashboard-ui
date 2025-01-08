"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import {  } from 'recharts';
import { z } from 'zod';


const schema = z.object({
  username: z.string().min(3, { message: 'Username must be at least 3 characters  long!' })
  .max(20, { message: 'Username must be at most 20 characters  long1' }),
  email: z.string().email({message:'Invalid email address1'}),
  password: z.string().min(8,{message:'Password must be at least 8 characters long!'}),
  firstName: z.string().min(1,{message:'FirstName is required!'}),
  lastName: z.string().min(1,{message:'LastName is required!'}),
  phone: z.string().min(1,{message:'Phone is required!'}),
  address: z.string().min(1,{message:'Address is required!'}),
  birthday: z.date({message:'Birthday is required!'}),
  sex: z.enum(["male", "female"], { message: "Sex is required and must be 'male' or 'female'!" }),
  img:z.instanceof(File, {message:"Image is requires"})
});
const TeacherForm = ({
    type,data}:{
        type:"create"|"update";
        data?:any
    }
    ) => {
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(schema),
      });
  const onSubmit = handleSubmit(data=>{
    console.log(data);
    
  })
  return (
    <form className='flex flex-col gap-8' onSubmit={onSubmit}>
      <h1 className='text-xl font-semibold'>Create a new teacher</h1>
      <span className='text-xs text-gray-400 font-medium'>Authentication Information</span>
      <div className='flex flex-col gap-2 w-full md:w-1/4'>
      <label className='text-xs text-gray-500'>Username</label>
      <input type="text" {...register("username")} className='ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full'/>
      {errors.username?.message && <p className='text-xs text-red-400'>{errors.username?.message?.toString()}</p>}
      </div>
      <span className='text-xs text-gray-400 font-medium'>Personal Info</span>
      <button className='bg-blue-400 text-white p-2 rounded-md'>{type ==="create"?"Create":"Update"}</button>
    </form>
  )
}

export default TeacherForm
