import React, { useState } from 'react'
import { InputButton, Label, Select, SelectMultiple, Toggle, Span } from '../../../components/forms'

export const LineBar = ({
    enableHorizontal, updateGroupType,
    optionsX = [], keyX = 'text',
    orderData = [], keyOrder = 'text',
    groupData = [], keyGroup = 'text',
    typeOperations = [], groupType = 0
}) => {

    const [axisX, setAxisX] = useState('')
    const [axisY, setAxisY] = useState('')
    
    const [operations, setOperations] = useState([])
    const [enableAxisY, setEnableAxisY] = useState(false)


    function mapData(data = [], newKey) {
        return data.map(e => {
            return {
                value: e.id,
                label: e[newKey]
            }
        })
    }

    function onChangeAxisY({ target }) {
        setAxisY(target.value)
        const selectedItem = optionsX.filter(e => e.id == target.value)[0]
        let newOperations = []
        switch (selectedItem.typeData.typeDb) {
            case "string":
                newOperations = typeOperations.filter(op => op.tag === "count")
                break;
            case "int":
            case "double":
                newOperations = typeOperations
                break;
        }
        setOperations(newOperations)
    }

    function onchangeGroup(ev) {
        updateGroupType(ev)
        setEnableAxisY(ev.target.value == 1 || ev.target.value == 2)
    }

    const containerAxisY = <>
        <div className={`mb-2 block mt-5 ${enableAxisY ? "p-2" : ""}`} style={{ width: '40vw' }}>
            <Label title={"Seleccione el eje Y"} href="axis-y" />
            <Select
                defaulttitle={"Seleccione el axis Y"}
                onchangeintput={onChangeAxisY} value={axisY}
                options={optionsX.filter(o => o.typeData.type_db != 'date')} keyData={keyX}
                id="axis-y"
            />
        </div>

        <div className={`mb-2 block mt-5 ${enableAxisY ? "p-2" : ""}`} style={{ width: '40vw' }}>
            <Label title={"Seleccione la operacion"} />
            <Select defaulttitle={"Seleccione la operacion"}
                options={operations} keyData='name' keyValue='tag'
            />
        </div>

        {enableAxisY &&
            <>
                <div className="mb-2 block mt-5 ml-2">
                    <InputButton text={"Agregar"} type='button' />
                </div>
            </>
        }
    </>


    return <>
        <div className="mb-2 block mt-5" style={{ width: '40vw' }}>
            <Label title={"Seleccione el eje X"} href="axis-x" />
            <Select
                defaulttitle={"Seleccione el axis X"}
                value={axisX} onchangeintput={(ev) => { setAxisX(ev.target.value) }}
                options={optionsX} keyData={keyX}
                id="axis-x"
            />
        </div>

        {
            enableAxisY && <div style={{ width: '40vw' }} className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                {containerAxisY}
                <div className='m-2'>
                    <Span text={"Texto"} className={"ml-2"} />
                    <Span text={"Texto"} className={"ml-2"} />
                </div>
            </div>
        }
        {
            !enableAxisY && containerAxisY
        }

        <div className="mb-2 block mt-5" style={{ width: '40vw' }}>
            <Label title={"Seleccione los campos a agrupar"} />
            <SelectMultiple options={mapData(groupData, keyGroup)} />
        </div>

        <div className="mb-2 block mt-5" style={{ width: '40vw' }}>
            <Label title={"Seleccione los campos a ordenar"} />
            <SelectMultiple options={mapData(orderData, keyOrder)} />
        </div>

        <div className="mb-2 block mt-5" style={{ width: '40vw' }}>
            <Label title={"Tipo"} />
            <Select onchangeintput={onchangeGroup} defaulttitle={"Seleccione el agrupamiento"}
                options={[
                    {
                        id: 0,
                        text: "Barra simple"
                    },
                    {
                        id: 1,
                        text: "Barra con categoria"
                    },
                    {
                        id: 2,
                        text: "Barras concatenadas"
                    }
                ]}
                value={groupType}
            />
        </div>

        <div className='mb-2 block mt-5' style={{ width: '40vw' }}>
            <Toggle message={'Barras vertical/Horizontal'} setStatus={enableHorizontal} />
        </div>

    </>
}
