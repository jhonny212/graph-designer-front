import React, { useState } from 'react'
import './style.css'

export const LayoutColumn = ({dashboardId}) => {
  const [open, setOpen] = useState(false)

  return <>
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
      <div className="flex justify-end px-4 pt-2">
        <div className={`dropdown ${open ? 'block' : 'inline-block'}`}>
          <button onClick={(e) => { setOpen(!open) }}
            className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span className="sr-only">Open dropdown</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
          </button>
          <div className={
            `dropdown-content ${open ? 'block' : 'hidden'} bg-gray-700
            `
          } style={{minWidth: '150px', maxWidth: '200px'}}>
            <ul>
              <li>
                <a href={`${dashboardId}/add-graph`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Agregar grafico
                </a>
                <a href={`${dashboardId}/add-graph`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Eliminar grafico
                </a>
                <a href={`${dashboardId}/add-graph`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Editar grafico
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pb-10">

      </div>
    </div>
  </>
}
