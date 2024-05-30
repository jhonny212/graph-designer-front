import React from 'react'

export const TableHeader = ({columns}) => {
    return <>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
            <tr>
                {
                    columns.map(el => <th scope="col" className="px-6 py-3">{el}</th>)
                }
            </tr>
        </thead>
    </>
}
