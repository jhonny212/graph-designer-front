import React, { useEffect, useState } from 'react'
import { CardItem } from '../../components/cards/CardItem'
import { DASHBOARD } from '../../utils/endpoints'
import { request } from '../../utils/httpRequest'
import axios, { HttpStatusCode } from 'axios'
import { useAxiosRequest } from '../../hooks/useAxios'
import { DangerToast } from '../../components/toast/DangerToast'
import { Spinner } from '../../components/spinner/Spinner'

export const DashboardList = () => {
    
    const [paginator, setPaginator] = useState({ page: 1, pageSize: 10, size: 0 })
    const {GetRequest,data: dashboards,error,loading,pagination} = useAxiosRequest(DASHBOARD,paginator,HttpStatusCode.Ok,true)
    const [enableTotast, setEnableTotast] = useState(false)

    useEffect(() => {
        GetRequest()
    }, [paginator])


    return <>
        { enableTotast && <DangerToast removeToast={setEnableTotast} text={"Error en la petición, intente de nuevo"}/>}
    
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-5 px-6' id="dashboard-content-list">
            {dashboards.map((el, index) => {
                return <CardItem title={el.name}
                    desciption={el.description}
                    key={el.id}
                    pk={el.id}
                    url={"/dashboard/"}
                />
            })}
        </div>
    </>
}
