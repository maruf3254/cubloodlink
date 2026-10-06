import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout/Layout'

import {
  FiArrowRight,
  FiDroplet,
  FiHeart,
  FiSearch,
  FiUserPlus,
  FiShield,
  FiClock,
  FiMapPin,
  FiCheckCircle,
  FiActivity,
  FiUsers,
  FiPhone
} from 'react-icons/fi'

export default function HomePage () {
  return (
    <Layout>
      <main className='bg-[#F8FAFC] text-[#334155]'>
        {/* ================= HERO ================= */}
       
<section className='relative overflow-hidden min-h-[88vh] flex items-center bg-[#F8FAFC]'>

  {/* =========================================================
      BACKGROUND DECORATION
  ========================================================= */}
  <div className='absolute inset-0 pointer-events-none'>

    {/* Large soft circles */}
    <div className='absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-[#B91C1C]/5 rounded-full blur-3xl' />

    <div className='absolute -bottom-48 -left-48 w-[34rem] h-[34rem] bg-[#1E293B]/5 rounded-full blur-3xl' />

    {/* Subtle center glow */}
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-[#B91C1C]/[0.025] rounded-full blur-3xl' />

    {/* Minimal grid */}
    <div
      className='absolute inset-0 opacity-[0.025]'
      style={{
        backgroundImage:
          'linear-gradient(#1E293B 1px, transparent 1px), linear-gradient(90deg, #1E293B 1px, transparent 1px)',
        backgroundSize: '44px 44px',
      }}
    />
  </div>

  <div className='max-w-7xl mx-auto w-full px-5 sm:px-6 md:px-10 py-16 md:py-20 lg:py-24 relative z-10'>

    <div className='grid lg:grid-cols-2 gap-14 lg:gap-20 xl:gap-24 items-center'>

      {/* =========================================================
          LEFT CONTENT
      ========================================================= */}
      <div className='max-w-2xl'>

        {/* Badge */}
        <div className='inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-sm border border-slate-200 shadow-sm rounded-full px-3.5 py-2 mb-7 hover:shadow-md transition-shadow duration-300'>

          <span className='flex items-center justify-center w-7 h-7 rounded-full bg-[#B91C1C] text-white shadow-sm'>
            <FiDroplet size={14} />
          </span>

          <span className='text-xs sm:text-sm font-bold tracking-wide text-[#1E293B]'>
            University Blood Donation Network
          </span>

          <span className='w-2 h-2 rounded-full bg-[#B91C1C] animate-pulse' />
        </div>

        {/* Small eyebrow */}
        <div className='flex items-center gap-3 mb-4'>
          <span className='w-10 h-[2px] bg-[#B91C1C]' />

          <span className='text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#B91C1C]'>
            CU BloodLink
          </span>
        </div>

        {/* Main Heading */}
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.7rem] font-extrabold leading-[1.02] tracking-[-0.035em] text-[#1E293B]'>

          One campus.
          <br />

          <span className='relative inline-block text-[#B91C1C]'>
            Thousands of lives.

            {/* Underline */}
            <span className='absolute left-0 right-0 -bottom-1 sm:-bottom-2 h-[3px] sm:h-[4px] bg-[#B91C1C]/15 rounded-full' />
          </span>

          <br />

          <span className='text-[#1E293B]'>
            One connection.
          </span>
        </h1>

        {/* Description */}
        <p className='mt-7 text-base md:text-lg lg:text-xl leading-8 text-[#334155] max-w-xl'>
          CU BloodLink connects students who need blood with verified
          donors across the university community — making it easier to
          find the right donor when every moment matters.
        </p>

        {/* Buttons */}
        <div className='flex flex-col sm:flex-row gap-3.5 mt-9'>

          <Link
            to='/signup'
            className='group relative inline-flex items-center justify-center gap-3 overflow-hidden bg-[#B91C1C] hover:bg-[#991B1B] text-white px-6 sm:px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-lg shadow-[#B91C1C]/20 hover:shadow-xl hover:shadow-[#B91C1C]/25 transition-all duration-300'
          >
            <span className='absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300' />

            <span className='relative'>
              Become a Donor
            </span>

            <FiArrowRight
              className='relative group-hover:translate-x-1.5 transition-transform duration-300'
              size={18}
            />
          </Link>

          <Link
            to='/donors'
            className='group inline-flex items-center justify-center gap-3 bg-white hover:bg-[#1E293B] hover:text-white border border-slate-200 hover:border-[#1E293B] text-[#1E293B] px-6 sm:px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-sm hover:shadow-lg transition-all duration-300'
          >
            <FiSearch
              size={18}
              className='group-hover:scale-110 transition-transform duration-300'
            />

            Find a Donor
          </Link>
        </div>

        {/* Trust Points */}
        <div className='flex flex-wrap gap-x-6 gap-y-3 mt-8'>

          <div className='flex items-center gap-2 text-sm font-medium text-[#334155]'>
            <span className='flex items-center justify-center w-6 h-6 rounded-full bg-[#B91C1C]/10'>
              <FiCheckCircle
                className='text-[#B91C1C]'
                size={14}
              />
            </span>

            Verified Students
          </div>

          <div className='flex items-center gap-2 text-sm font-medium text-[#334155]'>
            <span className='flex items-center justify-center w-6 h-6 rounded-full bg-[#B91C1C]/10'>
              <FiShield
                className='text-[#B91C1C]'
                size={14}
              />
            </span>

            Privacy Focused
          </div>

          <div className='flex items-center gap-2 text-sm font-medium text-[#334155]'>
            <span className='flex items-center justify-center w-6 h-6 rounded-full bg-[#B91C1C]/10'>
              <FiClock
                className='text-[#B91C1C]'
                size={14}
              />
            </span>

            Quick Connection
          </div>

        </div>

        {/* Bottom mini trust line */}
        <div className='mt-9 flex items-center gap-3 text-xs sm:text-sm text-slate-500'>

          <div className='flex -space-x-2'>
            <span className='w-7 h-7 rounded-full bg-[#1E293B] border-2 border-[#F8FAFC]' />
            <span className='w-7 h-7 rounded-full bg-[#B91C1C] border-2 border-[#F8FAFC]' />
            <span className='w-7 h-7 rounded-full bg-[#334155] border-2 border-[#F8FAFC]' />
          </div>

          <span>
            Built for the University of Chittagong community
          </span>

        </div>

      </div>


      {/* =========================================================
          RIGHT VISUAL
      ========================================================= */}
      <div className='relative flex items-center justify-center lg:justify-end'>

        {/* Large decorative circle */}
        <div className='absolute w-[24rem] h-[24rem] sm:w-[28rem] sm:h-[28rem] rounded-full border border-[#B91C1C]/10' />

        <div className='absolute w-[20rem] h-[20rem] sm:w-[24rem] sm:h-[24rem] rounded-full border border-[#1E293B]/5' />

        {/* Main Card Wrapper */}
        <div className='relative w-full max-w-md'>

          {/* Glow */}
          <div className='absolute -inset-5 bg-[#B91C1C]/10 rounded-[3rem] blur-3xl' />

          {/* Main Card */}
          <div className='relative bg-white/95 backdrop-blur-xl border border-white rounded-[2rem] shadow-[0_25px_70px_rgba(30,41,59,0.14)] p-5 sm:p-6 md:p-7'>

            {/* Top */}
            <div className='flex items-center justify-between mb-6'>

              <div>
                <div className='flex items-center gap-2'>
                  <span className='w-2 h-2 rounded-full bg-[#B91C1C] animate-pulse' />

                  <p className='text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#334155]'>
                    CU BloodLink
                  </p>
                </div>

                <h3 className='text-xl sm:text-2xl font-extrabold text-[#1E293B] mt-1'>
                  Blood Network
                </h3>
              </div>

              <div className='relative'>
                <div className='absolute inset-0 bg-[#B91C1C]/20 rounded-2xl blur-md' />

                <div className='relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#B91C1C] text-white flex items-center justify-center shadow-lg shadow-[#B91C1C]/20'>
                  <FiDroplet size={25} />
                </div>
              </div>

            </div>


            {/* Blood Request Card */}
            <div className='relative overflow-hidden bg-[#F8FAFC] border border-slate-200 rounded-2xl p-5 sm:p-6'>

              {/* Decorative */}
              <div className='absolute -right-10 -top-10 w-28 h-28 rounded-full bg-[#B91C1C]/5' />

              <div className='relative flex items-center justify-between'>

                <div>
                  <div className='flex items-center gap-2'>
                    <span className='w-2 h-2 rounded-full bg-[#B91C1C]' />

                    <p className='text-xs sm:text-sm font-medium text-[#334155]'>
                      Blood needed
                    </p>
                  </div>

                  <p className='text-5xl sm:text-6xl font-extrabold text-[#B91C1C] mt-1 tracking-tight'>
                    O+
                  </p>

                  <p className='text-xs text-slate-500 mt-1'>
                    Urgent requirement
                  </p>
                </div>

                <div className='relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[9px] border-[#B91C1C]/10 flex items-center justify-center'>

                  <div className='absolute inset-2 rounded-full bg-[#B91C1C]/5' />

                  <FiDroplet
                    size={31}
                    className='relative text-[#B91C1C]'
                  />

                </div>

              </div>

              <div className='flex items-center gap-2 mt-5 pt-4 border-t border-slate-200 text-sm text-[#334155]'>
                <FiMapPin
                  className='text-[#B91C1C]'
                  size={16}
                />

                <span>
                  Chittagong University
                </span>
              </div>

            </div>


            {/* Donor Card */}
            <div className='mt-4 border border-slate-200 rounded-2xl p-4 sm:p-5 bg-white'>

              <div className='flex items-center gap-4'>

                <div className='relative flex-shrink-0'>
                  <div className='w-12 h-12 rounded-full bg-[#1E293B] text-white flex items-center justify-center shadow-md'>
                    <FiUserPlus size={21} />
                  </div>

                  <span className='absolute -right-0.5 -bottom-0.5 w-3.5 h-3.5 rounded-full bg-[#B91C1C] border-2 border-white' />
                </div>

                <div className='flex-1 min-w-0'>
                  <p className='font-bold text-[#1E293B]'>
                    Verified Donor
                  </p>

                  <p className='text-xs sm:text-sm text-[#334155] mt-0.5'>
                    Available for donation
                  </p>
                </div>

                <div className='flex items-center justify-center w-9 h-9 rounded-full bg-[#B91C1C]/10'>
                  <FiCheckCircle
                    className='text-[#B91C1C]'
                    size={20}
                  />
                </div>

              </div>

              {/* Donor Info */}
              <div className='grid grid-cols-2 gap-3 mt-4'>

                <div className='bg-[#F8FAFC] border border-slate-100 rounded-xl p-3'>
                  <p className='text-[10px] sm:text-xs text-[#334155] uppercase tracking-wide'>
                    Blood Group
                  </p>

                  <p className='font-extrabold text-[#1E293B] mt-1'>
                    O+
                  </p>
                </div>

                <div className='bg-[#F8FAFC] border border-slate-100 rounded-xl p-3'>
                  <p className='text-[10px] sm:text-xs text-[#334155] uppercase tracking-wide'>
                    Status
                  </p>

                  <div className='flex items-center gap-1.5 mt-1'>
                    <span className='w-1.5 h-1.5 rounded-full bg-[#B91C1C]' />

                    <p className='font-bold text-[#1E293B]'>
                      Available
                    </p>
                  </div>
                </div>

              </div>

            </div>


            {/* Bottom Message */}
            <div className='flex items-center justify-center gap-2 mt-5 pt-1 text-xs sm:text-sm font-semibold text-[#334155]'>
              <FiHeart
                className='text-[#B91C1C]'
                size={16}
              />

              Every donation can make a difference.
            </div>

          </div>


          {/* =====================================================
              FLOATING CARD — COMMUNITY
          ===================================================== */}
          <div className='absolute -left-4 sm:-left-10 lg:-left-14 top-16 sm:top-20 bg-white/95 backdrop-blur-md border border-white shadow-[0_15px_35px_rgba(30,41,59,0.12)] rounded-2xl px-3.5 sm:px-4 py-3 flex items-center gap-3 hover:-translate-y-1 transition-transform duration-300'>

            <div className='w-9 h-9 rounded-xl bg-[#B91C1C] text-white flex items-center justify-center shadow-md'>
              <FiUsers size={17} />
            </div>

            <div>
              <p className='text-[10px] uppercase tracking-wider text-[#334155]'>
                Community
              </p>

              <p className='text-sm font-bold text-[#1E293B]'>
                CU Students
              </p>
            </div>

          </div>


          {/* =====================================================
              FLOATING CARD — VERIFIED
          ===================================================== */}
          <div className='absolute -right-3 sm:-right-8 lg:-right-10 bottom-14 sm:bottom-16 bg-[#1E293B] text-white shadow-[0_15px_35px_rgba(30,41,59,0.2)] rounded-2xl px-3.5 sm:px-4 py-3 flex items-center gap-3 hover:-translate-y-1 transition-transform duration-300'>

            <div className='w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center'>
              <FiShield size={17} />
            </div>

            <div>
              <p className='text-[10px] uppercase tracking-wider text-slate-400'>
                System
              </p>

              <p className='text-sm font-bold'>
                Student Verified
              </p>
            </div>

          </div>


          {/* =====================================================
              SMALL FLOATING STATUS
          ===================================================== */}
          <div className='absolute -right-2 sm:right-4 top-5 bg-white border border-slate-200 shadow-lg rounded-full px-3 py-2 flex items-center gap-2'>

            <span className='relative flex w-2.5 h-2.5'>
              <span className='absolute inline-flex h-full w-full rounded-full bg-[#B91C1C] opacity-40 animate-ping' />
              <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-[#B91C1C]' />
            </span>

            <span className='text-[11px] sm:text-xs font-bold text-[#1E293B]'>
              Network Active
            </span>

          </div>

        </div>
      </div>

    </div>
  </div>
</section>



        {/* ================= QUICK ACTIONS ================= */}
        <section className='py-16 md:py-20 bg-white border-y border-slate-200'>
          <div className='max-w-7xl mx-auto px-6 md:px-10'>
            <div className='text-center max-w-2xl mx-auto mb-12'>
              <p className='text-sm font-bold uppercase tracking-[0.2em] text-[#B91C1C]'>
                How CU BloodLink Works
              </p>

              <h2 className='text-3xl md:text-4xl font-bold text-[#1E293B] mt-3'>
                Help someone today
              </h2>

              <p className='text-[#334155] mt-4'>
                Whether you are looking for blood or willing to donate, CU
                BloodLink makes the connection simple.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-6'>
              {/* Card 1 */}
              <Link
                to='/donors'
                className='group border border-slate-200 rounded-2xl p-7 hover:border-[#B91C1C]/30 hover:shadow-xl transition-all duration-300'
              >
                <div className='w-14 h-14 rounded-2xl bg-[#B91C1C]/10 text-[#B91C1C] flex items-center justify-center'>
                  <FiSearch size={25} />
                </div>

                <h3 className='text-xl font-bold text-[#1E293B] mt-6'>
                  Find a Donor
                </h3>

                <p className='text-[#334155] mt-3 leading-7'>
                  Search available donors by blood group, department and
                  location.
                </p>

                <div className='flex items-center gap-2 text-[#B91C1C] font-semibold mt-5'>
                  Search donors
                  <FiArrowRight className='group-hover:translate-x-1 transition-transform' />
                </div>
              </Link>

              {/* Card 2 */}
              <Link
                to='/signup'
                className='group border border-slate-200 rounded-2xl p-7 hover:border-[#B91C1C]/30 hover:shadow-xl transition-all duration-300'
              >
                <div className='w-14 h-14 rounded-2xl bg-[#1E293B]/10 text-[#1E293B] flex items-center justify-center'>
                  <FiUserPlus size={25} />
                </div>

                <h3 className='text-xl font-bold text-[#1E293B] mt-6'>
                  Become a Donor
                </h3>

                <p className='text-[#334155] mt-3 leading-7'>
                  Register as a verified student donor and help someone in your
                  university community.
                </p>

                <div className='flex items-center gap-2 text-[#B91C1C] font-semibold mt-5'>
                  Register now
                  <FiArrowRight className='group-hover:translate-x-1 transition-transform' />
                </div>
              </Link>

              {/* Card 3 */}
              <Link
                to='/contact'
                className='group border border-slate-200 rounded-2xl p-7 hover:border-[#B91C1C]/30 hover:shadow-xl transition-all duration-300'
              >
                <div className='w-14 h-14 rounded-2xl bg-[#B91C1B]/10 text-[#B91C1C] flex items-center justify-center'>
                  <FiPhone size={25} />
                </div>

                <h3 className='text-xl font-bold text-[#1E293B] mt-6'>
                  Need Assistance?
                </h3>

                <p className='text-[#334155] mt-3 leading-7'>
                  Contact the CU BloodLink team if you need help with a blood
                  request or donor connection.
                </p>

                <div className='flex items-center gap-2 text-[#B91C1C] font-semibold mt-5'>
                  Contact us
                  <FiArrowRight className='group-hover:translate-x-1 transition-transform' />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ================= WHY SECTION ================= */}
        <section className='py-16 md:py-24'>
          <div className='max-w-7xl mx-auto px-6 md:px-10'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <p className='text-sm font-bold uppercase tracking-[0.2em] text-[#B91C1C]'>
                  Built for CU
                </p>

                <h2 className='text-3xl md:text-5xl font-bold text-[#1E293B] mt-4 leading-tight'>
                  A smarter way to connect
                  <span className='text-[#B91C1C]'> blood donors.</span>
                </h2>

                <p className='text-[#334155] text-lg leading-8 mt-6 max-w-xl'>
                  CU BloodLink is designed around the university community.
                  Students can register as donors, control their availability,
                  and help seekers find suitable blood donors quickly.
                </p>

                <div className='mt-8 space-y-5'>
                  <Feature
                    icon={<FiShield />}
                    title='Verified Student Network'
                    text='Donor registration is connected with student information.'
                  />

                  <Feature
                    icon={<FiSearch />}
                    title='Simple Donor Search'
                    text='Find available donors using relevant search filters.'
                  />

                  <Feature
                    icon={<FiHeart />}
                    title='Community Driven'
                    text='Built to make voluntary blood donation easier across campus.'
                  />
                </div>
              </div>

              {/* Stats visual */}
              <div className='relative'>
                <div className='bg-[#1E293B] rounded-[2rem] p-7 md:p-10 text-white shadow-2xl'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='text-slate-300 text-sm'>CU BloodLink</p>

                      <h3 className='text-2xl font-bold mt-1'>
                        Connected for a cause
                      </h3>
                    </div>

                    <div className='w-12 h-12 bg-[#B91C1C] rounded-xl flex items-center justify-center'>
                      <FiHeart size={23} />
                    </div>
                  </div>

                  <div className='grid grid-cols-2 gap-4 mt-8'>
                    <MiniStat
                      icon={<FiUsers />}
                      number='Students'
                      label='University community'
                    />

                    <MiniStat
                      icon={<FiDroplet />}
                      number='8 Groups'
                      label='Blood group support'
                    />

                    <MiniStat
                      icon={<FiSearch />}
                      number='Search'
                      label='Find suitable donors'
                    />

                    <MiniStat
                      icon={<FiShield />}
                      number='Verified'
                      label='Student-based network'
                    />
                  </div>

                  <div className='mt-6 p-5 rounded-2xl bg-white/5 border border-white/10'>
                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 rounded-full bg-[#B91C1C] flex items-center justify-center'>
                        <FiActivity />
                      </div>

                      <div>
                        <p className='font-semibold'>
                          Your availability matters
                        </p>

                        <p className='text-sm text-slate-300 mt-1'>
                          Keep your donor status updated.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className='px-6 md:px-10 pb-16 md:pb-24'>
          <div className='max-w-7xl mx-auto'>
            <div className='relative overflow-hidden bg-[#B91C1C] rounded-[2rem] px-7 py-12 md:px-14 md:py-16 text-white'>
              <div className='absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/10' />
              <div className='absolute -left-20 -bottom-32 w-80 h-80 rounded-full bg-black/10' />

              <div className='relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8'>
                <div className='max-w-2xl'>
                  <div className='flex items-center gap-2 text-white/80 text-sm font-semibold'>
                    <FiDroplet />
                    CU BloodLink
                  </div>

                  <h2 className='text-3xl md:text-4xl font-bold mt-3'>
                    Be someone's reason to hope.
                  </h2>

                  <p className='text-white/80 mt-4 text-base md:text-lg leading-7'>
                    Register as a donor and become part of a university
                    community that can help when it matters most.
                  </p>
                </div>

                <Link
                  to='/signup'
                  className='shrink-0 bg-white text-[#B91C1C] hover:bg-[#F8FAFC] px-7 py-3.5 rounded-xl font-bold inline-flex items-center gap-3 transition-all duration-300'
                >
                  Become a Donor
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

/* ================= COMPONENTS ================= */

function Feature ({ icon, title, text }) {
  return (
    <div className='flex gap-4'>
      <div className='shrink-0 w-11 h-11 rounded-xl bg-white border border-slate-200 text-[#B91C1C] flex items-center justify-center shadow-sm'>
        {icon}
      </div>

      <div>
        <h3 className='font-bold text-[#1E293B]'>{title}</h3>

        <p className='text-sm text-[#334155] mt-1 leading-6'>{text}</p>
      </div>
    </div>
  )
}

function MiniStat ({ icon, number, label }) {
  return (
    <div className='rounded-2xl bg-white/5 border border-white/10 p-5'>
      <div className='text-[#B91C1C] mb-3'>{icon}</div>

      <p className='font-bold text-lg'>{number}</p>

      <p className='text-xs text-slate-300 mt-1'>{label}</p>
    </div>
  )
}
