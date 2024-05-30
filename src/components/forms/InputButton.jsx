import React from 'react'

export const InputButton = ({ text, type = "submit", onclick, className }) => {
  return (
    <button type={type} onClick={onclick}
      className={`text-white w-full
        bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
        focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
         dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${className}`}>
      {text}
    </button>
  )
}
