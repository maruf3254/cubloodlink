// import React, { useEffect, useState } from "react";
// import { FaSun, FaMoon } from "react-icons/fa";

// export default function Navbar() {
//   // const [darkMode, setDarkMode] = useState(() => {
//   //   // Get the theme from localStorage or default to dark
//   //   const savedTheme = localStorage.getItem("theme");
//   //   return savedTheme ? savedTheme === "dark" : true; // Default to dark if not set
//   // });
//   // const [darkMode, setDarkMode] = useState(

//   // const [darkMode, setDarkMode] = useState(() => {
//   // Get the theme from localStorage or default to dark
//   //   const savedTheme = localStorage.getItem("theme");
//   //    return savedTheme ? savedTheme === "dark" : true; // Default to dark if not set
//   //  });

//   const [darkMode, setDarkMode] = useState(
//     localStorage.getItem("theme") === "dark"
//   );

//   const toggleDarkMode = () => {
//     setDarkMode((prev) => !prev);
//   };

//   useEffect(() => {
//     const element = document.querySelector("html");
//     element.classList.remove("light", "dark");
//     if (darkMode) {
//       element.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       element.classList.add("light");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   return (
//     <nav className="sticky top-0 z-50 md:h-[72px] h-[65px] md:px-[35px] px-[15px] bg-[#ffffffd0] dark:bg-[#21242bc5] shadow-custom backdrop-blur-md flex justify-end">
//       <button className="p-5 rounded-full text-lg font-semibold">
//         {darkMode ? (
//           <FaSun size={26} className="text-white" onClick={toggleDarkMode} />
//         ) : (
//           <FaMoon
//             size={26}
//             className="text-gray-900"
//             onClick={toggleDarkMode}
//           />
//         )}
//       </button>
//     </nav>
//   );
// }

import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  FiMenu,
  FiX,
  FiSearch,
  FiHeart,
  FiInfo,
  FiPhone,
  FiLogIn,
  FiUser,
  FiChevronDown,
  FiLogOut,
  FiHome,
  FiActivity,
} from 'react-icons/fi'

import { logout } from '../Redux/Slices/AuthSlice'
import { FaBusinessTime } from 'react-icons/fa'

// import logo from '../assets/logo.png'

export default function Header () {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [profileMenu, setProfileMenu] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { isLoggedIn, data } = useSelector(state => state.auth)

  const handleLogout = async () => {
    await dispatch(logout())
    setProfileMenu(false)
    setMobileMenu(false)
    navigate('/')
  }

  const navItems = [
    {
      name: 'Home',
      path: '/',
      icon: FiHome
    },
    {
      name: 'Find Donor',
      path: '/donors',
      icon: FiSearch
    },
    {
      name: 'How It Works',
      path: '/how-it-works',
      icon: FiActivity
    },
    {
      name: 'About',
      path: '/about',
      icon: FiInfo
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: FiPhone
    }
  ]

  return (
    <header className='sticky top-0 z-50 w-full'>
      {/* Main Header */}
      <div className='bg-white/95 dark:bg-[#1E293B]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-700'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='h-[76px] flex items-center justify-between'>
            {/* ================= LOGO ================= */}
            <Link
              to='/'
              className='flex items-center gap-3 group'
              onClick={() => setMobileMenu(false)}
            >
              <div className='flex-shrink-0'>
                <img
                  src="https://i.imgur.com/OrFlE5I.png"
                  alt='CU BloodLink'
                  className='h-11 w-11 sm:h-12 sm:w-12 object-contain'
                />
              </div>

              <div className='leading-none'>
                <h1 className='text-xl sm:text-2xl font-bold tracking-tight text-[#1E293B] dark:text-white'>
                  CU
                  <span className='text-[#B91C1C]'>BloodLink</span>
                </h1>

               
              </div>
            </Link>

            {/* ================= DESKTOP NAV ================= */}
            <nav className='hidden lg:flex items-center gap-1'>
              {navItems.map(item => {
                const Icon = item.icon

                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                      ${
                        isActive
                          ? 'text-[#B91C1C] bg-[#B91C1C]/5'
                          : 'text-[#334155] dark:text-slate-300 hover:text-[#B91C1C] hover:bg-slate-50 dark:hover:bg-slate-700/50'
                      }`
                    }
                  >
                    {Icon && <Icon size={16} />}
                    {item.name}
                  </NavLink>
                )
              })}
            </nav>

            {/* ================= RIGHT SIDE ================= */}
            <div className='hidden lg:flex items-center gap-3'>
              {!isLoggedIn ? (
                <Link
                  to='/login'
                  className='flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#B91C1C] hover:bg-[#991B1B] text-white text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md'
                >
                  <FiLogIn size={17} />
                  Login
                </Link>
              ) : (
                <div className='relative'>
                  <button
                    onClick={() => setProfileMenu(!profileMenu)}
                    className='flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition'
                  >
                    <div className='w-9 h-9 rounded-full bg-[#B91C1C]/10 flex items-center justify-center'>
                      <FiUser size={18} className='text-[#B91C1C]' />
                    </div>

                    <div className='hidden xl:block text-left'>
                      <p className='text-sm font-semibold text-[#1E293B] dark:text-white max-w-[120px] truncate'>
                        {data?.fullName || 'Account'}
                      </p>

                      <p className='text-[11px] text-[#334155] dark:text-slate-400'>
                        {data?.role || 'DONOR'}
                      </p>
                    </div>

                    <FiChevronDown
                      size={16}
                      className={`text-[#334155] transition-transform ${
                        profileMenu ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Profile Dropdown */}
                  {profileMenu && (
                    <div className='absolute right-0 top-[58px] w-56 bg-white dark:bg-[#1E293B] rounded-xl border border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden'>
                      <div className='px-4 py-3 border-b border-slate-100 dark:border-slate-700'>
                        <p className='text-sm font-semibold text-[#1E293B] dark:text-white truncate'>
                          {data?.fullName || 'Donor'}
                        </p>

                        <p className='text-xs text-[#334155] dark:text-slate-400 truncate mt-1'>
                          {data?.email}
                        </p>
                      </div>

                      <Link
                        to='/user/profile'
                        onClick={() => setProfileMenu(false)}
                        className='flex items-center gap-3 px-4 py-3 text-sm text-[#334155] dark:text-slate-300 hover:bg-[#F8FAFC] dark:hover:bg-slate-700 hover:text-[#B91C1C] transition'
                      >
                        <FiUser size={17} />
                        My Profile
                      </Link>

                      <button
                        onClick={handleLogout}
                        className='w-full flex items-center gap-3 px-4 py-3 text-sm text-[#B91C1C] hover:bg-[#B91C1C]/5 transition border-t border-slate-100 dark:border-slate-700'
                      >
                        <FiLogOut size={17} />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* ================= MOBILE BUTTON ================= */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className='lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-[#1E293B] dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition'
              aria-label='Toggle menu'
            >
              {mobileMenu ? <FiX size={25} /> : <FiMenu size={25} />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenu ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='bg-white dark:bg-[#1E293B] border-b border-slate-200 dark:border-slate-700 shadow-lg'>
          <div className='px-4 py-4 space-y-1'>
            {navItems.map(item => {
              const Icon = item.icon

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenu(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
                    ${
                      isActive
                        ? 'bg-[#B91C1C]/10 text-[#B91C1C]'
                        : 'text-[#334155] dark:text-slate-300 hover:bg-[#F8FAFC] dark:hover:bg-slate-700'
                    }`
                  }
                >
                  {Icon ? <Icon size={18} /> : <span className='w-[18px]' />}

                  {item.name}
                </NavLink>
              )
            })}

            <div className='pt-3 mt-3 border-t border-slate-200 dark:border-slate-700'>
              {!isLoggedIn ? (
                <Link
                  to='/login'
                  onClick={() => setMobileMenu(false)}
                  className='flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-[#B91C1C] hover:bg-[#991B1B] text-white text-sm font-semibold transition'
                >
                  <FiLogIn size={18} />
                  Login
                </Link>
              ) : (
                <>
                  <Link
                    to='/user/profile'
                    onClick={() => setMobileMenu(false)}
                    className='flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-[#334155] dark:text-slate-300 hover:bg-[#F8FAFC] dark:hover:bg-slate-700'
                  >
                    <FiUser size={18} />
                    My Profile
                  </Link>

                  <button
                    onClick={handleLogout}
                    className='w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-[#B91C1C] hover:bg-[#B91C1C]/5'
                  >
                    <FiLogOut size={18} />
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
