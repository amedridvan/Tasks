import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'
import {useStore} from "../Home/Global";
import { useState } from "react";


export default function Login() {
  const { register ,handleSubmit} = useForm()
  const navigate = useNavigate(); 
const id2 =useStore(st =>st.updateid)

  const onSubmit =async (formdata) => {
    console.log(formdata)
    try {
      const res = await axios({
        method: 'POST',
        url: 'http://127.0.0.1:8000/api/v1/user/login',
      data:{
        email :formdata.email ,
        password :formdata.password
      }
      })
      if(res.status="success"){
        console.log("login is done ");
        sessionStorage.setItem("id",res.data.data.user._id)
        id2(res.data.data.user._id) 
       navigate('/Home')
      }
    }
  catch (err) {
    
      Swal.fire({
        icon: "error",
        title: err.response.data.message,
        text: "Please input a correct email",
      });
    }
  }
    return (
      <>
    {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
        <div className="flex  min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
           
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action=""  method="post" onSubmit={handleSubmit(onSubmit)} >
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                  {...register ("email")}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className=" pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="/forgetpassword" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input 
                  {...register("password",{required :true ,min:8 ,max:100})}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className=" pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit" 
                  className="flex w-full justify-center rounded-md  bg-slate-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="/Signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
         Sigun Up
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }
  