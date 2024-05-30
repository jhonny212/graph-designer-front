import React from 'react'

export const TableBody = ({data}) => {
    return <>
        <tbody>
            {
                data.map((el)=>{
                    const rows = el.map(({value,first})=>{
                        return <td className={`px-6 py-4 ${first?'font-medium text-gray-900 whitespace-nowrap dark:text-white':''}` }>{value}</td>
                    })
                    return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        {rows}
                    </tr>
                })
            }
        </tbody>
    </>
}
