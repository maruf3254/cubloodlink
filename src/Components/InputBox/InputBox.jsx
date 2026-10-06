
import React from 'react'

export default function InputBox ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange = () => {},
  disabled = false,
  className = '',
  min,
  max,
  step
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

      {/* INPUT */}

      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value ?? ''}
        onChange={onChange}
        disabled={disabled}
        min={min}
        max={max}
        step={step}
        autoComplete='off'
        className={`
          w-full
          h-[42px]
          px-3
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
          outline-none
          font-inter
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

          ${disabled ? 'opacity-90' : ''}
        `}
      />

    </div>
  )
}
