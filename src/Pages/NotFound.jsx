import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FiArrowLeft, FiHome, FiSearch, FiHeart } from 'react-icons/fi'

import Layout from '../Layout/Layout'
import NotFoundImg from '../assets/images/not-found.png'

function NotFound () {
  const navigate = useNavigate()

  return (
    <Layout >
      <section className='min-h-screen w-full bg-[#F8FAFC] dark:bg-gray-900 flex items-center justify-center px-4 py-10'>
        <div className='w-full max-w-6xl mx-auto'>
          <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-custom dark:shadow-xl overflow-hidden'>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center min-h-[620px]'>
              {/* Left Content */}
              <div className='order-2 md:order-1 px-6 sm:px-10 lg:px-16 py-12 text-center md:text-left'>
                {/* Small Brand Label */}
                <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B91C1C]/10 text-[#B91C1C] text-xs sm:text-sm font-semibold mb-6'>
                  <FiHeart size={15} />
                  CU BloodLink
                </div>

                {/* 404 */}
                <h1 className='text-7xl sm:text-8xl lg:text-9xl font-extrabold tracking-tight text-[#1E293B] dark:text-white leading-none'>
                  404
                </h1>

                {/* Page Not Found Badge */}
                <div className='inline-block mt-4 px-3 py-1 bg-[#B91C1C] text-white text-xs sm:text-sm font-semibold rounded-md rotate-[-2deg]'>
                  Page not found
                </div>

                <h2 className='mt-7 text-2xl sm:text-3xl font-bold text-[#1E293B] dark:text-white'>
                  Oops! We lost this page.
                </h2>

                <p className='mt-3 max-w-md mx-auto md:mx-0 text-sm sm:text-base leading-7 text-[#334155] dark:text-slate-400'>
                  The page you're looking for doesn't exist or may have been
                  moved. Don't worry, you can return to CU BloodLink and
                  continue finding or supporting blood donors.
                </p>

                {/* Buttons */}
                <div className='flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mt-8'>
                  <button
                    type='button'
                    onClick={() => navigate(-1)}
                    className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#B91C1C] hover:bg-[#991B1B] text-white text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md'
                  >
                    <FiArrowLeft size={18} />
                    Go Back
                  </button>

                  <Link
                    to='/'
                    className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-[#1E293B] dark:border-slate-500 text-[#1E293B] dark:text-slate-200 hover:bg-[#1E293B] hover:text-white dark:hover:bg-slate-700 text-sm font-semibold transition-all duration-200'
                  >
                    <FiHome size={18} />
                    Go Home
                  </Link>

                  <Link
                    to='/donors'
                    className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-[#B91C1C] hover:bg-[#B91C1C]/5 text-sm font-semibold transition-all duration-200'
                  >
                    <FiSearch size={18} />
                    Find Donor
                  </Link>
                </div>
              </div>

              {/* Right Illustration */}
              <div className='order-1 md:order-2 flex items-center justify-center px-6 sm:px-10 lg:px-14 pt-10 md:pt-0'>
                <div className='relative w-full max-w-[480px]'>
                  {/* Background Circle */}
                  <div className='absolute inset-8 sm:inset-12 rounded-full bg-[#B91C1C]/5' />

                  <img
                    src={NotFoundImg}
                    alt='Page not found'
                    className='relative z-10 w-full h-auto object-contain'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className='text-center mt-6'>
            <p className='text-xs sm:text-sm text-gray-500 dark:text-slate-500'>
              Connecting donors. Saving lives.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFound
