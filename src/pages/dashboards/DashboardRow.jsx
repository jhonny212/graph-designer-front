import React, { useState } from 'react'
import { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import { useBasicFetch } from '../../hooks/useBasicFetch'
import { DASHBOARD, DIMENSION } from '../../utils/endpoints'
import { Loader } from '../../components/common/Loader'
import { Label } from '../../components/forms/Label'
import { Input } from '../../components/forms/Input'
import { InputTextArea } from '../../components/forms/InputTextArea'
import { InputButton } from '../../components/forms/InputButton'
import { Select } from '../../components/forms/Select'
import { request } from '../../utils/httpRequest'
import { HttpStatusCode } from 'axios'
import { useParams } from 'react-router-dom'

export const DashboardRow = () => {

  const { dashboardId } = useParams()

  /**
   * Get data
   */
  const [columns, setColumns] = useState([])
  const [height, setHeight] = useState([])

  useEffect(() => {
    request.get(`${DIMENSION}/column`)
      .then((res) => {
        if (res.status == HttpStatusCode.Ok) {
          const newData = res.data.map(el => {
            return { id: Number(el.id), text: `Una ${el.columns} ${el.unit}` }
          })
          setColumns(newData)
        }
      }).catch(err => { })
  }, [])

  useEffect(() => {
    request.get(`${DIMENSION}/row`)
      .then((res) => {
        if (res.status == HttpStatusCode.Ok) {
          const newData = res.data.map(el => {
            return { id: Number(el.id), text: `Una ${el.size} ${el.unit}` }
          })
          console.log(res);
          setHeight(newData)
        }
      }).catch(err => { })
  }, [])

  /**
   * Form
   */
  const initialData = {
    columns_id: 1, height_id: 1, order: 0, dashboard_id: dashboardId
  }
  const { setFields, columns_id, height_id, order, onChangeInput, form, cleanData } = useForm(initialData)
  const { loading, error, data, fetchPostData } = useBasicFetch()

  async function submitForm(ev) {
    ev.preventDefault();
    fetchPostData(`${DASHBOARD}/row`, { columns_id, order, height_id }, HttpStatusCode.Created, cleanData)
  }


  return <>
    {loading && <Loader />}
    <form className="flex flex-col gap-4 items-center justify-center " onSubmit={(e) => { submitForm(e) }} ref={form}>
      <div className='w-5/12'>
        <div className="mb-2 block mt-5">
          <Label href="columns" title="Numero de columnas" />
          <Select
            name={"columns_id"}
            options={columns}
            id={"columns"}
            onchangeintput={onChangeInput}>
          </Select>
        </div>

        <div className="mb-2 block mt-5">
          <Label href="height" title="Tamaño de la fila" />
          <Select
            name={"height_id"}
            options={height}
            id={"hegit"}
            onchangeintput={onChangeInput}>
          </Select>
        </div>

        <div className="mb-2 block mt-5">
          <InputButton text={"Agregar fila"} />
        </div>
      </div>
    </form>
  </>
}
