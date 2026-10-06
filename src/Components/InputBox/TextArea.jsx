
import React from 'react'

export default function TextArea ({
  label,
  name,
  rows = 4,
  placeholder,
  value,
  onChange,
  disabled = false,
  className = ''
}) {
  return (
    <div className={`w-full flex flex-col gap-1.5 ${className}`}>

      {/* LABEL */}

      <label
        htmlFor={name}
        className='
          text-sm
          font-medium
          text-gray-700
          dark:text-slate-200
          font-inter
          leading-5
        '
      >
        {label}
      </label>

      {/* TEXTAREA */}

      <textarea
        name={name}
        id={name}
        rows={rows}
        placeholder={placeholder}
        value={value ?? ''}
        onChange={onChange}
        disabled={disabled}
        className='
          w-full
          min-h-[100px]
          px-3
          py-2.5
          rounded-lg
          border
          border-gray-300
          dark:border-slate-600
          bg-white
          dark:bg-gray-700
          text-sm
          text-gray-700
          dark:text-slate-100
          placeholder:text-gray-400
          dark:placeholder:text-slate-500
          font-inter
          leading-6
          resize-y
          outline-none
          transition-all
          duration-200

          focus:border-[#B91C1C]
          focus:ring-2
          focus:ring-[#B91C1C]/10

          disabled:bg-gray-100
          disabled:text-gray-500
          disabled:cursor-not-allowed
          disabled:border-gray-200

          dark:disabled:bg-gray-700
          dark:disabled:text-slate-400
          dark:disabled:border-slate-600

          disabled:resize-none
        '
      />

    </div>
  )
}
