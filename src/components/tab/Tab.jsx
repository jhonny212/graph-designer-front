import React, { useState } from 'react'

const ProfileContent = () => (
    <div>
        <h1>Perfil</h1>
        <p>Información del perfil...</p>
    </div>
);

const DashboardContent = () => (
    <div>
        <h1>Dashboard</h1>
        <p>Información del dashboard...</p>
    </div>
);

const DisabledContent = () => (
    <div>
        <h1>Desactivado</h1>
        <p>Esta pestaña está desactivada.</p>
    </div>
);

export const Tab = ({children,tabs}) => {

    return <>
        <div>
            <div className="border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    {tabs.map(e=>e)}
                </ul>
            </div>

            <div className="mt-4">
                    {children}
            </div>
        </div>
    </>
}
