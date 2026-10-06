import React from 'react'
import {
  FiDroplet,
  FiSearch,
  FiUserPlus,
  FiShieldOff,
  FiToggleRight,
  FiPhoneCall,
  FiHeart,
  FiArrowRight,
  FiAlertCircle,
  FiChevronDown
} from 'react-icons/fi'

import Layout from '../Layout/Layout'

// Update these if your routes are different.
const ROUTES = {
  findDonor: '/donors',
  register: '/signup'
}

const seekerSteps = [
  {
    icon: FiSearch,
    title: 'Search by blood group',
    description:
      'Open Find a Donor and choose the blood group you need. Only donors who are currently available are worth contacting first.'
  },
  {
    icon: FiShieldOff,
    title: 'Verify to see details',
    description:
      'To protect donors, contact details are shown only after a simple verification step.'
  },
  {
    icon: FiPhoneCall,
    title: 'Contact the donor',
    description:
      'Reach out directly, explain the situation clearly, and agree on where and when to meet.'
  }
]

const donorSteps = [
  {
    icon: FiUserPlus,
    title: 'Register as a donor',
    description:
      'Create your profile with your blood group and basic details. It only takes a few minutes.'
  },
  {
    icon: FiShieldOff,
    title: 'Choose what to share',
    description:
      'Set your privacy preferences. Your information is shared responsibly, and your choices are respected.'
  },
  {
    icon: FiToggleRight,
    title: 'Keep your availability current',
    description:
      "Switch yourself to unavailable when you can't donate, and back to available when you can. Seekers then reach people who can actually help."
  }
]

const faqs = [
  {
    q: 'Who can use CU BloodLink?',
    a: 'CU BloodLink is built for the University of Chittagong community. Students verify their account to take part.'
  },
  {
    q: 'Is my personal information public?',
    a: "No. Donor details are shared responsibly and in line with each donor's privacy preferences."
  },
  {
    q: 'Can I stop being listed as a donor?',
    a: 'Yes. You can mark yourself unavailable at any time, so you only hear from people when you are ready to help.'
  },
  {
    q: 'Does CU BloodLink replace a hospital or blood bank?',
    a: 'No. CU BloodLink helps you reach willing donors faster. In a critical emergency, also contact the nearest hospital or blood bank right away.'
  }
]

function StepList ({ steps }) {
  return (
    <ol className='mt-8 space-y-6'>
      {steps.map(({ icon: Icon, title, description }, index) => (
        <li key={title} className='flex gap-4'>
          <div className='flex flex-col items-center'>
            <div className='w-10 h-10 rounded-full bg-[#B91C1C] text-white font-bold flex items-center justify-center flex-shrink-0'>
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div
                aria-hidden='true'
                className='flex-1 w-px bg-slate-200 dark:bg-slate-600 mt-2'
              />
            )}
          </div>

          <div className='pb-2'>
            <h3 className='flex items-center gap-2 text-lg font-bold text-[#1E293B] dark:text-white'>
              <Icon size={18} className='text-[#B91C1C]' aria-hidden='true' />
              {title}
            </h3>
            <p className='mt-2 text-sm md:text-base leading-7 text-gray-500 dark:text-slate-400'>
              {description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default function HowItWorks () {
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
                <FiDroplet size={31} className='text-[#B91C1C]' />
              </div>

              <p className='mt-6 text-sm font-semibold text-[#B91C1C] uppercase tracking-[0.18em]'>
                How It Works
              </p>

              <h1 className='mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E293B] dark:text-white leading-tight'>
                From search to donor
                <span className='block text-[#B91C1C] mt-2'>
                  in three steps.
                </span>
              </h1>

              <p className='mt-6 max-w-3xl mx-auto text-base md:text-lg text-gray-500 dark:text-slate-400 leading-8'>
                Whether you need blood or want to give it, CU BloodLink keeps
                the process short, simple and respectful of everyone's privacy.
              </p>
            </div>
          </div>
        </section>

        {/* ================= TWO TRACKS ================= */}
        <section className='py-16 md:py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid lg:grid-cols-2 gap-8 lg:gap-12'>
              {/* Seeker */}
              <div className='bg-white dark:bg-gray-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg p-7 md:p-9'>
                <p className='text-sm font-semibold text-[#B91C1C] uppercase tracking-[0.15em]'>
                  If you need blood
                </p>
                <h2 className='mt-3 text-2xl md:text-3xl font-bold text-[#1E293B] dark:text-white'>
                  Find a donor quickly
                </h2>

                <StepList steps={seekerSteps} />

                <a
                  href={ROUTES.findDonor}
                  className='mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#B91C1C] text-white font-semibold hover:bg-[#991B1B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C1C] focus-visible:ring-offset-2 transition-colors duration-200'
                >
                  Find a Donor
                  <FiArrowRight size={18} aria-hidden='true' />
                </a>
              </div>

              {/* Donor */}
              <div className='bg-white dark:bg-gray-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg p-7 md:p-9'>
                <p className='text-sm font-semibold text-[#B91C1C] uppercase tracking-[0.15em]'>
                  If you want to donate
                </p>
                <h2 className='mt-3 text-2xl md:text-3xl font-bold text-[#1E293B] dark:text-white'>
                  Become a donor
                </h2>

                <StepList steps={donorSteps} />

                <a
                  href={ROUTES.register}
                  className='mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-600 text-[#1E293B] dark:text-white font-semibold hover:bg-slate-50 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C1C] focus-visible:ring-offset-2 transition-colors duration-200'
                >
                  Register as a Donor
                  <FiArrowRight size={18} aria-hidden='true' />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= EMERGENCY NOTE ================= */}
        <section className='pb-4'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div
              role='note'
              className='flex items-start gap-4 rounded-2xl border border-[#B91C1C]/20 bg-[#B91C1C]/5 p-5 md:p-6'
            >
              <FiAlertCircle
                size={22}
                className='text-[#B91C1C] mt-0.5 flex-shrink-0'
                aria-hidden='true'
              />
              <p className='text-sm md:text-base leading-7 text-[#334155] dark:text-slate-300'>
                <span className='font-semibold text-[#1E293B] dark:text-white'>
                  In a critical emergency,
                </span>{' '}
                contact the nearest hospital or blood bank immediately and use
                CU BloodLink alongside it to reach donors faster.
              </p>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className='py-16 md:py-20'>
          <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center'>
              <p className='text-sm font-semibold text-[#B91C1C] uppercase tracking-[0.15em]'>
                Questions
              </p>
              <h2 className='mt-3 text-3xl md:text-4xl font-bold text-[#1E293B] dark:text-white'>
                Good to know
              </h2>
            </div>

            <div className='mt-10 space-y-3'>
              {faqs.map(({ q, a }) => (
                <details
                  key={q}
                  className='group rounded-2xl bg-white dark:bg-gray-800 border border-slate-200 dark:border-slate-700 open:shadow-md'
                >
                  <summary className='flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4 font-semibold text-[#1E293B] dark:text-white rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C1C] [&::-webkit-details-marker]:hidden'>
                    {q}
                    <FiChevronDown
                      size={20}
                      className='text-[#B91C1C] flex-shrink-0 transition-transform duration-200 group-open:rotate-180'
                      aria-hidden='true'
                    />
                  </summary>
                  <p className='px-5 pb-5 text-sm md:text-base leading-7 text-gray-500 dark:text-slate-400'>
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className='bg-[#B91C1C]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16'>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-7'>
              <div>
                <h2 className='flex items-center gap-3 text-2xl md:text-3xl font-bold text-white'>
                  <FiHeart size={26} aria-hidden='true' />
                  Ready to help or be helped?
                </h2>
                <p className='mt-2 text-white/80 text-sm md:text-base'>
                  Join the CU blood donor community today.
                </p>
              </div>

              <div className='flex flex-col sm:flex-row gap-3'>
                <a
                  href={ROUTES.findDonor}
                  className='inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#B91C1C] font-semibold hover:bg-[#F8FAFC] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#B91C1C] transition-all duration-200'
                >
                  Find a Donor
                  <FiArrowRight size={18} aria-hidden='true' />
                </a>
                <a
                  href={ROUTES.register}
                  className='inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-white/40 text-white font-semibold hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#B91C1C] transition-colors duration-200'
                >
                  Become a Donor
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
