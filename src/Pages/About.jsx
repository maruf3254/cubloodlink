import React from 'react'
import {
  FiHeart,
  FiDroplet,
  FiUsers,
  FiSearch,
  FiShield,
  FiActivity,
  FiArrowRight,
  FiCheckCircle,
  FiBookOpen,
  FiHome,
  FiAward
} from 'react-icons/fi'

import Layout from '../Layout/Layout'

const features = [
  {
    icon: FiSearch,
    title: 'Find Blood Donors',
    description:
      'Search for available donors by blood group through a simple, verified process.'
  },
  {
    icon: FiUsers,
    title: 'Student Community',
    description:
      'Connects members of the University of Chittagong community who are willing to help one another.'
  },
  {
    icon: FiShield,
    title: 'Privacy First',
    description:
      "Donor details are shared responsibly, and donors' privacy preferences are respected."
  },
  {
    icon: FiActivity,
    title: 'Donor Availability',
    description:
      'Donors can mark themselves available or unavailable, so seekers reach people who can actually help.'
  }
]

const benefits = [
  'Student-verified donor network',
  'Simple and fast donor search',
  'Donor availability management',
  'Privacy-focused information sharing',
  'Built for the University of Chittagong community'
]

const creatorFacts = [
  { icon: FiBookOpen, label: 'Department', value: 'Marketing (BBA)' },
  { icon: FiHome, label: 'Hall', value: 'Shahjalal Hall' },
  {
    icon: FiAward,
    label: 'Student leadership',
    value: 'Assistant General Secretary, Shahjalal Hall Parliament'
  }
]

export default function About () {
  return (
    <Layout>
      <main className='bg-[#F8FAFC] dark:bg-gray-900 text-[#334155] dark:text-slate-200'>
        {/* ================= HERO ================= */}
        <section className='relative overflow-hidden bg-white dark:bg-gray-800'>
          <div
            aria-hidden='true'
            className='absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#B91C1C]/5 blur-3xl'
          />
          <div
            aria-hidden='true'
            className='absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#1E293B]/5 blur-3xl'
          />

          <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
            <div className='max-w-4xl mx-auto text-center'>
              <div className='mx-auto w-16 h-16 rounded-2xl bg-[#B91C1C]/10 flex items-center justify-center'>
                <FiHeart size={31} className='text-[#B91C1C]' />
              </div>

              <p className='mt-6 text-sm font-semibold text-[#B91C1C] uppercase tracking-[0.18em]'>
                About CU BloodLink
              </p>

              <h1 className='mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E293B] dark:text-white leading-tight'>
                Connecting Donors.
                <span className='block text-[#B91C1C] mt-2'>Saving Lives.</span>
              </h1>

              <p className='mt-6 max-w-3xl mx-auto text-base md:text-lg text-gray-500 dark:text-slate-400 leading-8'>
                CU BloodLink is a blood donor network made for the University of
                Chittagong. It helps students find available donors quickly and
                support one another when it matters most.
              </p>

              <div className='mt-8 flex flex-col sm:flex-row items-center justify-center gap-3'>
                <a
                  href='/find-donor'
                  className='inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#B91C1C] text-white font-semibold hover:bg-[#991B1B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C1C] focus-visible:ring-offset-2 transition-colors duration-200'
                >
                  Find a Donor
                  <FiArrowRight size={18} aria-hidden='true' />
                </a>
                <a
                  href='#creator'
                  className='inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-600 text-[#1E293B] dark:text-white font-semibold hover:bg-slate-50 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C1C] focus-visible:ring-offset-2 transition-colors duration-200'
                >
                  Meet the creator
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PURPOSE ================= */}
        <section className='py-16 md:py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
              <div>
                <p className='text-sm font-semibold text-[#B91C1C] uppercase tracking-[0.15em]'>
                  Our Purpose
                </p>

                <h2 className='mt-3 text-3xl md:text-4xl font-bold text-[#1E293B] dark:text-white leading-tight'>
                  Built to make blood donation easier
                </h2>

                <div className='w-16 h-1 bg-[#B91C1C] rounded-full mt-5' />

                <p className='mt-6 text-base leading-8 text-gray-500 dark:text-slate-400'>
                  In an emergency, finding blood often means calling around and
                  asking in scattered groups and chats. Precious time is lost
                  before the right donor is found.
                </p>

                <p className='mt-5 text-base leading-8 text-gray-500 dark:text-slate-400'>
                  CU BloodLink brings willing donors into one place, so that
                  when someone needs blood, finding a donor is fast, reliable
                  and respectful of the donor's privacy.
                </p>
              </div>

              <div className='relative'>
                <div
                  aria-hidden='true'
                  className='absolute -inset-3 rounded-3xl bg-[#B91C1C]/5 rotate-2'
                />

                <div className='relative bg-white dark:bg-gray-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl p-7 md:p-9'>
                  <div className='w-14 h-14 rounded-2xl bg-[#B91C1C]/10 flex items-center justify-center'>
                    <FiDroplet size={28} className='text-[#B91C1C]' />
                  </div>

                  <h3 className='mt-6 text-2xl font-bold text-[#1E293B] dark:text-white'>
                    One community, one purpose
                  </h3>

                  <p className='mt-4 text-sm md:text-base leading-7 text-gray-500 dark:text-slate-400'>
                    We want to build a stronger culture of voluntary blood
                    donation across the University of Chittagong.
                  </p>

                  <ul className='mt-7 space-y-4'>
                    {benefits.map(benefit => (
                      <li key={benefit} className='flex items-start gap-3'>
                        <FiCheckCircle
                          size={19}
                          className='text-[#B91C1C] mt-0.5 flex-shrink-0'
                          aria-hidden='true'
                        />
                        <span className='text-sm text-[#334155] dark:text-slate-300'>
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section className='bg-white dark:bg-gray-800 border-y border-slate-200 dark:border-slate-700'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20'>
            <div className='max-w-2xl mx-auto text-center'>
              <p className='text-sm font-semibold text-[#B91C1C] uppercase tracking-[0.15em]'>
                What We Provide
              </p>

              <h2 className='mt-3 text-3xl md:text-4xl font-bold text-[#1E293B] dark:text-white'>
                Designed around students
              </h2>

              <p className='mt-4 text-gray-500 dark:text-slate-400 leading-7'>
                Simple to use, easy to access, and careful with personal
                information.
              </p>
            </div>

            <div className='mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
              {features.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className='p-6 rounded-2xl bg-[#F8FAFC] dark:bg-gray-700/50 border border-slate-200 dark:border-slate-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300'
                >
                  <div className='w-12 h-12 rounded-xl bg-[#B91C1C]/10 flex items-center justify-center'>
                    <Icon
                      size={23}
                      className='text-[#B91C1C]'
                      aria-hidden='true'
                    />
                  </div>

                  <h3 className='mt-5 text-lg font-bold text-[#1E293B] dark:text-white'>
                    {title}
                  </h3>

                  <p className='mt-3 text-sm text-gray-500 dark:text-slate-400 leading-7'>
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CREATOR ================= */}
        <section id='creator' className='bg-[#1E293B] text-white scroll-mt-16'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
            <div className='grid lg:grid-cols-5 gap-10 lg:gap-16 items-center'>
              {/* Identity */}
              <div className='lg:col-span-2 text-center lg:text-left'>
                
                <div
                  aria-hidden='true'
                  className='mx-auto lg:mx-0 w-24 h-24 rounded-full overflow-hidden bg-[#B91C1C] ring-4 ring-white/10 shadow-lg'
                >
                  <img
                    src='https://i.imgur.com/UcwpgV8.png'
                    alt='Imtiaz Jabed'
                    className='w-full h-full object-cover object-center'
                  />
                </div>
                
                <p className='mt-6 text-sm font-semibold text-white/60 uppercase tracking-[0.18em]'>
                  Initiator of CU BloodLink
                </p>
                <h2 className='mt-2 text-3xl md:text-4xl font-bold'>
                  Imtiaz Jabed
                </h2>
                <p className='mt-2 text-slate-300'>
                  BBA, Department of Marketing
                  <br />
                  University of Chittagong
                </p>
              </div>

              {/* Story + facts */}
              <div className='lg:col-span-3'>
                <p className='text-base md:text-lg text-slate-300 leading-8'>
                  CU BloodLink began with a simple belief: no student should
                  struggle to find a blood donor in an emergency. Imtiaz
                  initiated the platform to bring the university's willing
                  donors together in one trusted, easy-to-use network.
                </p>

                <p className='mt-4 text-sm md:text-base text-slate-400 leading-7'>
                  As a student representative of Shahjalal Hall, he works
                  closely with fellow students, and CU BloodLink grows from that
                  everyday connection with the campus community.
                </p>

                <dl className='mt-8 grid sm:grid-cols-3 gap-4'>
                  {creatorFacts.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className='rounded-xl bg-white/5 border border-white/10 p-4'
                    >
                      <dt className='flex items-center gap-2 text-xs font-semibold text-white/60 uppercase tracking-wider'>
                        <Icon
                          size={15}
                          className='text-[#B91C1C]'
                          aria-hidden='true'
                        />
                        {label}
                      </dt>
                      <dd className='mt-2 text-sm text-white leading-6'>
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className='bg-[#B91C1C]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16'>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-7'>
              <div>
                <h2 className='text-2xl md:text-3xl font-bold text-white'>
                  Be part of the blood donor community.
                </h2>

                <p className='mt-2 text-white/80 text-sm md:text-base'>
                  One decision to donate can help save a life.
                </p>
              </div>

              <a
                href='/find-donor'
                className='inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#B91C1C] font-semibold hover:bg-[#F8FAFC] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#B91C1C] transition-all duration-200'
              >
                Find a Donor
                <FiArrowRight size={18} aria-hidden='true' />
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
