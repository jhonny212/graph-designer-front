import React, { useRef, useState } from 'react'
import { InputButton, Label, Select, Toggle } from '../../../components/forms'
import { createPie, updateAxisPointer } from '../generators/pie'
import ReactECharts from 'echarts-for-react';
import { LineBar } from '../common/LineBar';
import { NavLink } from 'react-router-dom';

export const GraphPie = ({simple}) => {
    const [concatPie, setconcatPie] = useState(false)
    const [enableHorizontal, setEnableHorizontal] = useState(false)
    const [groupType, setGroupType] = useState(0)
    const [glineBar, setGlineBar] = useState(true)
    const chart = useRef(undefined)

    return (
        <div className='grid grid-cols-2 gap-1'>
            <div className='flex justify-center mt-5 '>
                <div className='bg-slate-100' style={{ width: "80%", height: "500px" }}>
                    <ReactECharts
                        option={createPie(concatPie, enableHorizontal, groupType, glineBar ? 'bar' : 'line')}
                        style={{ height: "450px" }}
                        notMerge={true}
                        onEvents={{ 'updateAxisPointer': (ev) => { updateAxisPointer(ev, chart) } }}
                        ref={chart}
                    ></ReactECharts>
                </div>
            </div>
            <form className="items-center justify-center" >
                <div className="mb-2 block mt-5" style={{ width: '40vw' }}>
                    <Label title={"Seleccione el campo a agrupar"} href="axis-x" />
                    <Select defaulttitle={"Seleccione el campo a agrupar"}
                        options={[]}
                        id="axis-x"
                    />
                </div>
                <div className="mb-2 block mt-5" style={{ width: '40vw' }}>
                    <Label title={"Seleccione operador"} href="operador" />
                    <Select defaulttitle={"Seleccione el operador"}
                        options={[]}
                        id="operador"
                    />
                </div>
                <div className="mb-2 block mt-5" style={{ width: '40vw' }}>
                    <Label title={"Seleccione el campo a operar"} href="campo" />
                    <Select defaulttitle={"Seleccione el campo"}
                        options={[]}
                        id="campo"
                    />
                </div>
                <div className='mb-2 block mt-5' style={{ width: '40vw' }}>
                    <div className='grid grid-flow-col auto-cols-max'>
                        <div className='mr-2'>
                            { !simple && <Toggle message={'Habilitar Barras vertical/Horizontal'} setStatus={(ev) => { setconcatPie(!concatPie) }} />}
                        </div>
                        <div>
                            {concatPie && <Toggle message={'Habilitar Barras/Lineas'} setStatus={(e) => { setGlineBar(!glineBar) }} />}
                        </div>
                    </div>
                </div>
                {concatPie && <LineBar updateGroupType={({ target }) => { setGroupType(target.value) }} enableHorizontal={(ev) => { setEnableHorizontal(!enableHorizontal) }} />}
                <div className="mb-2 block mt-5" style={{ width: '40vw' }}>
                    <InputButton 
                        text={<NavLink to={"/dashboard/1/add-graph/1/filters"}>Siguiente</NavLink>} 
                        type="button"
                    />
                </div>
            </form>
        </div>
    )
}
