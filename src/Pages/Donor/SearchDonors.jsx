import React from 'react'
import { useNavigate } from 'react-router-dom'

import {
  FiArrowLeft,
  FiMapPin,
  FiPhone,
  FiUser,
  FiDroplet,
  FiCalendar,
  FiUsers
} from 'react-icons/fi'

import Layout from '../../Layout/Layout'

export default function DonorSearch () {
  const navigate = useNavigate()

  const savedResult = localStorage.getItem('donorSearchResult')

  const searchResult = savedResult ? JSON.parse(savedResult) : null

  const donors = searchResult?.donors || []

  const verifiedStudent = searchResult?.verifiedStudent

  const handleSearchAgain = () => {
    localStorage.removeItem('donorSearchResult')

    navigate('/donors')
  }

  return (
    <Layout hideFooter={true}>
      <section className='min-h-[100vh] bg-[#F8FAFC] dark:bg-gray-900 px-4 py-8 md:py-10'>
        <div className='max-w-6xl mx-auto'>
          {/* Back */}
          <button
            onClick={handleSearchAgain}
            className='flex items-center gap-2 text-[#334155] dark:text-slate-200 hover:text-[#B91C1C] transition mb-6 font-inter'
          >
            <FiArrowLeft size={19} />
            Search Again
          </button>

          {/* Verified Student */}
          {verifiedStudent && (
            <div className='bg-white dark:bg-gray-800 rounded-xl shadow-custom dark:shadow-xl p-5 md:p-6 mb-6'>
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 rounded-full bg-[#B91C1C]/10 flex items-center justify-center flex-shrink-0'>
                  <FiUser size={24} className='text-[#B91C1C]' />
                </div>

                <div>
                  <p className='text-sm text-gray-500 dark:text-slate-400'>
                    Verified Student
                  </p>

                  <h1 className='text-xl md:text-2xl font-bold text-[#1E293B] dark:text-white mt-1'>
                    {verifiedStudent.name}
                  </h1>

                  <div className='flex flex-wrap gap-x-5 gap-y-1 mt-2 text-sm text-[#334155] dark:text-slate-300'>
                    <span>
                      ID: <strong>{verifiedStudent.student_id} </strong>
                    </span>

                    <span>
                      {" "}Department: <strong>{verifiedStudent.dept}</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Header */}
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5'>
            <div>
              <h2 className='text-xl md:text-2xl font-bold text-[#1E293B] dark:text-white'>
                Available Blood Donors
              </h2>

              <p className='text-sm text-gray-500 dark:text-slate-400 mt-1'>
                {donors.length} donor
                {donors.length !== 1 ? 's' : ''} available
              </p>
            </div>

            <div className='flex items-center gap-2 text-sm text-[#334155] dark:text-slate-300'>
              <FiUsers size={18} />
              Active Donors
            </div>
          </div>

          {/* No Donors */}
          {donors.length === 0 && (
            <div className='bg-white dark:bg-gray-800 rounded-xl shadow-custom dark:shadow-xl p-10 text-center'>
              <div className='mx-auto w-14 h-14 rounded-full bg-[#B91C1C]/10 flex items-center justify-center mb-4'>
                <FiDroplet size={28} className='text-[#B91C1C]' />
              </div>

              <h3 className='text-lg font-semibold text-[#1E293B] dark:text-white'>
                No Available Donor
              </h3>

              <p className='text-sm text-gray-500 dark:text-slate-400 mt-2'>
                There are currently no available blood donors.
              </p>

              <button
                onClick={handleSearchAgain}
                className='mt-5 px-5 py-2.5 rounded-md bg-[#B91C1C] hover:bg-[#991B1B] text-white font-medium transition'
              >
                Search Again
              </button>
            </div>
          )}

          {/* Donor Cards */}
          {donors.length > 0 && (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              {donors.map((donor, index) => (
                <div
                  key={donor.student_id || index}
                  className='bg-white dark:bg-gray-800 rounded-xl shadow-custom dark:shadow-xl p-5'
                >
                  {/* Donor Header */}
                  <div className='flex items-center gap-3 mb-5'>
                    <div className='w-12 h-12 rounded-full bg-[#B91C1C]/10 flex items-center justify-center flex-shrink-0'>
                      <FiUser size={23} className='text-[#B91C1C]' />
                    </div>

                    <div className='min-w-0'>
                      <h3 className='font-semibold text-[#1E293B] dark:text-white truncate'>
                        {donor.fullName || 'Anonymous Donor'}
                      </h3>

                      <p className='text-xs text-gray-500 dark:text-slate-400 mt-0.5'>
                        {donor.student_id}
                      </p>
                    </div>
                  </div>

                  {/* Blood Group */}
                  <div className='flex items-center justify-between bg-[#F8FAFC] dark:bg-slate-700/40 rounded-lg p-3 mb-4'>
                    <div className='flex items-center gap-2'>
                      <FiDroplet size={18} className='text-[#B91C1C]' />

                      <span className='text-sm text-[#334155] dark:text-slate-300'>
                        Blood Group
                      </span>
                    </div>

                    <span className='font-bold text-[#B91C1C]'>
                      {donor.blood_group || 'N/A'}
                    </span>
                  </div>

                  {/* Phone */}
                  {donor.phone && (
                    <div className='flex items-center gap-3 text-sm mb-3'>
                      <FiPhone
                        size={17}
                        className='text-[#B91C1C] flex-shrink-0'
                      />

                      <span className='text-[#334155] dark:text-slate-300'>
                        {donor.phone}
                      </span>
                    </div>
                  )}

                  {/* Location */}
                  {donor.location && (
                    <div className='flex items-center gap-3 text-sm mb-3'>
                      <FiMapPin
                        size={17}
                        className='text-[#B91C1C] flex-shrink-0'
                      />

                      <span className='text-[#334155] dark:text-slate-300'>
                        {donor.location}
                      </span>
                    </div>
                  )}

                  {/* Last Donation */}
                  {donor.last_donation_date && (
                    <div className='flex items-center gap-3 text-sm'>
                      <FiCalendar
                        size={17}
                        className='text-[#B91C1C] flex-shrink-0'
                      />

                      <span className='text-[#334155] dark:text-slate-300'>
                        Last donation:{' '}
                        {new Date(
                          donor.last_donation_date
                        ).toLocaleDateString()}
                      </span>
                    </div>
                  )}

                  {/* Total Donation */}
                  <div className='border-t border-gray-200 dark:border-slate-700 mt-5 pt-4'>
                    <p className='text-sm text-gray-500 dark:text-slate-400'>
                      Total Donations
                    </p>

                    <p className='text-lg font-bold text-[#1E293B] dark:text-white mt-1'>
                      {donor.total_donations || 0}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}
