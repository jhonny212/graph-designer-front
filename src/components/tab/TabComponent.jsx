import React from 'react'

export const TabComponent = ({text, activeTab, hlink, handleTabClick}) => {
    return (
        <li className="me-2">
            <a
                href={`#${hlink}`}
                className={`inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group ${activeTab === hlink ? 'text-gray-600 border-gray-300 dark:text-gray-300 dark:border-gray-300' : ''}`}
                onClick={() => handleTabClick(hlink)}
            >
                {text}
            </a>
        </li>
    )
}
