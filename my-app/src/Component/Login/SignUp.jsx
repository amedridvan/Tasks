import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'


function App() {
  const { register ,handleSubmit} = useForm()

  const navigate =useNavigate()
  const onSubmit =async (formdata) => {
    console.log(formdata)
    try {
      const res = await axios({
        method: 'POST',
        url: 'http://127.0.0.1:8000/api/v1/user/siginup',
      data:{
        Firstname : formdata.Firstname ,
        Lastname :formdata.Lastname ,
        email :formdata.email ,
        password :formdata.password ,
        passwordConfirm :formdata.passwordConfirm
      }
      })

      if(res.status="success"){
        console.log("created");
        Swal.fire({
          icon:"success" ,
          title :res.data.data.message ,
          text: "go to sigun in "
        })
        setTimeout(navigate('/') ,5000) ;
      }
    }
  catch (err) {
    let a=""
    a= err.response.data.message
    console.log(a);
    if(a.startsWith("E11000")){
      const er="email has already used  " ;
      Swal.fire({
        icon: "error",
        title: er ,
        text :"please use another email "
      });
    }
      else{
      Swal.fire({
        icon: "error",
        title: "please input same password ",
      });
    }
  }
    }
  
  
    return (
     <>
    <div className="flex -mt-8  min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
           
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action=""  method="post" onSubmit={handleSubmit(onSubmit)} >
            <div >
                  <div className="mt-1">
                  <input
                  placeholder="Firstname"
                  {...register("Firstname",{required :true ,min:8 ,max:100})}
                    id="Firstname"
                    name="Firstname"
                    type="input"
                    autoComplete="current-password"
                    required
                    className=" pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                </div>
            <div className="mt-2">
                  <div className="mt-2">
                  <input placeholder="Lastname"
                  {...register("Lastname",{required :true ,min:8 ,max:100})}
                    id="Lastname"
                    name="Lastname"
                    type="input"
                    autoComplete="current-password"
                    required
                    className=" pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                </div>

              <div className="mt-2">
                
                <div className="mt-1 ">
                  <input placeholder=" Email "
                  {...register ("email")}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
                <div className="mt-2">
                  <div className="mt-1">
                  <input placeholder="Password"
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

                <div className="mt-2">
                  <div className="mt-1  ">
                  <input placeholder="Confirm Password "
                  {...register("passwordConfirm",{required :true ,min:8 ,max:100})}
                    id="passwordConfirm"
                    name="passwordConfirm"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                </div>
                <div>
                <button
                  type="submit" 
                  className="flex w-full justify-center rounded-md  bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                 Submit
                </button>
              </div>
              <p className="mt-10 text-center text-sm text-gray-500">
              Already Have account {' '}
              <a href="/" className="font-semibold leading-6 text-green-800 hover:text-indigo-500">
               Login
              </a>
            </p>
              
              </form>

              </div>  
              </div>   
     </>
    );
  }

  
export default App;