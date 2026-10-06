import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../Redux/Slices/AuthSlice'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillCloseCircle } from 'react-icons/ai'

import {
  FiMenu,
  FiHome,
  FiUsers,
  FiDroplet,
  FiClipboard,
  FiPhone,
  FiBarChart2,
  FiBell,
  FiSettings,
  FiInfo
} from 'react-icons/fi'

import { FaHome } from 'react-icons/fa'

export default function Sidebar ({ hideBar = false }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(false)

  const { isLoggedIn, role } = useSelector(state => state.auth)

  // Logout
  const onLogout = async function () {
    setIsLoading(true)

    await dispatch(logout())

    setIsLoading(false)
    navigate('/')
  }

  // Open drawer
  function changeWidth () {
    const drawerSide = document.getElementsByClassName('drawer-side')

    if (drawerSide[0]) {
      drawerSide[0].style.width = 'auto'
    }
  }

  // Close drawer
  function hideDrawer () {
    const drawerToggle = document.getElementsByClassName('drawer-toggle')

    if (drawerToggle[0]) {
      drawerToggle[0].checked = false
    }

    const drawerSide = document.getElementsByClassName('drawer-side')

    if (drawerSide[0]) {
      drawerSide[0].style.width = '0'
    }
  }

  if (hideBar) {
    return null
  }

  return (
    <div className='drawer absolute left-0 z-50 w-fit'>
      {/* Drawer Toggle */}
      <input className='drawer-toggle' id='my-drawer' type='checkbox' />

      {/* Menu Button */}
      {role === 'ADMIN' && (
        <div className='drawer-content'>
          <label
            htmlFor='my-drawer'
            className='cursor-pointer fixed top-0 left-3'
          >
            <FiMenu
              onClick={changeWidth}
              size={32}
              className='m-4 text-[#1E293B] dark:text-[#F8FAFC]'
            />
          </label>
        </div>
      )}

      {/* Sidebar */}
      <div className='drawer-side w-0 shadow-custom'>
        {/* Overlay */}
        <label htmlFor='my-drawer' className='drawer-overlay w-screen'></label>

        <ul
          className='menu p-4 pt-7 h-[100%] min-w-[250px] max-w-[350px]
          bg-[#F8FAFC]
          dark:bg-[#1E293B]
          backdrop-blur-[8px]
          text-[#334155]
          dark:text-[#F8FAFC]
          font-inter
          md:text-[17px]
          text-base
          font-[600]
          relative'
        >
          {/* Close Button */}
          <li className='w-fit absolute right-2 z-50'>
            <button
              onClick={hideDrawer}
              className='text-[#B91C1C] hover:text-[#B91C1C]'
            >
              <AiFillCloseCircle size={28} />
            </button>
          </li>

          {/* ================= HOME ================= */}

          <li>
            <Link
              to='/'
              className='flex gap-4 items-center
              text-[#334155]
              dark:text-[#F8FAFC]
              hover:text-[#B91C1C]
              transition-colors'
            >
              <FaHome size={18} />
              Home
            </Link>
          </li>

          {/* ================= ADMIN MENU ================= */}

          {role === 'ADMIN' && (
            <>
              {/* Dashboard */}
              <li>
                <Link
                  to='/admin/dashboard'
                  className='flex gap-4 items-center
                  text-[#334155]
                  dark:text-[#F8FAFC]
                  hover:text-[#B91C1C]
                  transition-colors'
                >
                  <FiHome size={18} />
                  Dashboard
                </Link>
              </li>

              {/* Students */}
              <li>
                <Link
                  to='/admin/allstudens'
                  className='flex gap-4 items-center
                  text-[#334155]
                  dark:text-[#F8FAFC]
                  hover:text-[#B91C1C]
                  transition-colors'
                >
                  <FiUsers size={18} />
                  Students
                </Link>
              </li>

              {/* Donors */}
              <li>
                <Link
                  to='/donors'
                  className='flex gap-4 items-center
                  text-[#334155]
                  dark:text-[#F8FAFC]
                  hover:text-[#B91C1C]
                  transition-colors'
                >
                  <FiDroplet size={18} />
                  Donors
                </Link>
              </li>

              {/* Blood Requests */}
              <li>
                <Link
                  to='/blood-requests'
                  className='flex gap-4 items-center
                  text-[#334155]
                  dark:text-[#F8FAFC]
                  hover:text-[#B91C1C]
                  transition-colors'
                >
                  <FiClipboard size={18} />
                  Blood Requests
                </Link>
              </li>

              {/* Contact Logs */}
              <li>
                <Link
                  to='/contact-logs'
                  className='flex gap-4 items-center
                  text-[#334155]
                  dark:text-[#F8FAFC]
                  hover:text-[#B91C1C]
                  transition-colors'
                >
                  <FiPhone size={18} />
                  Contact Logs
                </Link>
              </li>

              {/* Statistics */}
              <li>
                <Link
                  to='/statistics'
                  className='flex gap-4 items-center
                  text-[#334155]
                  dark:text-[#F8FAFC]
                  hover:text-[#B91C1C]
                  transition-colors'
                >
                  <FiBarChart2 size={18} />
                  Statistics
                </Link>
              </li>

              {/* Notifications */}
              <li>
                <Link
                  to='/notifications'
                  className='flex gap-4 items-center
                  text-[#334155]
                  dark:text-[#F8FAFC]
                  hover:text-[#B91C1C]
                  transition-colors'
                >
                  <FiBell size={18} />
                  Notifications
                </Link>
              </li>

              {/* Settings */}
              <li>
                <Link
                  to='/settings'
                  className='flex gap-4 items-center
                  text-[#334155]
                  dark:text-[#F8FAFC]
                  hover:text-[#B91C1C]
                  transition-colors'
                >
                  <FiSettings size={18} />
                  Settings
                </Link>
              </li>
            </>
          )}

          {/* ================= INSTRUCTOR ================= */}

          {(role === 'ADMIN' || role === 'INSTRUCTOR') && (
            <li>
              {/*
                Instructor menu can be added here later.
              */}
            </li>
          )}

          {/* ================= CONTACT ================= */}

          <li>
            <Link
              to='/contact'
              className='flex gap-4 items-center
              text-[#334155]
              dark:text-[#F8FAFC]
              hover:text-[#B91C1C]
              transition-colors'
            >
              <FiPhone size={18} />
              Contact Us
            </Link>
          </li>

          {/* ================= ABOUT ================= */}

          <li>
            <Link
              to='/about'
              className='flex gap-4 items-center
              text-[#334155]
              dark:text-[#F8FAFC]
              hover:text-[#B91C1C]
              transition-colors'
            >
              <FiInfo size={18} />
              About Us
            </Link>
          </li>

          {/* ================= AUTH BUTTONS ================= */}

          {isLoggedIn ? (
            /* Logged In */
            <li className='absolute bottom-4 w-[90%]'>
              <div className='w-full flex md:flex-row flex-col gap-2 items-center justify-center'>
                {/* Profile */}
                <button
                  className='
                  bg-[#B91C1C]
                  text-[#F8FAFC]
                  hover:bg-[#1E293B]
                  px-3.5 py-2.5
                  font-semibold
                  rounded-md
                  w-full
                  transition-colors
                  '
                >
                  <Link to='/user/profile'>Profile</Link>
                </button>

                {/* Logout */}
                <button
                  className='
                  bg-[#1E293B]
                  text-[#F8FAFC]
                  hover:bg-[#B91C1C]
                  px-3.5 py-2.5
                  font-semibold
                  rounded-md
                  w-full
                  transition-colors
                  '
                  onClick={onLogout}
                  disabled={isLoading}
                >
                  {isLoading ? 'Logout...' : 'Logout'}
                </button>
              </div>
            </li>
          ) : (
            /* Logged Out */
            <li className='absolute bottom-4 w-[90%]'>
              <div className='w-full flex items-center justify-center gap-2'>
                {/* Login */}
                <button
                  className='
                  bg-[#B91C1C]
                  text-[#F8FAFC]
                  hover:bg-[#1E293B]
                  px-3.5 py-2.5
                  font-semibold
                  rounded-md
                  w-full
                  transition-colors
                  '
                >
                  <Link to='/login'>Login</Link>
                </button>

                {/* Signup */}
                <button
                  className='
                  bg-[#1E293B]
                  text-[#F8FAFC]
                  hover:bg-[#B91C1C]
                  px-3.5 py-2.5
                  font-semibold
                  rounded-md
                  w-full
                  transition-colors
                  '
                >
                  <Link to='/signup'>Signup</Link>
                </button>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
