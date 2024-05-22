import { useForm } from "react-hook-form"
import { json, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2' 

 export default function App() {

  const onSubmit =async (formdata) =>{
    try {
      const res = await axios({
        method: 'Patch',
        url: 'http://127.0.0.1:8000/api/v1/user/updatepassword',
      data:{
        email :formdata.email ,
        password :formdata.password ,
        passwordConfirm :formdata.passwordConfirm
      }
      });
      if(res.status ="success"){
        console.log(res.data.message)
        Swal.fire({
          title: res.data.message,
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
         setTimeout(() => {
          navigate("/UpdatePassword")
         },3500); 
      }
      }catch(err){
        Swal.fire({
          icon: "error",
          title: err.response.data.message,
          text: "Please input a correct email",
        });
      }
  }
  const { register ,handleSubmit } = useForm()
  const navigate = useNavigate();


    return (
      <>
      <div className="flex  min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm" >
        <h1 className="  mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 " > Updating  Password  </h1> 

      </div>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
  <form action="/pass" method="Post" onSubmit = {handleSubmit(onSubmit)}>
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
         Password
        </label>
          <div className="mt-2">
            <input
                {...register ("password")}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
         Password Confirm
        </label>
          <div className="mt-2">
             <input
                {...register ("passwordConfirm")}
                    id="passwordConfirm"
                    name="passwordConfirm"
                    type="password"
                    autoComplete="passwordConfirm"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <button
                  type="submit" 
                  className="flex w-full mt-5 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                 Sumbit
                </button>
</form>
     </div>
       </div>
       </>
    );
  }

  