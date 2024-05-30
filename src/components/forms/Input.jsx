import React from 'react'

export const Input = ({ placeholder, customClass, pk, type, value, onChange,name,required=false }) => {
    return <>
        <input value={value} name={name} onChange={(e)=>onChange(e)} type={type} id={pk}
            className={customClass || `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
        focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
         dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full`
            }
            placeholder={placeholder} required={required}>
        </input>
    </>
}
