import React, { useState } from 'react'

export const SpeedDial = ({children}) => {
    const [enable, setEnable] = useState("hidden")

    return <>
        <div data-dial-init className="fixed bottom-6 group " onMouseLeave={()=>{setEnable("hidden")}} style={{
            insetInlineEnd: '1.5rem'
        }} >
            <div id="speed-dial-menu-default" className={`flex flex-col items-center ${enable} mb-4 space-y-2`}>
                {children}
            </div>
            <button 
                onMouseEnter={()=>{setEnable("")}} 
                type="button" data-dial-toggle="speed-dial-menu-default" aria-controls="speed-dial-menu-default" aria-expanded="false" 
                className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                <svg className="w-5 h-5 transition-transform group-hover:rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                </svg>
                <span className="sr-only">Open actions menu</span>
            </button>
        </div>

    </>
}
