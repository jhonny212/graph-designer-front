import React, { useContext } from 'react'
import { Input, Label, Select } from '../../../components/forms'
import { GraphContext } from '../../provider/GraphProvider'

export const FilterGraph = () => {

  const { graphDefinition } = useContext(GraphContext);

  return <>
    <form action="" className='flex flex-col gap-4 items-center justify-center '>
      <div className="mb-2 block mt-5 w-3/6">
        <Label href="title" title="Nombre" />
        <Input pk={"title"}
          name={"title"}
          // value={title}
          // onChange={onChangeInput}
          placeholder="Escriba el nombre"
          type={"text"}
        />
      </div>

      <div className="mb-2 block mt-5 w-3/6">
        <Label href="column" title="Seleccione la columna a operar" />
        <Select id={"column"}
          defaulttitle="Seleccione la columna"
          // options={graphType}
          // value={graphTypeId}
          // onchangeintput={onChangeInput}
          name={"column"}
        />
      </div>

      <div className="mb-2 block mt-5 w-3/6">
        <Label href="filterType" title="Seleccione tipo de filtro" />
        <Select id={"filterType"}
          defaulttitle="Seleccione tipo de filtro"
          // options={graphType}
          // value={graphTypeId}
          // onchangeintput={onChangeInput}
          name={"filterType"}
        />
      </div>

      <div className="mb-2 block mt-5 w-3/6">
        <Label href="filter" title="Seleccione un filtro" />
        <Select id={"filter"}
          defaulttitle="Seleccione un filtro"
          // options={graphType}
          // value={graphTypeId}
          // onchangeintput={onChangeInput}
          name={"filter"}
        />
      </div>



    </form>
  </>
}
