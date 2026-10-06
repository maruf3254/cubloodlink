import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../Layout/Layout'
import  {createAccount}  from '../Redux/Slices/AuthSlice'
import InputBox from '../Components/InputBox/InputBox'

export default function Signup () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const [signupData, setSignupData] = useState({
    student_id: '',
    fullName: '',
    email: '',
    password: '',
    phone: '',
    blood_group: '',
    location: '',
    name_visible: true,
    phone_visible: true
  })

  // =====================================================
  // HANDLE INPUT
  // =====================================================

  function handleUserInput (e) {
    const { name, value, type, checked } = e.target

    setSignupData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  // =====================================================
  // CREATE ACCOUNT
  // =====================================================

  async function createNewAccount (event) {
    event.preventDefault()

    if (isLoading) return

    const {
      student_id,
      fullName,
      email,
      password,
      phone,
      blood_group,
      location
    } = signupData

    // ---------------------------------------------------
    // Required fields
    // ---------------------------------------------------

    if (
      !student_id.trim() ||
      !fullName.trim() ||
      !email.trim() ||
      !password ||
      !phone.trim() ||
      !blood_group ||
      !location.trim()
    ) {
      toast.error('Please fill all the required fields')
      return
    }

    // ---------------------------------------------------
    // Student ID
    // ---------------------------------------------------

    if (student_id.trim().length < 1) {
      toast.error('Please enter your Student ID')
      return
    }

    // ---------------------------------------------------
    // Partial Name
    // ---------------------------------------------------

    if (fullName.trim().length < 2) {
      toast.error('Please enter at least part of your name')
      return
    }

    // ---------------------------------------------------
    // Email
    // ---------------------------------------------------

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

    if (!emailRegex.test(email.trim())) {
      toast.error('Please enter a valid email address')
      return
    }

    // ---------------------------------------------------
    // Password
    // ---------------------------------------------------

    if (password.length < 4) {
      toast.error('Password must be at least 4 characters')
      return
    }

    // ---------------------------------------------------
    // Phone
    // ---------------------------------------------------

    if (phone.trim().length < 10) {
      toast.error('Please enter a valid phone number')
      return
    }

    // ---------------------------------------------------
    // Blood Group
    // ---------------------------------------------------

    const validBloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

    if (!validBloodGroups.includes(blood_group)) {
      toast.error('Please select a valid blood group')
      return
    }

    // ---------------------------------------------------
    // Location
    // ---------------------------------------------------

    if (location.trim().length < 2) {
      toast.error('Please enter your current location')
      return
    }

    // ---------------------------------------------------
    // Start Loading
    // ---------------------------------------------------

    setIsLoading(true)

    try {
      const response = await dispatch(
        createAccount({
          ...signupData,

          // Clean user input before sending
          student_id: student_id.trim(),
          fullName: fullName.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          location: location.trim(),

          // Donor privacy
          name_visible: signupData.name_visible,
          phone_visible: signupData.phone_visible
        })
      )

      // -------------------------------------------------
      // Registration successful
      // -------------------------------------------------

      if (createAccount.fulfilled.match(response)) {
        if (response?.payload?.success) {
          setSignupData({
            student_id: '',
            fullName: '',
            email: '',
            password: '',
            phone: '',
            blood_group: '',
            location: '',
            name_visible: true,
            phone_visible: true
          })

          navigate('/')
        }
      }
    } catch (error) {
      console.error('Registration Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Layout>
      <section className='min-h-screen bg-[#F8FAFC] px-3 py-6 sm:px-5 sm:py-8 md:px-6'>
        <div className='mx-auto flex w-full max-w-2xl justify-center'>
          <form
            onSubmit={createNewAccount}
            autoComplete='off'
            noValidate
            className='w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-md sm:p-6 md:p-8'
          >
            {/* ================================================= */}
            {/* HEADER */}
            {/* ================================================= */}

            <div className='mb-7 text-center'>
              <h1 className='font-inter text-2xl font-bold text-[#1E293B] sm:text-3xl md:text-4xl'>
                Create Account
              </h1>

              <p className='mx-auto mt-2 max-w-md text-sm leading-5 text-[#334155]'>
                Create your account using your official student information and
                become a blood donor.
              </p>
            </div>

            {/* ================================================= */}
            {/* STUDENT INFORMATION */}
            {/* ================================================= */}

            <div className='mb-6'>
              <div className='mb-4 flex items-center gap-2'>
                <div className='h-5 w-1 rounded-full bg-[#B91C1C]' />

                <h2 className='font-inter text-base font-semibold text-[#1E293B] sm:text-lg'>
                  Student Information
                </h2>
              </div>

              {/* Student ID */}

              <div className='flex flex-col gap-2'>
                <InputBox
                  label={'Student ID'}
                  name={'student_id'}
                  type={'text'}
                  placeholder={'Enter your Student ID...'}
                  onChange={handleUserInput}
                  value={signupData.student_id}
                />

                <p className='-mt-1 rounded-md bg-[#F8FAFC] px-3 py-2 text-xs leading-5 text-[#334155]'>
                  Enter your official Student ID and a part of your registered
                  name. We will verify it with the official student records.
                </p>
              </div>

              {/* Partial Name */}

              <div className='mt-4'>
                <InputBox
                  label={'Name / Part of Name'}
                  name={'fullName'}
                  type={'text'}
                  placeholder={'e.g. Maruf or Md Maruf...'}
                  onChange={handleUserInput}
                  value={signupData.fullName}
                />

                <p className='mt-1 text-xs text-slate-500'>
                  You can enter your full name or only a part of your official
                  name.
                </p>
              </div>
            </div>

            {/* ================================================= */}
            {/* ACCOUNT INFORMATION */}
            {/* ================================================= */}

            <div className='mb-6'>
              <div className='mb-4 flex items-center gap-2'>
                <div className='h-5 w-1 rounded-full bg-[#B91C1C]' />

                <h2 className='font-inter text-base font-semibold text-[#1E293B] sm:text-lg'>
                  Account Information
                </h2>
              </div>

              {/* Email */}

              <div>
                <InputBox
                  label={'Email Address'}
                  name={'email'}
                  type={'email'}
                  placeholder={'Enter your email...'}
                  onChange={handleUserInput}
                  value={signupData.email}
                />
              </div>

              {/* Phone */}

              <div className='mt-4'>
                <InputBox
                  label={'Mobile Number'}
                  name={'phone'}
                  type={'tel'}
                  placeholder={'Enter your mobile number...'}
                  onChange={handleUserInput}
                  value={signupData.phone}
                />
              </div>

              {/* Password */}

              <div className='mt-4'>
                <InputBox
                  label={'Password'}
                  name={'password'}
                  type={'password'}
                  placeholder={'Enter your password...'}
                  onChange={handleUserInput}
                  value={signupData.password}
                />
              </div>
            </div>

            {/* ================================================= */}
            {/* DONOR INFORMATION */}
            {/* ================================================= */}

            <div className='mb-6'>
              <div className='mb-4 flex items-center gap-2'>
                <div className='h-5 w-1 rounded-full bg-[#B91C1C]' />

                <h2 className='font-inter text-base font-semibold text-[#1E293B] sm:text-lg'>
                  Donor Information
                </h2>
              </div>

              {/* Blood Group */}

              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='blood_group'
                  className='font-inter text-sm font-medium text-[#334155]'
                >
                  Blood Group
                </label>

                <select
                  id='blood_group'
                  name='blood_group'
                  value={signupData.blood_group}
                  onChange={handleUserInput}
                  className='w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-[#334155] outline-none transition-all focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C]'
                >
                  <option value=''>Select your blood group</option>

                  <option value='A+'>A+</option>
                  <option value='A-'>A-</option>
                  <option value='B+'>B+</option>
                  <option value='B-'>B-</option>
                  <option value='AB+'>AB+</option>
                  <option value='AB-'>AB-</option>
                  <option value='O+'>O+</option>
                  <option value='O-'>O-</option>
                </select>
              </div>

              {/* Location */}

              <div className='mt-4'>
                <InputBox
                  label={'Current Location'}
                  name={'location'}
                  type={'text'}
                  placeholder={'e.g. Chattogram'}
                  onChange={handleUserInput}
                  value={signupData.location}
                />

                <p className='mt-1 text-xs text-slate-500'>
                  Your current area helps blood seekers find suitable donors.
                </p>
              </div>
            </div>

            {/* ================================================= */}
            {/* PRIVACY SETTINGS */}
            {/* ================================================= */}

            <div className='mb-6 rounded-xl border border-slate-200 bg-[#F8FAFC] p-4'>
              <div className='mb-4'>
                <h2 className='font-inter text-base font-semibold text-[#1E293B]'>
                  Donor Privacy
                </h2>

                <p className='mt-1 text-xs leading-5 text-[#334155]'>
                  Choose what information can be shown to blood seekers.
                </p>
              </div>

              {/* Name visibility */}

              <label className='flex cursor-pointer items-start gap-3'>
                <input
                  type='checkbox'
                  name='name_visible'
                  checked={signupData.name_visible}
                  onChange={handleUserInput}
                  className='mt-0.5 h-4 w-4 accent-[#B91C1C]'
                />

                <span className='text-sm leading-5 text-[#334155]'>
                  <span className='font-medium text-[#1E293B]'>
                    Show my name
                  </span>
                  <br />
                  Allow blood seekers to see my name.
                </span>
              </label>

              {/* Phone visibility */}

              <label className='mt-4 flex cursor-pointer items-start gap-3'>
                <input
                  type='checkbox'
                  name='phone_visible'
                  checked={signupData.phone_visible}
                  onChange={handleUserInput}
                  className='mt-0.5 h-4 w-4 accent-[#B91C1C]'
                />

                <span className='text-sm leading-5 text-[#334155]'>
                  <span className='font-medium text-[#1E293B]'>
                    Show my phone number
                  </span>
                  <br />
                  Allow blood seekers to contact me directly.
                </span>
              </label>
            </div>

            {/* ================================================= */}
            {/* AUTOMATIC DONOR INFORMATION */}
            {/* ================================================= */}

            <div className='mb-6 rounded-xl border border-red-100 bg-red-50 p-4'>
              <div className='flex gap-3'>
                <div className='flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#B91C1C] text-sm font-bold text-white'>
                  !
                </div>

                <div>
                  <h3 className='font-inter text-sm font-semibold text-[#1E293B]'>
                    You will automatically become a donor
                  </h3>

                  <p className='mt-1 text-xs leading-5 text-[#334155]'>
                    After registration, your account will automatically be
                    registered as a blood donor. You can change your
                    availability and privacy settings later from your profile.
                  </p>
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* SUBMIT BUTTON */}
            {/* ================================================= */}

            <button
              type='submit'
              disabled={isLoading}
              className='w-full rounded-md bg-[#B91C1C] py-3 font-nunito-sans text-base font-semibold text-white transition-all duration-300 hover:bg-[#991B1B] disabled:cursor-not-allowed disabled:opacity-60 sm:text-lg'
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>

            {/* ================================================= */}
            {/* LOGIN LINK */}
            {/* ================================================= */}

            <p className='mt-5 text-center font-inter text-sm text-[#334155] sm:text-base'>
              Already have an account?{' '}
              <Link
                to='/login'
                className='font-semibold text-[#B91C1C] transition-all hover:underline'
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
    </Layout>
  )
}
