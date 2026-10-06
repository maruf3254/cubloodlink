import React from 'react'
import { Link } from 'react-router-dom'

import {
  FiHeart,
  FiUsers,
  FiSearch,
  FiShield,
  FiActivity,
  FiArrowRight,
  FiCheckCircle,
  FiUserCheck
} from 'react-icons/fi'

import Layout from '../Layout/Layout'

export default function About () {
  const features = [
    {
      icon: FiSearch,
      title: 'Find Blood Donors',
      description:
        'Quickly find available blood donors through student verification and a simple search process.'
    },
    {
      icon: FiUsers,
      title: 'University Community',
      description:
        'Built specifically to connect the University of Chittagong community when blood support is needed.'
    },
    {
      icon: FiShield,
      title: 'Privacy Focused',
      description:
        'Donor information is handled with privacy controls so donors can decide what information is visible.'
    },
    {
      icon: FiActivity,
      title: 'Available Donors',
      description:
        'The platform helps seekers identify donors who are currently active and available to donate.'
    }
  ]

  const benefits = [
    'Student ID based verification',
    'Simple and fast donor discovery',
    'Available donor information',
    'Donor privacy controls',
    'University-focused blood network',
    'Easy access from desktop and mobile'
  ]

  return (
    <Layout>
      <main className='bg-[#F8FAFC] dark:bg-gray-900'>
        {/* =====================================================
            HERO SECTION
        ====================================================== */}
        <section className='relative overflow-hidden'>
          <div className='absolute inset-0 pointer-events-none'>
            <div className='absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#B91C1C]/5' />
            <div className='absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-[#1E293B]/5' />
          </div>

          <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
            <div className='max-w-4xl mx-auto text-center'>
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B91C1C]/10 text-[#B91C1C] text-xs sm:text-sm font-semibold mb-6'>
                <FiHeart size={16} />
                CU BloodLink
              </div>

              <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1E293B] dark:text-white font-inter'>
                Connecting Donors.
                <span className='block text-[#B91C1C] mt-1'>Saving Lives.</span>
              </h1>

              <p className='mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-8 text-[#334155] dark:text-slate-400'>
                CU BloodLink is a university-focused blood donor network created
                to make blood support faster, easier and more accessible for the
                University of Chittagong community.
              </p>

              <div className='flex flex-col sm:flex-row items-center justify-center gap-3 mt-8'>
                <Link
                  to='/find-donor'
                  className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#B91C1C] hover:bg-[#991B1B] text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md'
                >
                  <FiSearch size={18} />
                  Find a Donor
                  <FiArrowRight size={17} />
                </Link>

                <Link
                  to='/signup'
                  className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-[#1E293B] dark:border-slate-500 text-[#1E293B] dark:text-slate-200 hover:bg-[#1E293B] hover:text-white dark:hover:bg-slate-700 font-semibold text-sm transition-all duration-200'
                >
                  Become a Donor
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* =====================================================
            PURPOSE SECTION
        ====================================================== */}
        <section className='py-14 md:py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center'>
              {/* Content */}
              <div>
                <span className='inline-flex items-center gap-2 text-[#B91C1C] text-sm font-semibold'>
                  <span className='w-8 h-px bg-[#B91C1C]' />
                  OUR PURPOSE
                </span>

                <h2 className='mt-4 text-3xl sm:text-4xl font-bold text-[#1E293B] dark:text-white'>
                  Making blood support
                  <span className='text-[#B91C1C]'> more accessible.</span>
                </h2>

                <p className='mt-5 text-sm sm:text-base leading-8 text-[#334155] dark:text-slate-400'>
                  Finding a suitable blood donor during an emergency can be
                  difficult and time-consuming. CU BloodLink was designed to
                  simplify that process by creating a connected donor network
                  within the University of Chittagong community.
                </p>

                <p className='mt-4 text-sm sm:text-base leading-8 text-[#334155] dark:text-slate-400'>
                  The platform verifies students against official student
                  records and helps blood seekers discover active and available
                  donors through a simple, accessible interface.
                </p>
              </div>

              {/* Visual Card */}
              <div className='relative'>
                <div className='bg-[#1E293B] rounded-2xl p-7 sm:p-9 md:p-10 text-white'>
                  <div className='w-14 h-14 rounded-xl bg-[#B91C1C] flex items-center justify-center'>
                    <FiHeart size={27} />
                  </div>

                  <h3 className='mt-7 text-2xl sm:text-3xl font-bold'>
                    One community.
                    <span className='block text-[#B91C1C]'>
                      One connection.
                    </span>
                  </h3>

                  <p className='mt-4 text-sm leading-7 text-slate-300'>
                    Every donor can make a difference. CU BloodLink aims to make
                    that connection easier when it matters most.
                  </p>

                  <div className='mt-7 pt-6 border-t border-white/10 flex items-center gap-3'>
                    <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center'>
                      <FiUserCheck size={19} />
                    </div>

                    <div>
                      <p className='text-sm font-semibold'>
                        Verified Community
                      </p>

                      <p className='text-xs text-slate-400 mt-0.5'>
                        University of Chittagong
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =====================================================
            FEATURES
        ====================================================== */}
        <section className='py-14 md:py-20 bg-white dark:bg-gray-800/50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='max-w-2xl mx-auto text-center mb-10 md:mb-14'>
              <span className='text-[#B91C1C] text-sm font-semibold uppercase tracking-wider'>
                What We Provide
              </span>

              <h2 className='mt-3 text-3xl sm:text-4xl font-bold text-[#1E293B] dark:text-white'>
                Built for faster blood connections
              </h2>

              <p className='mt-4 text-sm sm:text-base leading-7 text-[#334155] dark:text-slate-400'>
                CU BloodLink combines student verification, donor availability
                and privacy controls into one simple platform.
              </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
              {features.map(feature => {
                const Icon = feature.icon

                return (
                  <div
                    key={feature.title}
                    className='bg-[#F8FAFC] dark:bg-gray-800 rounded-xl border border-slate-100 dark:border-slate-700 p-6 hover:shadow-custom dark:hover:shadow-xl transition-all duration-300'
                  >
                    <div className='w-12 h-12 rounded-xl bg-[#B91C1C]/10 flex items-center justify-center'>
                      <Icon size={23} className='text-[#B91C1C]' />
                    </div>

                    <h3 className='mt-5 text-lg font-bold text-[#1E293B] dark:text-white'>
                      {feature.title}
                    </h3>

                    <p className='mt-2 text-sm leading-6 text-[#334155] dark:text-slate-400'>
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        {/* =====================================================
            WHY CU BLOODLINK
        ====================================================== */}
        <section className='py-14 md:py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center'>
              {/* Left */}
              <div>
                <span className='inline-flex items-center gap-2 text-[#B91C1C] text-sm font-semibold'>
                  <span className='w-8 h-px bg-[#B91C1C]' />
                  WHY CU BLOODLINK
                </span>

                <h2 className='mt-4 text-3xl sm:text-4xl font-bold text-[#1E293B] dark:text-white'>
                  Designed around the
                  <span className='text-[#B91C1C]'> university community.</span>
                </h2>

                <p className='mt-5 text-sm sm:text-base leading-8 text-[#334155] dark:text-slate-400'>
                  CU BloodLink focuses on creating a trusted environment where
                  students can help one another during critical moments.
                </p>

                <div className='mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  {benefits.map(benefit => (
                    <div key={benefit} className='flex items-start gap-3'>
                      <FiCheckCircle
                        size={18}
                        className='text-[#B91C1C] mt-0.5 flex-shrink-0'
                      />

                      <span className='text-sm text-[#334155] dark:text-slate-300'>
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Stats */}
              <div className='grid grid-cols-2 gap-4'>
                <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-custom dark:shadow-xl p-6 sm:p-7'>
                  <div className='w-11 h-11 rounded-lg bg-[#B91C1C]/10 flex items-center justify-center'>
                    <FiUsers size={21} className='text-[#B91C1C]' />
                  </div>

                  <p className='mt-5 text-2xl sm:text-3xl font-bold text-[#1E293B] dark:text-white'>
                    Community
                  </p>

                  <p className='mt-1 text-sm text-gray-500 dark:text-slate-400'>
                    University focused
                  </p>
                </div>

                <div className='bg-[#1E293B] rounded-2xl p-6 sm:p-7 text-white'>
                  <div className='w-11 h-11 rounded-lg bg-[#B91C1C] flex items-center justify-center'>
                    <FiHeart size={21} />
                  </div>

                  <p className='mt-5 text-2xl sm:text-3xl font-bold'>Life</p>

                  <p className='mt-1 text-sm text-slate-400'>
                    Every donation matters
                  </p>
                </div>

                <div className='bg-[#1E293B] rounded-2xl p-6 sm:p-7 text-white'>
                  <div className='w-11 h-11 rounded-lg bg-[#B91C1C] flex items-center justify-center'>
                    <FiShield size={21} />
                  </div>

                  <p className='mt-5 text-2xl sm:text-3xl font-bold'>Privacy</p>

                  <p className='mt-1 text-sm text-slate-400'>
                    Donor controlled
                  </p>
                </div>

                <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-custom dark:shadow-xl p-6 sm:p-7'>
                  <div className='w-11 h-11 rounded-lg bg-[#B91C1C]/10 flex items-center justify-center'>
                    <FiActivity size={21} className='text-[#B91C1C]' />
                  </div>

                  <p className='mt-5 text-2xl sm:text-3xl font-bold text-[#1E293B] dark:text-white'>
                    Available
                  </p>

                  <p className='mt-1 text-sm text-gray-500 dark:text-slate-400'>
                    Active donor network
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =====================================================
            SPECIAL ACKNOWLEDGEMENT
        ====================================================== */}

        <section className='py-14 md:py-20 bg-white dark:bg-gray-800/50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Section Heading */}
            <div className='max-w-3xl mx-auto text-center mb-10 md:mb-12'>
              <span className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B91C1C]/10 text-[#B91C1C] text-xs sm:text-sm font-semibold'>
                Our Supporters
              </span>

              <h2 className='mt-4 text-3xl sm:text-4xl md:text-[42px] font-extrabold tracking-tight text-[#1E293B] dark:text-white'>
                With gratitude for
                <span className='text-[#B91C1C]'> valuable support.</span>
              </h2>

              <p className='mt-4 text-sm sm:text-base leading-7 text-[#334155] dark:text-slate-400'>
                CU BloodLink acknowledges the people whose encouragement,
                support and cooperation have contributed to the development and
                journey of this initiative.
              </p>
            </div>

            {/* Abdullah Al Noman */}
            <div className='max-w-5xl mx-auto relative overflow-hidden bg-[#F8FAFC] dark:bg-gray-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-custom dark:shadow-xl'>
              {/* Decorative Background */}
              <div className='absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#B91C1C]/5' />
              <div className='absolute -bottom-28 -left-20 w-72 h-72 rounded-full bg-[#1E293B]/5 dark:bg-white/5' />

              <div className='relative p-7 sm:p-9 md:p-12'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center'>
                  {/* Photo */}
                  <div className='lg:col-span-1 flex justify-center'>
                    <div className='relative'>
                      {/* Outer Rings */}
                      <div className='absolute -inset-2 rounded-full border border-[#B91C1C]/30' />
                      <div className='absolute -inset-5 rounded-full border border-[#1E293B]/5 dark:border-white/5' />

                      {/* Image */}
                      <div className='relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden bg-[#1E293B] ring-4 ring-white dark:ring-gray-800 shadow-2xl'>
                        <img
                          src='https://i.imgur.com/wjWyt5b.jpeg'
                          alt='Abdullah Al Noman'
                          className='w-full h-full object-cover object-center'
                        />
                      </div>

                      {/* Badge */}
                      <div className='absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#B91C1C] text-white text-[10px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-lg'>
                        CU BloodLink
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className='lg:col-span-2 text-center lg:text-left'>
                    {/* Label */}
                    <div className='inline-flex items-center gap-2 text-[#B91C1C] text-xs font-bold uppercase tracking-[0.2em]'>
                      <span className='w-7 h-px bg-[#B91C1C]' />
                      Special Acknowledgement
                      <span className='w-7 h-px bg-[#B91C1C] lg:hidden' />
                    </div>

                    {/* Name */}
                    <h3 className='mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E293B] dark:text-white tracking-tight'>
                      Abdullah Al Noman
                    </h3>

                    {/* Designation */}
                    <p className='mt-2 text-sm sm:text-base font-semibold text-[#B91C1C]'>
                      General Secretary, Chittagong University JCD
                    </p>

                    {/* Divider */}
                    <div className='w-full h-px bg-slate-200 dark:bg-white/10 my-6' />

                    {/* Description */}
                    <p className='text-sm sm:text-base leading-7 text-[#334155] dark:text-slate-300 max-w-2xl'>
                      We sincerely acknowledge the valuable support,
                      encouragement and overall cooperation of Abdullah Al Noman
                      in the development and advancement of CU BloodLink. His
                      cooperation has been meaningful to the journey of this
                      initiative and its vision of building a more connected,
                      responsive and accessible blood support network within the
                      university community.
                    </p>

                    {/* Bottom Highlight */}
                    <div className='mt-6 flex flex-col sm:flex-row items-center lg:items-start gap-4'>
                      <div className='flex items-center gap-3'>
                        <div className='w-10 h-10 rounded-full bg-[#B91C1C]/10 flex items-center justify-center flex-shrink-0'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            className='w-5 h-5 text-[#B91C1C]'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z'
                            />
                          </svg>
                        </div>

                        <div className='text-left'>
                          <p className='text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500'>
                            Our Appreciation
                          </p>

                          <p className='text-sm font-medium text-[#334155] dark:text-slate-200 mt-0.5'>
                            With gratitude for his support and cooperation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
    CREATOR / INITIATIVE SECTION
====================================================== */}
        <section className='py-14 md:py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='max-w-5xl mx-auto relative overflow-hidden bg-[#1E293B] rounded-3xl shadow-xl'>
              {/* Decorative Elements */}
              <div className='absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#B91C1C]/10' />
              <div className='absolute -bottom-28 -left-20 w-72 h-72 rounded-full bg-white/5' />

              <div className='relative p-7 sm:p-9 md:p-12'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center'>
                  {/* =================================================
              PHOTO
          ================================================== */}
                  <div className='lg:col-span-1 flex justify-center'>
                    <div className='relative'>
                      {/* Outer Ring */}
                      <div className='absolute -inset-2 rounded-full border border-[#B91C1C]/40' />

                      <div className='absolute -inset-5 rounded-full border border-white/5' />

                      <div
                        aria-hidden='true'
                        className='relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden bg-[#B91C1C] ring-4 ring-white/10 shadow-2xl'
                      >
                        <img
                          // src='https://i.imgur.com/UcwpgV8.png'
                          src='https://i.imgur.com/lriESh7.png'
                          alt='Imtiaz Jabed'
                          className='w-full h-full object-cover object-center'
                        />
                      </div>

                      {/* Small Badge */}
                      <div className='absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#B91C1C] text-white text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg'>
                        CU BloodLink
                      </div>
                    </div>
                  </div>

                  {/* =================================================
              CREATOR INFORMATION
          ================================================== */}
                  <div className='lg:col-span-2 text-center lg:text-left'>
                    {/* Label */}
                    <div className='inline-flex items-center gap-2 text-[#B91C1C] text-xs font-bold uppercase tracking-[0.2em]'>
                      <span className='w-7 h-px bg-[#B91C1C]' />
                      An Initiative By
                      <span className='w-7 h-px bg-[#B91C1C] lg:hidden' />
                    </div>

                    {/* Name */}
                    <h2 className='mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight'>
                      Imtiaz Jabed
                    </h2>

                    <p className='mt-2 text-sm sm:text-base text-slate-400'>
                      University of Chittagong
                    </p>

                    {/* Positions */}
                    <div className='mt-6 flex flex-wrap justify-center lg:justify-start gap-2'>
                      <span className='inline-flex items-center px-3.5 py-2 rounded-lg bg-[#B91C1C]/15 border border-[#B91C1C]/30 text-[#fca5a5] text-xs sm:text-sm font-semibold'>
                        AGS
                      </span>

                      <span className='inline-flex items-center px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs sm:text-sm font-medium'>
                        Shahjalal Hall Students Union
                      </span>

                      <span className='inline-flex items-center px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs sm:text-sm font-medium'>
                        CUCSU
                      </span>

                      <span className='inline-flex items-center px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs sm:text-sm font-medium'>
                        Publicity Secretary, CU JCD
                      </span>
                    </div>

                    {/* Divider */}
                    <div className='w-full h-px bg-white/10 my-6' />

                    {/* Description */}
                    <p className='text-sm sm:text-base leading-7 text-slate-300 max-w-2xl'>
                      CU BloodLink was initiated by Imtiaz Jabed with the vision
                      of creating a more connected, responsive and accessible
                      blood donation network for the University of Chittagong
                      community.
                    </p>

                    {/* Vision + Facebook */}
                    <div className='mt-6 flex flex-col sm:flex-row items-center lg:items-start gap-4'>
                      {/* Vision */}
                      <div className='flex items-center gap-3'>
                        <div className='w-10 h-10 rounded-full bg-[#B91C1C]/15 flex items-center justify-center flex-shrink-0'>
                          <FiHeart size={18} className='text-[#B91C1C]' />
                        </div>

                        <div className='text-left'>
                          <p className='text-xs uppercase tracking-wider text-slate-500'>
                            Our Vision
                          </p>

                          <p className='text-sm font-medium text-slate-200 mt-0.5'>
                            Connecting donors. Saving lives.
                          </p>
                        </div>
                      </div>

                      {/* Facebook */}
                      <a
                        href='https://www.facebook.com/imtiazjabed.amiree/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:bg-[#B91C1C] hover:border-[#B91C1C] hover:text-white transition-all duration-200 text-sm font-semibold'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          className='w-5 h-5'
                        >
                          <path d='M13.5 22v-8h2.75l.5-3h-3.25V9.05c0-.87.29-1.55 1.58-1.55h1.67V4.8c-.29-.04-1.28-.13-2.43-.13-2.4 0-4.04 1.47-4.04 4.17V11H7.5v3h2.78v8h3.22Z' />
                        </svg>
                        Facebook Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =====================================================
            CTA SECTION
        ====================================================== */}
        <section className='pb-16 md:pb-24'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-custom dark:shadow-xl p-8 sm:p-10 md:p-12 text-center'>
              <div className='mx-auto w-14 h-14 rounded-full bg-[#B91C1C]/10 flex items-center justify-center'>
                <FiHeart size={26} className='text-[#B91C1C]' />
              </div>

              <h2 className='mt-5 text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E293B] dark:text-white'>
                Be part of the connection.
              </h2>

              <p className='mt-3 max-w-xl mx-auto text-sm sm:text-base leading-7 text-[#334155] dark:text-slate-400'>
                Whether you need blood or want to help someone in need, CU
                BloodLink is here to connect the university community.
              </p>

              <div className='flex flex-col sm:flex-row items-center justify-center gap-3 mt-7'>
                <Link
                  to='/donors'
                  className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#B91C1C] hover:bg-[#991B1B] text-white font-semibold text-sm transition'
                >
                  <FiSearch size={18} />
                  Find a Donor
                </Link>

                <Link
                  to='/signup'
                  className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-[#1E293B] dark:border-slate-500 text-[#1E293B] dark:text-slate-200 hover:bg-[#1E293B] hover:text-white dark:hover:bg-slate-700 font-semibold text-sm transition'
                >
                  Become a Donor
                  <FiArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
