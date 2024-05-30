import React from 'react'

export const LayoutRow = ({ children }) => {
    return (
        <div className='w-full p-3 mt-5 border-gray-300 border'>
            <div className={`grid grid-flow-col  gap-2  border-gray-400 text-white`}>
                {children}
            </div>
        </div>
    )
}
