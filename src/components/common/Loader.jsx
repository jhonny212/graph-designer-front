import React, { useEffect, useRef, useState } from 'react'
import './loader.css'


export const Loader = () => {
    return <>
        
        <div id='loader-custom' className="flex w-screen items-center justify-center h-full bg-slate-400" style={{position: 'absolute', top:0, zIndex: 1}}>
            <div 
                className="inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-white border-r-red-400 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span className="!absolute text-white !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" >
                    Loading...
                </span>
            </div>
        </div>
        {/* <div className='loader'>

        </div> */}
    </>

}
