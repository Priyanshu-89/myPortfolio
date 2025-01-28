import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { register } from 'react-scroll/modules/mixins/scroller';

function Contact() {
  
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit=async(data)=> {
      const userInfo={
        name:data.name,
        email:data.email,
        message:data.message
      }
      try{
       await axios.post('https://getform.io/f/ajjjzlra', userInfo);
        toast.success("Your message has been sent");
      }catch(error){
        console.log(error)
      }
    }
  
  return (
    <>
      <div name="Contacts" className="max-w-screen-2xl container mx-auto bg-slate-900 text-white py-8 px-4 md:px-20">
        <h1 className='text-3xl font-semibold mb-4 text-center text-[#EF83B9]'>Contact me</h1>
        <form
        onSubmit={handleSubmit(onSubmit)}
        //  action=""
          // method='POST'
           className="max-w-xl mx-auto p-8 bg-slate-400 rounded-lg shadow-lg mt-6">
          <h2 className="text-3xl font-semibold text-center text-gray-700 ">Send Your Message</h2>
          <div className="mb-4">
            <label htmlFor="fullname" className="block text-lg font-medium text-gray-600 mb-2">Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              
              {...register("fullname", {required:true})}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.fullname && <span>This is Required Field</span> }
          </div>


          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-600 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email", {required:true})}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <span>This Email Field is Required</span> }
          </div>


          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium text-gray-600 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              {...register('message', {required:true})}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            {errors.message && <span>This Message Field is Required</span> }
          </div>


          <div>
            <button
              type="submit"
              className="w-full py-3 bg-[#EF83B9] text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact