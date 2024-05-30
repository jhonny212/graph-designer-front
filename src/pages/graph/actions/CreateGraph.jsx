import { Input, InputButton, InputTextArea, Label, Select } from '../../../components/forms'
import { ENDPOINT, ENDPOINT_TYPE, GRAPH_TYPE } from '../../../utils/endpoints'
import { HttpStatusCode } from 'axios'
import { request } from '../../../utils/httpRequest'
import { useContext, useEffect, useState } from 'react'
import { GraphExample } from './GraphExample'
import { GraphContext } from '../../provider/GraphProvider'

export const CreateGraph = () => {

    const { graphDefinition } = useContext(GraphContext);
    const [graphType, setGraphType] = useState([])
    const [endpointType, setEndpointType] = useState([])
    const [endpoint, setEndpoint] = useState([])

    //Get graph type
    useEffect(() => {
        request.get(`${GRAPH_TYPE}?page=1&pageSize=1000`,)
            .then((res) => {
                if (res.status == HttpStatusCode.Ok) {
                    setGraphType(res.data.map(({ id, name, tag }) => {
                        return {
                            id,
                            text: name,
                            tag
                        }
                    }))
                }
            }).catch(err => { })
    }, [])

    //Get endpoint type
    useEffect(() => {
        request.get(`${ENDPOINT_TYPE}?page=1&pageSize=1000`)
            .then((res) => {
                if (res.status == HttpStatusCode.Ok) {
                    const result = res.data.map(({ id, name }) => {
                        return {
                            id,
                            text: name
                        }
                    })
                    setEndpointType(result)
                }
            }).catch(err => { })
    }, [])

    useEffect(() => {
        request.get(`${ENDPOINT}/${graphDefinition.endpointTypeId}?page=1&pageSize=1000`)
            .then((res) => {
                if (res.status == HttpStatusCode.Ok) {
                    setEndpoint(res.data)
                }
            }).catch(err => { 
            })
    }, [graphDefinition.endpointTypeId])

    function onChangeGraph(ev) {
        graphDefinition.onChangeInput(ev)
    }

    function onChangeApi(ev) {
        graphDefinition.onChangeInput(ev)
    }

    return <>
        <div className='grid grid-cols-2 gap-3 m-10'>
            <div id='create-graph-content' >
                <form className="w-full m-0 p-0 self-center flex items-center justify-center">
                    <div className='w-2/3'>
                        <div className="mb-2 block mt-5"
                        >
                            <Label href="title" title="Titulo" />
                            <Input pk={"title"}
                                name={"title"}
                                value={graphDefinition.title}
                                onChange={graphDefinition.onChangeInput}
                                placeholder="Escriba el titulo"
                                type={"text"}
                            />
                        </div>
                        <div className="mb-2 block mt-5">
                            <Label href="tipo" title="Tipo de grafico" />
                            <Select id={"tipo"}
                                defaulttitle="Seleccione un tipo"
                                options={graphType}
                                value={graphDefinition.graphTypeId}
                                name={"graphTypeId"}
                                onchangeintput={onChangeGraph}
                            />
                        </div>
                        <div className="mb-2 block mt-5">
                            <Label href="data-center" title="Centro de datos" />
                            <Select id={"data-center"}
                                defaulttitle="Seleccione un centro"
                                options={endpointType}
                                onchangeintput={graphDefinition.onChangeInput}
                                value={graphDefinition.endpointTypeId}
                                name={"endpointTypeId"}
                            />
                        </div>
                        <div className="mb-2 block mt-5">
                            <Label href="api-ref" title="Api" />
                            <Select id={"api-ref"}
                                defaulttitle="Seleccione una api"
                                options={endpoint}
                                keyData='databaseLabel' 
                                name={"endpointId"}
                                onchangeintput={onChangeApi}
                                value={graphDefinition.endpointId}
                            />
                        </div>
                        <div className="mb-2 block mt-5">
                            <Label href="description" title="Descripcion" />
                            <InputTextArea pk={"description"}
                                name={"description"}
                                placeholder="Descripcion"
                                value={graphDefinition.description}
                                onChange={graphDefinition.onChangeInput}
                                row={4}
                            />
                        </div>
                        <div className="mb-2 block mt-5">
                            <InputButton text={"Agregar grafico"} />
                        </div>
                    </div>
                </form>
            </div>
            <div id='example-graph'>
                <h1 className='block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300 mt-6'>Ejemplo de grafico</h1>
                <GraphExample selectedGraphType={graphType.find(el => el.id == graphDefinition.graphTypeId)?.tag || null}/>
            </div>
        </div>
    </>
}
