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
        <section className='relative overflow-hidden min-h-[88vh] flex items-center'>
          {/* Background decoration */}
          <div className='absolute -top-32 -right-32 w-96 h-96 bg-[#B91C1C]/5 rounded-full blur-3xl' />
          <div className='absolute -bottom-40 -left-40 w-96 h-96 bg-[#1E293B]/5 rounded-full blur-3xl' />

          <div className='max-w-7xl mx-auto w-full px-6 md:px-10 py-16 md:py-20 relative z-10'>
            <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
              {/* LEFT */}
              <div>
                {/* Small badge */}
                <div className='inline-flex items-center gap-2 bg-white border border-slate-200 shadow-sm rounded-full px-4 py-2 mb-7'>
                  <span className='flex items-center justify-center w-6 h-6 rounded-full bg-[#B91C1C] text-white'>
                    <FiDroplet size={13} />
                  </span>

                  <span className='text-sm font-semibold text-[#1E293B]'>
                    University Blood Donation Network
                  </span>
                </div>

                {/* Heading */}
                <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-[#1E293B]'>
                  One campus.
                  <br />
                  <span className='text-[#B91C1C]'>Thousands of lives.</span>
                  <br />
                  One connection.
                </h1>

                {/* Description */}
                <p className='mt-7 text-base md:text-lg lg:text-xl leading-8 text-[#334155] max-w-xl'>
                  CU BloodLink connects students who need blood with verified
                  donors across the university community — making it easier to
                  find the right donor when every moment matters.
                </p>

                {/* Buttons */}
                <div className='flex flex-col sm:flex-row gap-4 mt-9'>
                  <Link
                    to='/signup'
                    className='group inline-flex items-center justify-center gap-3 bg-[#B91C1C] hover:bg-[#991B1B] text-white px-6 py-3.5 rounded-xl font-semibold text-base shadow-lg shadow-[#B91C1C]/20 transition-all duration-300'
                  >
                    Become a Donor
                    <FiArrowRight className='group-hover:translate-x-1 transition-transform' />
                  </Link>

                  <Link
                    to='/donors'
                    className='inline-flex items-center justify-center gap-3 bg-white hover:bg-[#1E293B] hover:text-white border border-slate-200 text-[#1E293B] px-6 py-3.5 rounded-xl font-semibold text-base transition-all duration-300'
                  >
                    <FiSearch />
                    Find a Donor
                  </Link>
                </div>

                {/* Trust points */}
                <div className='flex flex-wrap gap-x-6 gap-y-3 mt-8'>
                  <div className='flex items-center gap-2 text-sm font-medium'>
                    <FiCheckCircle className='text-[#B91C1C]' />
                    Verified Students
                  </div>

                  <div className='flex items-center gap-2 text-sm font-medium'>
                    <FiShield className='text-[#B91C1C]' />
                    Privacy Focused
                  </div>

                  <div className='flex items-center gap-2 text-sm font-medium'>
                    <FiClock className='text-[#B91C1C]' />
                    Quick Connection
                  </div>
                </div>
              </div>

              {/* RIGHT VISUAL */}
              <div className='relative'>
                {/* Main card */}
                <div className='relative max-w-md mx-auto'>
                  {/* Outer glow */}
                  <div className='absolute inset-5 bg-[#B91C1C]/10 rounded-[3rem] blur-2xl' />

                  <div className='relative bg-white border border-slate-200 rounded-[2rem] shadow-2xl p-6 md:p-8'>
                    {/* Top */}
                    <div className='flex items-center justify-between mb-7'>
                      <div>
                        <p className='text-xs font-semibold uppercase tracking-wider text-[#334155]'>
                          CU BloodLink
                        </p>

                        <h3 className='text-xl font-bold text-[#1E293B] mt-1'>
                          Blood Network
                        </h3>
                      </div>

                      <div className='w-12 h-12 rounded-2xl bg-[#B91C1C] text-white flex items-center justify-center shadow-lg shadow-[#B91C1C]/20'>
                        <FiDroplet size={24} />
                      </div>
                    </div>

                    {/* Blood group visual */}
                    <div className='bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6'>
                      <div className='flex items-center justify-between'>
                        <div>
                          <p className='text-sm text-[#334155]'>Blood needed</p>

                          <p className='text-4xl font-bold text-[#B91C1C] mt-1'>
                            O+
                          </p>
                        </div>

                        <div className='w-20 h-20 rounded-full border-8 border-[#B91C1C]/10 flex items-center justify-center'>
                          <FiDroplet size={30} className='text-[#B91C1C]' />
                        </div>
                      </div>

                      <div className='flex items-center gap-2 mt-5 text-sm text-[#334155]'>
                        <FiMapPin className='text-[#B91C1C]' />
                        Chittagong University
                      </div>
                    </div>

                    {/* Donor card */}
                    <div className='mt-5 border border-slate-200 rounded-2xl p-5'>
                      <div className='flex items-center gap-4'>
                        <div className='w-12 h-12 rounded-full bg-[#1E293B] text-white flex items-center justify-center'>
                          <FiUserPlus size={21} />
                        </div>

                        <div className='flex-1'>
                          <p className='font-bold text-[#1E293B]'>
                            Verified Donor
                          </p>

                          <p className='text-sm text-[#334155]'>
                            Available for donation
                          </p>
                        </div>

                        <FiCheckCircle className='text-[#B91C1C]' size={22} />
                      </div>

                      <div className='grid grid-cols-2 gap-3 mt-4'>
                        <div className='bg-[#F8FAFC] rounded-lg p-3'>
                          <p className='text-xs text-[#334155]'>Blood Group</p>
                          <p className='font-bold text-[#1E293B] mt-1'>O+</p>
                        </div>

                        <div className='bg-[#F8FAFC] rounded-lg p-3'>
                          <p className='text-xs text-[#334155]'>Status</p>
                          <p className='font-bold text-[#1E293B] mt-1'>
                            Available
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom */}
                    <div className='flex items-center justify-center gap-2 mt-6 text-sm font-semibold text-[#334155]'>
                      <FiHeart className='text-[#B91C1C]' />
                      Every donation can make a difference.
                    </div>
                  </div>
                </div>

                {/* Floating card 1 */}
                <div className='absolute -left-3 md:-left-10 top-20 bg-white border border-slate-200 shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3'>
                  <div className='w-9 h-9 rounded-xl bg-[#B91C1C] text-white flex items-center justify-center'>
                    <FiUsers size={18} />
                  </div>

                  <div>
                    <p className='text-xs text-[#334155]'>Community</p>
                    <p className='font-bold text-[#1E293B]'>CU Students</p>
                  </div>
                </div>

                {/* Floating card 2 */}
                <div className='absolute -right-2 md:-right-8 bottom-16 bg-[#1E293B] text-white shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3'>
                  <div className='w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center'>
                    <FiShield size={18} />
                  </div>

                  <div>
                    <p className='text-xs text-slate-300'>System</p>
                    <p className='font-bold'>Student Verified</p>
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
                to='/donor/register'
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
                  to='/donor/register'
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
