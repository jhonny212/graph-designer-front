import React, { useEffect, useState } from 'react'
import { Tab } from '../../components/tab/Tab'
import { TabComponent } from '../../components/tab/TabComponent'
import { CreateGraph } from './actions/CreateGraph'
import { FilterGraph } from './actions/FilterGraph'
import { GraphContext } from '../provider/GraphProvider'
import { GraphEditor } from './actions/GraphEditor'
import { useForm } from '../../hooks/useForm'


export const Graph = () => {

    const [activeTab, setActiveTab] = useState('create')

    const initialData = {
        title: "",
        description: "",
        endpointTypeId: 0,
        graphTypeId: 0,
        endpointId: 0
    }
    const graphDefinition = useForm(initialData)

    const handleTabClick = (tabRef) => {
        setActiveTab(tabRef)
    }

    const create = <TabComponent key={"key1"} text={"Registrar grafico"} hlink={"create"} activeTab={activeTab} handleTabClick={handleTabClick} />
    const editor = <TabComponent key={"key3"} text={"Terminar de editar"} hlink={"editor"} activeTab={activeTab} handleTabClick={handleTabClick} />
    const filters = <TabComponent key={"key2"} text={"Agregar filtros"} hlink={"filters"} activeTab={activeTab} handleTabClick={handleTabClick} />

    return <GraphContext.Provider value={{ graphDefinition }} >
        <Tab tabs={[create, editor, filters]}>
            {activeTab == "create" && <CreateGraph />}
            {activeTab == "editor" && <GraphEditor type={graphDefinition.graphTypeId} endpointId={graphDefinition.endpointId} />}
            {activeTab == "filters" && <FilterGraph />}
        </Tab>
    </GraphContext.Provider>

}
