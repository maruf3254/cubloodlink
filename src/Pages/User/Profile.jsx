import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getUserData, updateUserData } from '../../Redux/Slices/AuthSlice'

import InputBox from '../../Components/InputBox/InputBox'

import { FaUserCircle } from 'react-icons/fa'
import { IoIosLock, IoIosRefresh } from 'react-icons/io'
import { FiMoreVertical } from 'react-icons/fi'

import Layout from '../../Layout/Layout'
import { useNavigate } from 'react-router-dom'

export default function Profile () {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // =====================================================
  // AUTH DATA
  // =====================================================

  const userData = useSelector(state => state.auth.data)

  // =====================================================
  // LOCAL STATES
  // =====================================================

  const [isUpdating, setIsUpdating] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const [userInput, setUserInput] = useState({
    name: '',
    phone: '',
    blood_group: '',
    location: '',
    last_donation_date: '',
    total_donations: 0,
    name_visible: true,
    phone_visible: false,
    userId: null
  })

  const [isChanged, setIsChanged] = useState(false)

  // =====================================================
  // HANDLE INPUT
  // =====================================================

  function handleInputChange (e) {
    const { name, value, type, checked } = e.target

    setUserInput(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  // =====================================================
  // DATE FORMAT FOR INPUT
  // =====================================================

  function formatDateForInput (date) {
    if (!date) return ''

    const parsedDate = new Date(date)

    if (Number.isNaN(parsedDate.getTime())) {
      return ''
    }

    return parsedDate.toISOString().split('T')[0]
  }

  // =====================================================
  // UPDATE PROFILE
  // =====================================================

  async function onFormSubmit (e) {
    e.preventDefault()

    if (!userInput.userId) return

    setIsUpdating(true)

    try {
      const data = {
        id: userInput.userId,

        // Name is intentionally not editable
        phone: userInput.phone,

        blood_group: userInput.blood_group,
        location: userInput.location,

        last_donation_date: userInput.last_donation_date || null,

        total_donations: Number(userInput.total_donations) || 0,

        name_visible: userInput.name_visible,
        phone_visible: userInput.phone_visible
      }

      const response = await dispatch(updateUserData(data))

      if (response?.payload?.success) {
        await dispatch(getUserData())
        setIsChanged(false)
      }
    } finally {
      setIsUpdating(false)
    }
  }

  // =====================================================
  // FETCH USER
  // =====================================================

  useEffect(() => {
    async function fetchUser () {
      await dispatch(getUserData())
    }

    if (!userData || Object.keys(userData).length === 0) {
      fetchUser()
    }
  }, [dispatch, userData])

  // =====================================================
  // SET FORM DATA
  // =====================================================

  useEffect(() => {
    if (!userData) return

    setUserInput({
      name: userData?.fullName || '',
      phone: userData?.phone || '',
      blood_group: userData?.blood_group || '',
      location: userData?.location || '',

      last_donation_date: formatDateForInput(userData?.last_donation_date),

      total_donations: userData?.total_donations ?? 0,

      name_visible: userData?.name_visible ?? true,
      phone_visible: userData?.phone_visible ?? false,

      userId: userData?._id || null
    })
  }, [userData])

  // =====================================================
  // CHECK CHANGES
  // =====================================================

  useEffect(() => {
    const currentLastDonation = formatDateForInput(userData?.last_donation_date)

    const changed =
      userInput.phone !== (userData?.phone || '') ||
      userInput.blood_group !== (userData?.blood_group || '') ||
      userInput.location !== (userData?.location || '') ||
      userInput.last_donation_date !== currentLastDonation ||
      Number(userInput.total_donations) !==
        Number(userData?.total_donations ?? 0) ||
      userInput.name_visible !== (userData?.name_visible ?? true) ||
      userInput.phone_visible !== (userData?.phone_visible ?? false)

    setIsChanged(changed)
  }, [userInput, userData])

  // =====================================================
  // BLOOD GROUPS
  // =====================================================

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

  return (
    <Layout hideFooter={true}>
      <section
        className='
          w-full
          min-h-[calc(100vh-64px)]
          bg-[#F8FAFC]
          dark:bg-gray-900
          px-3
          sm:px-5
          lg:px-8
          py-4
          sm:py-6
          overflow-x-hidden
        '
      >
        {/* ================================================= */}
        {/* MAIN CARD */}
        {/* ================================================= */}

        <div className='w-full max-w-5xl mx-auto'>
          <form
            autoComplete='off'
            noValidate
            onSubmit={onFormSubmit}
            className='
              w-full
              bg-white
              dark:bg-gray-800
              rounded-xl
              sm:rounded-2xl
              border
              border-gray-100
              dark:border-gray-700
              shadow-sm
              overflow-visible
            '
          >
            {/* ================================================= */}
            {/* HEADER */}
            {/* ================================================= */}

            <div
              className='
                px-4
                sm:px-6
                lg:px-8
                py-4
                sm:py-5
                border-b
                border-gray-100
                dark:border-gray-700
              '
            >
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3 sm:gap-4 min-w-0'>
                  <FaUserCircle
                    className='
                      w-12
                      h-12
                      sm:w-14
                      sm:h-14
                      text-[#B91C1C]
                      flex-shrink-0
                    '
                  />

                  <div className='min-w-0'>
                    <h1
                      className='
                        text-xl
                        sm:text-2xl
                        font-bold
                        text-[#1E293B]
                        dark:text-white
                      '
                    >
                      Profile
                    </h1>

                    <p
                      className='
                        text-xs
                        sm:text-sm
                        text-gray-500
                        dark:text-slate-400
                        mt-0.5
                      '
                    >
                      Manage your profile information
                    </p>
                  </div>
                </div>

                {/* MORE */}

                <div className='relative flex-shrink-0'>
                  <button
                    type='button'
                    className='
                      w-9
                      h-9
                      rounded-full
                      flex
                      items-center
                      justify-center
                      text-gray-500
                      hover:bg-gray-100
                      dark:text-slate-200
                      dark:hover:bg-gray-700
                      transition
                    '
                    onClick={() => setIsDialogOpen(prev => !prev)}
                  >
                    <FiMoreVertical size={21} />
                  </button>

                  {isDialogOpen && (
                    <div
                      className='
                        absolute
                        right-0
                        top-10
                        w-52
                        bg-white
                        dark:bg-slate-800
                        border
                        border-gray-200
                        dark:border-gray-600
                        rounded-xl
                        shadow-xl
                        overflow-hidden
                        z-[100]
                      '
                    >
                      <button
                        type='button'
                        onClick={() => navigate('change-password')}
                        className='
                          w-full
                          flex
                          items-center
                          gap-3
                          px-4
                          py-3
                          text-sm
                          text-gray-700
                          dark:text-white
                          hover:bg-gray-50
                          dark:hover:bg-slate-700
                          border-b
                          border-gray-100
                          dark:border-gray-600
                        '
                      >
                        <IoIosLock size={18} />
                        Change password
                      </button>

                      <button
                        type='button'
                        onClick={() => navigate('reset-password')}
                        className='
                          w-full
                          flex
                          items-center
                          gap-3
                          px-4
                          py-3
                          text-sm
                          text-[#B91C1C]
                          hover:bg-gray-50
                          dark:hover:bg-slate-700
                        '
                      >
                        <IoIosRefresh size={18} />
                        Reset password
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* CONTENT */}
            {/* ================================================= */}

            <div
              className='
                px-4
                sm:px-6
                lg:px-8
                py-5
                sm:py-6
                space-y-6
              '
            >
              {/* ================================================= */}
              {/* STUDENT INFORMATION */}
              {/* ================================================= */}

              <div>
                <div className='mb-3'>
                  <h2
                    className='
                      text-base
                      font-semibold
                      text-[#1E293B]
                      dark:text-white
                    '
                  >
                    Student Information
                  </h2>

                  <p className='text-xs text-gray-500 dark:text-slate-400 mt-0.5'>
                    Academic information
                  </p>
                </div>

                <div
                  className='
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-4
                  '
                >
                  <InputBox
                    label='Student ID'
                    name='student_id'
                    type='text'
                    value={userData?.student_id || ''}
                    disabled={true}
                  />

                  <InputBox
                    label='Department'
                    name='dept'
                    type='text'
                    value={userData?.dept || ''}
                    disabled={true}
                  />
                </div>
              </div>

              {/* ================================================= */}
              {/* BASIC INFORMATION */}
              {/* ================================================= */}

              <div>
                <div className='mb-3'>
                  <h2
                    className='
                      text-base
                      font-semibold
                      text-[#1E293B]
                      dark:text-white
                    '
                  >
                    Basic Information
                  </h2>
                </div>

                <div
                  className='
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-4
                  '
                >
                  {/* NAME */}

                  <InputBox
                    label='Name'
                    name='name'
                    type='text'
                    value={userInput.name}
                    disabled={true}
                  />

                  {/* PHONE */}

                  <InputBox
                    label='Phone'
                    name='phone'
                    type='tel'
                    placeholder='Enter phone number'
                    value={userInput.phone}
                    onChange={handleInputChange}
                  />

                  {/* EMAIL */}

                  <InputBox
                    label='Email'
                    name='email'
                    type='email'
                    value={userData?.email || ''}
                    disabled={true}
                  />

                  {/* ROLE */}

                  {/* <InputBox
                    label='Role'
                    name='role'
                    type='text'
                    value={userData?.role || ''}
                    disabled={true}
                  /> */}
                </div>
              </div>

              {/* ================================================= */}
              {/* BLOOD DONOR INFORMATION */}
              {/* ================================================= */}

              <div>
                <div className='mb-3'>
                  <h2
                    className='
                      text-base
                      font-semibold
                      text-[#1E293B]
                      dark:text-white
                    '
                  >
                    Blood Donor Information
                  </h2>
                </div>

                <div
                  className='
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-4
                  '
                >
                  {/* BLOOD GROUP */}

                  <div className='w-full'>
                    <label
                      className='
                        block
                        text-sm
                        font-medium
                        text-gray-700
                        dark:text-slate-200
                        mb-1.5
                      '
                    >
                      Blood Group
                    </label>

                    <select
                      name='blood_group'
                      value={userInput.blood_group}
                      onChange={handleInputChange}
                      className='
                        w-full
                        h-[42px]
                        px-3
                        rounded-lg
                        border
                        border-gray-300
                        dark:border-slate-600
                        bg-white
                        dark:bg-gray-700
                        text-sm
                        text-gray-700
                        dark:text-slate-100
                        outline-none
                        transition-all
                        focus:border-[#B91C1C]
                        focus:ring-2
                        focus:ring-[#B91C1C]/10
                      '
                    >
                      <option value=''>Select blood group</option>

                      {bloodGroups.map(group => (
                        <option key={group} value={group}>
                          {group}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* LOCATION */}

                  <InputBox
                    label='Current Location'
                    name='location'
                    type='text'
                    placeholder='Enter current location'
                    value={userInput.location}
                    onChange={handleInputChange}
                  />

                  {/* ================================================= */}
                  {/* LAST DONATION - NATIVE INPUT */}
                  {/* ================================================= */}

                  <div className='w-full'>
                    <label
                      htmlFor='last_donation_date'
                      className='
                        block
                        text-sm
                        font-medium
                        text-gray-700
                        dark:text-slate-200
                        mb-1.5
                      '
                    >
                      Last Donation
                    </label>

                    <input
                      id='last_donation_date'
                      name='last_donation_date'
                      type='date'
                      value={userInput.last_donation_date}
                      onChange={handleInputChange}
                      className='
                        block
                        w-full
                        h-[42px]
                        px-3
                        rounded-lg
                        border
                        border-gray-300
                        dark:border-slate-600
                        bg-white
                        dark:bg-gray-700
                        text-sm
                        text-gray-700
                        dark:text-slate-100
                        outline-none
                        transition-all
                        focus:border-[#B91C1C]
                        focus:ring-2
                        focus:ring-[#B91C1C]/10
                      '
                    />
                  </div>

                  {/* ================================================= */}
                  {/* TOTAL DONATIONS - NATIVE INPUT */}
                  {/* ================================================= */}

                  <div className='w-full'>
                    <label
                      htmlFor='total_donations'
                      className='
                        block
                        text-sm
                        font-medium
                        text-gray-700
                        dark:text-slate-200
                        mb-1.5
                      '
                    >
                      Total Donations
                    </label>

                    <input
                      id='total_donations'
                      name='total_donations'
                      type='number'
                      min='0'
                      step='1'
                      value={userInput.total_donations}
                      onChange={handleInputChange}
                      className='
                        block
                        w-full
                        h-[42px]
                        px-3
                        rounded-lg
                        border
                        border-gray-300
                        dark:border-slate-600
                        bg-white
                        dark:bg-gray-700
                        text-sm
                        text-gray-700
                        dark:text-slate-100
                        outline-none
                        transition-all
                        focus:border-[#B91C1C]
                        focus:ring-2
                        focus:ring-[#B91C1C]/10
                      '
                    />
                  </div>
                </div>
              </div>

              {/* ================================================= */}
              {/* PRIVACY */}
              {/* ================================================= */}

              <div
                className='
                  rounded-xl
                  border
                  border-gray-200
                  dark:border-slate-600
                  px-4
                  py-4
                  bg-gray-50/50
                  dark:bg-slate-800/40
                '
              >
                <div className='mb-3'>
                  <h2
                    className='
                      text-base
                      font-semibold
                      text-[#1E293B]
                      dark:text-white
                    '
                  >
                    Donor Privacy
                  </h2>

                  <p className='text-xs text-gray-500 dark:text-slate-400 mt-0.5'>
                    Control what blood seekers can see.
                  </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                  <label
                    className='
                      flex
                      items-center
                      gap-3
                      text-sm
                      text-gray-600
                      dark:text-slate-300
                      cursor-pointer
                    '
                  >
                    <input
                      type='checkbox'
                      name='name_visible'
                      checked={userInput.name_visible}
                      onChange={handleInputChange}
                      className='
                        w-4
                        h-4
                        accent-[#B91C1C]
                        cursor-pointer
                        flex-shrink-0
                      '
                    />

                    <span>Show my name to blood seekers</span>
                  </label>

                  <label
                    className='
                      flex
                      items-center
                      gap-3
                      text-sm
                      text-gray-600
                      dark:text-slate-300
                      cursor-pointer
                    '
                  >
                    <input
                      type='checkbox'
                      name='phone_visible'
                      checked={userInput.phone_visible}
                      onChange={handleInputChange}
                      className='
                        w-4
                        h-4
                        accent-[#B91C1C]
                        cursor-pointer
                        flex-shrink-0
                      '
                    />

                    <span>Show my phone number to blood seekers</span>
                  </label>
                </div>
              </div>

              {/* ================================================= */}
              {/* AVAILABILITY */}
              {/* ================================================= */}

              <div
                className='
                  rounded-xl
                  border
                  border-gray-200
                  dark:border-slate-600
                  px-4
                  py-4
                '
              >
                <div
                  className='
                    flex
                    items-center
                    justify-between
                    gap-4
                  '
                >
                  <div className='min-w-0'>
                    <h2
                      className='
                        text-base
                        font-semibold
                        text-[#1E293B]
                        dark:text-white
                      '
                    >
                      Donation Availability
                    </h2>

                    <p
                      className='
                        text-xs
                        text-gray-500
                        dark:text-slate-400
                        mt-0.5
                        leading-relaxed
                      '
                    >
                      Allow blood seekers to find you.
                    </p>
                  </div>

                  <span
                    className={`
                      inline-flex
                      items-center
                      px-3
                      py-1.5
                      rounded-full
                      text-xs
                      font-medium
                      flex-shrink-0

                      ${
                        userData?.available
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-600'
                      }
                    `}
                  >
                    <span
                      className={`
                        w-1.5
                        h-1.5
                        rounded-full
                        mr-2

                        ${userData?.available ? 'bg-green-600' : 'bg-gray-500'}
                      `}
                    />

                    {userData?.available ? 'Available' : 'Unavailable'}
                  </span>
                </div>
              </div>

              {/* ================================================= */}
              {/* SAVE */}
              {/* ================================================= */}

              <button
                type='submit'
                disabled={!isChanged || isUpdating}
                className='
                  w-full
                  h-11
                  rounded-lg
                  bg-[#B91C1C]
                  hover:bg-[#991B1B]
                  active:scale-[0.99]
                  transition-all
                  duration-200
                  text-white
                  text-sm
                  font-semibold
                  shadow-sm
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                  disabled:hover:bg-[#B91C1C]
                  disabled:active:scale-100
                '
              >
                {isUpdating ? 'Saving Changes...' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}
