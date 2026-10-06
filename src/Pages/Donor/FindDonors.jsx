import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiSearch, FiUserCheck } from 'react-icons/fi'

import Layout from '../../Layout/Layout'

export default function FindDonor () {
  const navigate = useNavigate()

  const [studentId, setStudentId] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSearchDonor = async e => {
    e.preventDefault()

    const trimmedStudentId = studentId.trim()
    const trimmedName = name.trim()

    if (!trimmedStudentId || !trimmedName) {
      return
    }

    setLoading(true)

    try {
      const baseURL = import.meta.env.VITE_REACT_APP_API_URL

      const params = new URLSearchParams({
        student_id: trimmedStudentId,
        name: trimmedName
      })

      const response = await fetch(
        `${baseURL}/user/donor/search?${params.toString()}`,
        {
          method: 'GET',
          credentials: 'include'
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data?.message || 'Student verification failed')
      }

      // Save complete search result
      localStorage.setItem('donorSearchResult', JSON.stringify(data))

      navigate('/find-donor/search')
    } catch (error) {
      console.error('Donor Search Error:', error)

      alert(error?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout hideFooter={true}>
      <section className='min-h-[100vh] bg-[#F8FAFC] dark:bg-gray-900 flex items-center justify-center px-4 py-10'>
        <div className='w-full max-w-[550px]'>
          <div className='bg-white dark:bg-gray-800 rounded-xl shadow-custom dark:shadow-xl p-6 md:p-8'>
            {/* Header */}
            <div className='text-center mb-8'>
              <div className='mx-auto w-16 h-16 rounded-full bg-[#B91C1C]/10 flex items-center justify-center mb-4'>
                <FiUserCheck size={32} className='text-[#B91C1C]' />
              </div>

              <h1 className='text-2xl md:text-3xl font-bold text-[#1E293B] dark:text-white font-inter'>
                Find Blood Donor
              </h1>

              <p className='mt-2 text-sm text-gray-500 dark:text-slate-400 leading-6'>
                Enter your Student ID and name to find available blood donors.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSearchDonor} className='flex flex-col gap-5'>
              {/* Student ID */}
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='student_id'
                  className='font-medium text-[#334155] dark:text-slate-200 font-inter'
                >
                  Student ID
                </label>

                <input
                  id='student_id'
                  name='student_id'
                  type='text'
                  value={studentId}
                  onChange={e => setStudentId(e.target.value)}
                  placeholder='Enter your Student ID'
                  autoComplete='off'
                  className='w-full rounded-md border border-gray-300 dark:border-slate-600 bg-white dark:bg-gray-700 text-[#334155] dark:text-slate-100 px-4 py-3 outline-none focus:border-[#B91C1C] transition'
                />
              </div>

              {/* Name */}
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='name'
                  className='font-medium text-[#334155] dark:text-slate-200 font-inter'
                >
                  Name / Part of Name
                </label>

                <input
                  id='name'
                  name='name'
                  type='text'
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder='e.g. Maruf'
                  autoComplete='off'
                  className='w-full rounded-md border border-gray-300 dark:border-slate-600 bg-white dark:bg-gray-700 text-[#334155] dark:text-slate-100 px-4 py-3 outline-none focus:border-[#B91C1C] transition'
                />

                <p className='text-xs text-gray-500 dark:text-slate-400'>
                  You can enter any part of your registered name.
                </p>
              </div>

              {/* Verification Info */}
              <div className='rounded-lg border border-gray-200 dark:border-slate-600 bg-[#F8FAFC] dark:bg-slate-700/40 p-4'>
                <div className='flex gap-3'>
                  <FiUserCheck
                    className='text-[#B91C1C] mt-0.5 flex-shrink-0'
                    size={18}
                  />

                  <div>
                    <h3 className='text-sm font-semibold text-[#1E293B] dark:text-white'>
                      Student Verification
                    </h3>

                    <p className='text-sm text-gray-500 dark:text-slate-400 leading-6 mt-1'>
                      Your Student ID and name will be checked against the
                      official student records.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button
                type='submit'
                disabled={loading || !studentId.trim() || !name.trim()}
                className='w-full flex items-center justify-center gap-2 py-3.5 rounded-md bg-[#B91C1C] hover:bg-[#991B1B] text-white font-medium font-inter transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {loading ? (
                  <>
                    <span className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></span>
                    Searching...
                  </>
                ) : (
                  <>
                    <FiSearch size={20} />
                    Verify & Find Donor
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}
