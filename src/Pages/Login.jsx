// import { useState } from "react";
// import { toast } from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import Layout from "../Layout/Layout";
// import { login } from "../Redux/Slices/AuthSlice";
// import InputBox from "../Components/InputBox/InputBox";

// export default function Login() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [isLoading, setIsLoading] = useState(false);
//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });

//   function handleUserInput(e) {
//     const { name, value } = e.target;
//     setLoginData({
//       ...loginData,
//       [name]: value,
//     });
//   }

//   async function onLogin(event) {
//     event.preventDefault();
//     if (!loginData.email || !loginData.password) {
//       toast.error("Please fill all the details");
//       return;
//     }

//     setIsLoading(true);
//     const Data = { email: loginData.email, password: loginData.password };

//     // dispatch create account action
//     const response = await dispatch(login(Data));
//     if (response?.payload?.success) {
//       setLoginData({
//         email: "",
//         password: "",
//       });
//       navigate("/");
//     }
//     setIsLoading(false);
//   }

//   return (
//     <Layout>
//       <section className="flex flex-col gap-6 items-center py-8 px-3 min-h-[100vh] dark:bg-gray-900">
//         <form
//           onSubmit={onLogin}
//           autoComplete="off"
//           noValidate
//           className="flex flex-col dark:bg-gray-800 gap-4 rounded-lg md:py-5 py-7 md:px-7 px-3 md:w-[500px] w-full shadow-custom dark:shadow-xl  "
//         >
//           <h1 className="text-center dark:text-purple-500 text-4xl font-bold font-inter">
//             Login Page
//           </h1>
//           {/* email */}
//           <InputBox
//             label={"Email"}
//             name={"email"}
//             type={"email"}
//             placeholder={"Enter your email..."}
//             onChange={handleUserInput}
//             value={loginData.email}
//           />
//           {/* password */}
//           <InputBox
//             label={"Password"}
//             name={"password"}
//             type={"password"}
//             placeholder={"Enter your password..."}
//             onChange={handleUserInput}
//             value={loginData.password}
//           />

//           {/* submit btn */}
//           <button
//             type="submit"
//             className="mt-2 bg-yellow-500 text-white dark:text-base-200  transition-all ease-in-out duration-300 rounded-md py-2 font-nunito-sans font-[500]  text-lg cursor-pointer"
//             disabled={isLoading}
//           >
//             {isLoading ? "Logging..." : "Login"}
//           </button>

//           {/* link */}
//           <p className="text-center font-inter text-gray-500 dark:text-slate-300">
//             Do not have an account ?{" "}
//             <Link
//               to="/signup"
//               className="font-bold p-2 rounded bg-yellow-500  font-lato cursor-pointer transition-all duration-300 ease-in-out transform hover:bg-yellow-600 hover:text-white hover:shadow-lg hover:scale-105 focus:ring-4 focus:ring-yellow-300 focus:outline-none"
//             >
//               Sign-Up
//             </Link>
//             {"   "}
//             <br />
//             <Link
//               to="/user/profile/reset-password"
//               className="font-bold text-blue-600 font-lato cursor-pointer"
//             >
//               {" "}
//               Reset Password
//             </Link>
//           </p>
//         </form>
//       </section>
//     </Layout>
//   );
// }

import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../Layout/Layout'
import { login } from '../Redux/Slices/AuthSlice'
import InputBox from '../Components/InputBox/InputBox'

export default function Login () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  function handleUserInput (e) {
    const { name, value } = e.target

    setLoginData({
      ...loginData,
      [name]: value
    })
  }

  async function onLogin (event) {
    event.preventDefault()

    if (!loginData.email || !loginData.password) {
      toast.error('Please fill all the details')
      return
    }

    setIsLoading(true)

    const Data = {
      email: loginData.email.trim(),
      password: loginData.password
    }

    try {
      const response = await dispatch(login(Data))

      if (response?.payload?.success) {
        setLoginData({
          email: '',
          password: ''
        })

        navigate('/')
      }
    } catch (error) {
      console.error('Login Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Layout>
      <section className='min-h-[100vh] flex flex-col items-center justify-center bg-[#F8FAFC] px-3 py-8'>
        <form
          onSubmit={onLogin}
          autoComplete='off'
          noValidate
          className='flex flex-col gap-5 w-full md:w-[500px] rounded-xl bg-white px-4 py-7 md:px-8 md:py-8 shadow-lg border border-slate-200'
        >
          {/* Heading */}
          <div className='text-center mb-2'>
            <h1 className='text-3xl md:text-4xl font-bold text-[#1E293B] font-inter'>
              Welcome Back
            </h1>

            <p className='mt-2 text-sm text-[#334155] font-nunito-sans'>
              Login to access your account
            </p>
          </div>

          {/* Email */}
          <InputBox
            label={'Email'}
            name={'email'}
            type={'email'}
            placeholder={'Enter your email...'}
            onChange={handleUserInput}
            value={loginData.email}
          />

          {/* Password */}
          <InputBox
            label={'Password'}
            name={'password'}
            type={'password'}
            placeholder={'Enter your password...'}
            onChange={handleUserInput}
            value={loginData.password}
          />

          {/* Forgot Password */}
          <div className='flex justify-end -mt-2'>
            <Link
              to='/user/profile/reset-password'
              className='text-sm font-semibold text-[#B91C1C] hover:underline transition-all'
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            disabled={isLoading}
            className={`mt-1 w-full rounded-md py-2.5 font-nunito-sans font-semibold text-lg text-white transition-all duration-300 ${
              isLoading
                ? 'bg-[#B91C1C]/70 cursor-not-allowed'
                : 'bg-[#B91C1C] hover:bg-red-800 cursor-pointer'
            }`}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>

          {/* Signup */}
          <p className='text-center text-[#334155] font-inter text-sm md:text-base mt-1'>
            Don't have an account?{' '}
            <Link
              to='/signup'
              className='font-bold text-[#B91C1C] hover:underline transition-all'
            >
              Sign Up
            </Link>
          </p>

          {/* Donor Notice */}
          <div className='rounded-md bg-[#F8FAFC] border border-slate-200 p-3 text-center'>
            <p className='text-xs md:text-sm text-[#334155]'>
              Your account also works as your{' '}
              <span className='font-semibold text-[#B91C1C]'>
                blood donor profile
              </span>
              .
            </p>
          </div>
        </form>
      </section>
    </Layout>
  )
}
