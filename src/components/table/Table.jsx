import React from 'react'

export const Table = (props) => {
    return <>
        <div className="relative overflow-x-auto rounded-xl">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                { props.children }
            </table>
        </div>
    </>
}
