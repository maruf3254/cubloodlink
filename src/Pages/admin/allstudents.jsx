import React, { useEffect, useState } from 'react'
import Layout from "../../Layout/Layout"

const API_URL = import.meta.env.VITE_REACT_APP_API_URL

const AllStudents = () => {
  const [students, setStudents] = useState([])

  const [search, setSearch] = useState('')
  const [department, setDepartment] = useState('')
  const [session, setSession] = useState('')

  const [departments, setDepartments] = useState([])
  const [sessions, setSessions] = useState([])

  const [page, setPage] = useState(1)

  const [pagination, setPagination] = useState({
    currentPage: 1,
    limit: 1000,
    totalStudents: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false
  })

  const [loading, setLoading] = useState(false)
  const [filterLoading, setFilterLoading] = useState(false)
  const [error, setError] = useState('')

  // =====================================================
  // VALID STUDENT ID
  // 8 OR MORE DIGITS
  // NO SPACE / - / /
  // =====================================================

  const isValidStudentId = studentId => {
    if (!studentId) return false

    const id = String(studentId).trim()

    return /^\d{8,}$/.test(id)
  }

  // =====================================================
  // VALID SESSION
  // ONLY 10-11 TO 27-28
  // =====================================================

  const isValidSession = sessionValue => {
    if (!sessionValue) return false

    const match = sessionValue.match(/^(\d{2})-(\d{2})$/)

    if (!match) return false

    const start = Number(match[1])
    const end = Number(match[2])

    return start >= 10 && start <= 27 && end === start + 1
  }

  // =====================================================
  // FETCH STUDENTS
  // =====================================================

  const fetchStudents = async () => {
    try {
      setLoading(true)
      setError('')

      const params = new URLSearchParams()

      params.append('page', page)
      params.append('limit', '1000')

      if (search.trim()) {
        params.append('search', search.trim())
      }

      if (department) {
        params.append('dept', department)
      }

      if (session) {
        params.append('session', session)
      }

      const response = await fetch(
        `${API_URL}/student/all?${params.toString()}`,
        {
          method: 'GET',
          credentials: 'include'
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch students')
      }

      const validStudents = (data.students || []).filter(student => {
        if (!isValidStudentId(student.student_id)) {
          return false
        }

        if (student.session && !isValidSession(student.session)) {
          return false
        }

        return true
      })

      setStudents(validStudents)

      setPagination(
        data.pagination || {
          currentPage: 1,
          limit: 1000,
          totalStudents: 0,
          totalPages: 0,
          hasNextPage: false,
          hasPreviousPage: false
        }
      )
    } catch (error) {
      console.error(error)

      setError(error.message || 'Something went wrong')

      setStudents([])
    } finally {
      setLoading(false)
    }
  }

  // =====================================================
  // FETCH FILTER OPTIONS
  // =====================================================

  const fetchFilterOptions = async () => {
    try {
      setFilterLoading(true)

      const response = await fetch(`${API_URL}/student/filter-options`, {
        method: 'GET',
        credentials: 'include'
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch filter options')
      }

      setDepartments(data.departments || [])

      // Only allow 10-11 through 27-28
      const validSessions = (data.sessions || [])
        .filter(isValidSession)
        .sort((a, b) => {
          const aStart = Number(a.split('-')[0])
          const bStart = Number(b.split('-')[0])

          return aStart - bStart
        })

      setSessions(validSessions)
    } catch (error) {
      console.error('Filter options error:', error)
    } finally {
      setFilterLoading(false)
    }
  }

  // =====================================================
  // INITIAL FILTER OPTIONS
  // =====================================================

  useEffect(() => {
    fetchFilterOptions()
  }, [])

  // =====================================================
  // FETCH WHEN FILTER / PAGE CHANGES
  // =====================================================

  useEffect(() => {
    fetchStudents()
  }, [page, department, session, search])

  // =====================================================
  // RESET PAGE WHEN FILTER CHANGES
  // =====================================================

  useEffect(() => {
    setPage(1)
  }, [department, session, search])

  // =====================================================
  // CLEAR FILTERS
  // =====================================================

  const clearFilters = () => {
    setSearch('')
    setDepartment('')
    setSession('')
    setPage(1)
  }

  return (
    <Layout>
      <div className='min-h-screen bg-[#F8FAFC] px-3 py-5 text-[#334155] sm:px-5 sm:py-6 lg:px-8 lg:py-8'>
        <div className='mx-auto w-full max-w-[1400px]'>
          {/* =====================================================
            HEADER
        ===================================================== */}

          <div className='mb-5 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-center sm:justify-between'>
            <div>
              <h1 className='text-2xl font-bold tracking-tight text-[#B91C1C] sm:text-3xl'>
                All Students
              </h1>

              <p className='mt-1 text-xs text-slate-500 sm:text-sm'>
                {pagination.totalStudents.toLocaleString()} students found
              </p>
            </div>

            {(search || department || session) && (
              <button
                onClick={clearFilters}
                className='w-full rounded-lg bg-[#1E293B] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 sm:w-auto'
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* =====================================================
            FILTER CARD
        ===================================================== */}

          <div className='mb-4 grid grid-cols-1 gap-3 rounded-xl bg-white p-4 shadow-sm sm:gap-4 sm:p-5 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]'>
            {/* SEARCH */}

            <div className='flex min-w-0 flex-col gap-1.5'>
              <label className='text-xs font-semibold text-[#334155] sm:text-sm'>
                Search
              </label>

              <input
                type='text'
                placeholder='Search by ID, name or department...'
                value={search}
                onChange={e => setSearch(e.target.value)}
                className='h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-[#334155] outline-none transition placeholder:text-slate-400 focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] sm:h-11'
              />
            </div>

            {/* DEPARTMENT */}

            <div className='flex min-w-0 flex-col gap-1.5'>
              <label className='text-xs font-semibold text-[#334155] sm:text-sm'>
                Department
              </label>

              <select
                value={department}
                onChange={e => setDepartment(e.target.value)}
                disabled={filterLoading}
                className='h-10 w-full cursor-pointer rounded-lg border border-slate-300 bg-white px-3 text-sm text-[#334155] outline-none transition focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] disabled:cursor-not-allowed disabled:bg-slate-100 sm:h-11'
              >
                <option value=''>All Departments</option>

                {departments.map(dept => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            {/* SESSION */}

            <div className='flex min-w-0 flex-col gap-1.5'>
              <label className='text-xs font-semibold text-[#334155] sm:text-sm'>
                Session
              </label>

              <select
                value={session}
                onChange={e => setSession(e.target.value)}
                disabled={filterLoading}
                className='h-10 w-full cursor-pointer rounded-lg border border-slate-300 bg-white px-3 text-sm text-[#334155] outline-none transition focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] disabled:cursor-not-allowed disabled:bg-slate-100 sm:h-11'
              >
                <option value=''>All Sessions</option>

                {sessions.map(item => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* =====================================================
            ACTIVE FILTERS
        ===================================================== */}

          {(search || department || session) && (
            <div className='mb-4 flex flex-wrap items-center gap-2 text-xs sm:text-sm'>
              <span className='font-medium text-[#334155]'>
                Active filters:
              </span>

              {search && (
                <span className='max-w-full truncate rounded-full bg-red-50 px-3 py-1.5 font-medium text-[#B91C1C]'>
                  Search: {search}
                </span>
              )}

              {department && (
                <span className='max-w-full truncate rounded-full bg-red-50 px-3 py-1.5 font-medium text-[#B91C1C]'>
                  Department: {department}
                </span>
              )}

              {session && (
                <span className='rounded-full bg-red-50 px-3 py-1.5 font-medium text-[#B91C1C]'>
                  Session: {session}
                </span>
              )}
            </div>
          )}

          {/* =====================================================
            ERROR
        ===================================================== */}

          {error && (
            <div className='mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-[#B91C1C]'>
              {error}
            </div>
          )}

          {/* =====================================================
            TABLE
        ===================================================== */}

          <div className='overflow-hidden rounded-xl bg-white shadow-sm'>
            {loading ? (
              <div className='flex min-h-[280px] flex-col items-center justify-center text-[#B91C1C] sm:min-h-[350px]'>
                <div className='h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-[#B91C1C] sm:h-9 sm:w-9' />

                <p className='mt-3 text-sm font-semibold'>
                  Loading students...
                </p>
              </div>
            ) : (
              <div className='overflow-x-auto'>
                <table className='w-full border-collapse'>
                  <thead>
                    <tr className='bg-[#1E293B] text-white'>
                      <th className='whitespace-nowrap px-3 py-3 text-left text-xs font-semibold sm:px-5 sm:py-4 sm:text-sm'>
                        Student ID
                      </th>

                      <th className='whitespace-nowrap px-3 py-3 text-left text-xs font-semibold sm:px-5 sm:py-4 sm:text-sm'>
                        Name
                      </th>

                      <th className='hidden px-3 py-3 text-left text-xs font-semibold sm:px-5 sm:py-4 sm:text-sm md:table-cell'>
                        Department
                      </th>

                      <th className='hidden px-3 py-3 text-left text-xs font-semibold sm:px-5 sm:py-4 sm:text-sm md:table-cell'>
                        Session
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {students.length > 0 ? (
                      students.map(student => (
                        <tr
                          key={student.student_id}
                          className='border-b border-slate-200 transition hover:bg-slate-50'
                        >
                          <td className='whitespace-nowrap px-3 py-3 text-xs font-semibold text-[#B91C1C] sm:px-5 sm:py-3.5 sm:text-sm'>
                            {student.student_id}
                          </td>

                          <td className='max-w-[160px] truncate px-3 py-3 text-xs font-medium text-[#334155] sm:max-w-none sm:px-5 sm:py-3.5 sm:text-sm'>
                            {student.name}
                          </td>

                          {/* HIDDEN ON MOBILE */}
                          <td className='hidden max-w-[160px] truncate px-3 py-3 text-xs text-[#334155] md:table-cell sm:max-w-none sm:px-5 sm:py-3.5 sm:text-sm'>
                            {student.dept}
                          </td>

                          {/* HIDDEN ON MOBILE */}
                          <td className='hidden px-3 py-3 text-sm md:table-cell sm:px-5 sm:py-3.5'>
                            <span className='inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-[#1E293B]'>
                              {student.session || 'N/A'}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan='4'
                          className='px-6 py-12 text-center text-sm text-slate-500'
                        >
                          No students found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* =====================================================
            PAGINATION
        ===================================================== */}

          {!loading && pagination.totalPages > 0 && (
            <div className='mt-5 flex items-center justify-center gap-3 sm:mt-6 sm:gap-5'>
              <button
                onClick={() => setPage(prev => prev - 1)}
                disabled={!pagination.hasPreviousPage}
                className='rounded-lg bg-[#B91C1C] px-3 py-2 text-xs font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:bg-slate-300 sm:px-4 sm:py-2.5 sm:text-sm'
              >
                <span className='sm:hidden'>←</span>

                <span className='hidden sm:inline'>← Previous</span>
              </button>

              <div className='flex items-center gap-1 text-xs text-[#334155] sm:text-sm'>
                <strong>{pagination.currentPage}</strong>

                <span>/ {pagination.totalPages}</span>
              </div>

              <button
                onClick={() => setPage(prev => prev + 1)}
                disabled={!pagination.hasNextPage}
                className='rounded-lg bg-[#B91C1C] px-3 py-2 text-xs font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:bg-slate-300 sm:px-4 sm:py-2.5 sm:text-sm'
              >
                <span className='sm:hidden'>→</span>

                <span className='hidden sm:inline'>Next →</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default AllStudents
