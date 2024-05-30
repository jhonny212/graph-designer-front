import React from 'react'
const defaultClass = "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

export const InputTextArea = ({ customClass,placeholder,pk,row,name,value,onChange }) => {
    return <>
        <textarea name={name} value={value} onChange={onChange} id={pk} rows={row} className={customClass || defaultClass}
            placeholder={placeholder}></textarea>
    </>
}
