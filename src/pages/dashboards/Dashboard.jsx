import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SpeedDial, Item } from '../../components/speedDial'
import { LayoutRow, LayoutColumn } from '../../components/Layout'
import { IoMdAdd } from "react-icons/io";
import { FaSort } from "react-icons/fa";
import { TbFilterSearch } from "react-icons/tb";
import { request } from '../../utils/httpRequest';
import { DASHBOARD, DASHBOARD_ROW } from '../../utils/endpoints';
import { HttpStatusCode } from 'axios';

export const Dashboard = () => {
  const { dashboardId } = useParams()
  const [dashboardRows, setDashboardRows] = useState([])
  const [paginator, setPaginator] = useState({ page: 1, pageSize: 10 })

  useEffect(() => {
    request.get(`${DASHBOARD_ROW}/${dashboardId}?page=${paginator.page}&pageSize=${paginator.pageSize}`).then((res) => {
      if (res.status == HttpStatusCode.Ok) {
        setDashboardRows(res.data.data)
      }
    }).catch(err => { console.log(err); })
  }, [paginator])

  return <>
    <SpeedDial>
      <Item href={"filters"} text={"Mostrar filtros"} targetId={"filters"}>
        <TbFilterSearch />
      </Item>
      <Item href={`${dashboardId}/add-row`} text={"Agregar nueva fila"} targetId={"add-row"}>
        <IoMdAdd />
      </Item>
      <Item href={"order-row"} text={"Ordenar filas"} targetId={"order-row"}>
        <FaSort />
      </Item>
    </SpeedDial>

    {dashboardRows.map(el => {
      return (
        <LayoutRow key={el.id}>
          {[...Array(el.columns.columns)].map((_,index) => {
            return <LayoutColumn key={index} dashboardId={dashboardId} />
          })}
        </LayoutRow>
      )
    })}

  </>
}
