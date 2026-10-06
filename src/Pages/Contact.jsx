import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { axiosInstance } from '../Helpers/axiosInstance'
import { isEmail } from '../Helpers/regexMatcher'

import {
  FiMail,
  FiUser,
  FiMessageSquare,
  FiSend,
  FiHeart,
  FiCheckCircle
} from 'react-icons/fi'

import InputBox from '../Components/InputBox/InputBox'
import TextArea from '../Components/InputBox/TextArea'
import Layout from '../Layout/Layout'

export default function Contact () {
  const [isLoading, setIsLoading] = useState(false)

  const [userInput, setUserInput] = useState({
    name: '',
    email: '',
    message: ''
  })

  function handleInputChange (e) {
    const { name, value } = e.target

    setUserInput({
      ...userInput,
      [name]: value
    })
  }

  async function onFormSubmit (e) {
    e.preventDefault()

    if (!userInput.email || !userInput.name || !userInput.message) {
      toast.error('All fields are mandatory')
      return
    }

    if (!isEmail(userInput.email)) {
      toast.error('Invalid email')
      return
    }

    setIsLoading(true)

    const loadingMessage = toast.loading('Sending your message...')

    try {
      const res = await axiosInstance.post('/contact', userInput)

      toast.success(res?.data?.message || 'Message sent successfully', {
        id: loadingMessage
      })

      setUserInput({
        name: '',
        email: '',
        message: ''
      })
    } catch (error) {
      toast.error(
        error?.response?.data?.message || 'Message sending failed! Try again.',
        {
          id: loadingMessage
        }
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Layout>
      <section className='min-h-screen bg-[#F8FAFC] dark:bg-gray-900 px-4 py-10 md:py-14'>
        <div className='max-w-6xl mx-auto'>
          {/* Header */}
          <div className='text-center max-w-2xl mx-auto mb-10 md:mb-14'>
            <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B91C1C]/10 text-[#B91C1C] text-xs sm:text-sm font-semibold mb-4'>
              <FiHeart size={15} />
              CU BloodLink
            </div>

            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E293B] dark:text-white font-inter'>
              Get in Touch
            </h1>

            <p className='mt-4 text-sm sm:text-base leading-7 text-[#334155] dark:text-slate-400'>
              Have a question, suggestion, or need help with CU BloodLink? Send
              us a message and our team will get back to you.
            </p>
          </div>

          {/* Main Content */}
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8'>
            {/* Information */}
            <div className='lg:col-span-2 bg-[#1E293B] rounded-2xl p-7 sm:p-9 text-white'>
              <div className='w-12 h-12 rounded-xl bg-[#B91C1C] flex items-center justify-center mb-6'>
                <FiMessageSquare size={23} />
              </div>

              <h2 className='text-2xl font-bold'>Let’s talk</h2>

              <p className='mt-3 text-sm leading-7 text-slate-300'>
                CU BloodLink is built to make blood donor connections easier
                within the University of Chittagong community.
              </p>

              <div className='mt-8 space-y-5'>
                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0'>
                    <FiMail size={18} className='text-white' />
                  </div>

                  <div>
                    <p className='text-xs uppercase tracking-wider text-slate-400'>
                      Email
                    </p>

                    <p className='text-sm font-medium mt-1'>
                      We’ll respond as soon as possible.
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0'>
                    <FiUser size={18} className='text-white' />
                  </div>

                  <div>
                    <p className='text-xs uppercase tracking-wider text-slate-400'>
                      Community
                    </p>

                    <p className='text-sm font-medium mt-1'>
                      University of Chittagong
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0'>
                    <FiCheckCircle size={18} className='text-white' />
                  </div>

                  <div>
                    <p className='text-xs uppercase tracking-wider text-slate-400'>
                      Support
                    </p>

                    <p className='text-sm font-medium mt-1'>
                      Questions, feedback & suggestions
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quote */}
              <div className='mt-10 pt-6 border-t border-white/10'>
                <div className='flex items-center gap-2 text-sm text-slate-300'>
                  <FiHeart size={16} className='text-[#B91C1C]' />

                  <span>Connecting donors. Saving lives.</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className='lg:col-span-3 bg-white dark:bg-gray-800 rounded-2xl shadow-custom dark:shadow-xl p-6 sm:p-8 md:p-10'>
              <div className='mb-7'>
                <h2 className='text-2xl font-bold text-[#1E293B] dark:text-white'>
                  Send us a message
                </h2>

                <p className='text-sm text-gray-500 dark:text-slate-400 mt-2'>
                  Fill out the form below and let us know how we can help.
                </p>
              </div>

              <form
                onSubmit={onFormSubmit}
                autoComplete='off'
                noValidate
                className='flex flex-col gap-5'
              >
                {/* Name */}
                <InputBox
                  label='Name'
                  name='name'
                  type='text'
                  placeholder='Enter your name...'
                  onChange={handleInputChange}
                  value={userInput.name}
                />

                {/* Email */}
                <InputBox
                  label='Email'
                  name='email'
                  type='email'
                  placeholder='Enter your email...'
                  onChange={handleInputChange}
                  value={userInput.email}
                />

                {/* Message */}
                <TextArea
                  label='Message'
                  name='message'
                  rows={6}
                  placeholder='Write your message here...'
                  onChange={handleInputChange}
                  value={userInput.message}
                />

                {/* Submit */}
                <button
                  type='submit'
                  disabled={isLoading}
                  className='mt-2 w-full flex items-center justify-center gap-2 bg-[#B91C1C] hover:bg-[#991B1B] disabled:opacity-60 disabled:cursor-not-allowed text-white transition-all duration-300 rounded-lg py-3.5 font-inter font-semibold text-base shadow-sm hover:shadow-md'
                >
                  {isLoading ? (
                    <>
                      <span className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin' />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Bottom */}
          <div className='text-center mt-8'>
            <p className='text-xs sm:text-sm text-gray-500 dark:text-slate-500'>
              Your feedback helps us make CU BloodLink better.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
