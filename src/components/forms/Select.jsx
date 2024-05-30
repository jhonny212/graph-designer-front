import React from 'react'

export const Select = ({id, options=[], defaulttitle, onchangeintput, name, value, keyData='text', keyValue = 'id'}) => {
  return <>
    <select name={name} value={value} onChange={onchangeintput} id={id} 
        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        {defaulttitle && <option defaultValue={defaulttitle}>{defaulttitle}</option>}
        {
            options.map(el=>(
                <option key={`${el[keyValue]}-${el[keyData]}`} value={el[keyValue]}>{el[keyData]}</option>
            ))
        }
    </select>
  </>
}
