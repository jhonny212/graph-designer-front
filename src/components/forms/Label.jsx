import React from 'react'

export const Label = ({ href, title, customClassName}) => {
  return <>
    <label htmlFor={href} className={ customClassName || `block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300`}>
        { title }
    </label>
  </>
}
