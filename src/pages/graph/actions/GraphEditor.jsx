import React, { useContext, useEffect, useState } from 'react'
import { GraphBarLine } from '../graphTypes/GraphBarLine'
import { GraphPie } from '../graphTypes/GraphPie'
import { useAxiosRequest } from '../../../hooks/useAxios'
import { ENDPOINT_DETAIL } from '../../../utils/endpoints'
import { HttpStatusCode } from 'axios'
import { GraphContext } from '../../provider/GraphProvider'
import { Table } from '../../../components/table/Table'
import { TableBody, TableHeader } from '../../../components/table'
import { request } from '../../../utils/httpRequest'

export const GraphEditor = ({ type, endpointId }) => {
    const [bodyFormated, setBodyFormated] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        request.get(`${ENDPOINT_DETAIL}/example-data/${endpointId}`)
            .then(res => {
                setData(res.data.data)
                setBodyFormated(res.data.data.data.map(e=>{
                    return e.map(val=>{
                        return {
                            value: val,
                            first: false
                        }
                    })
                }))
            }).catch(err=>{ })
    }, [endpointId])

    const exampleTableData = <>
        <Table>
            <TableHeader columns={data?.columns?.map(e => e.nameApp) || []} />
            <TableBody data={bodyFormated}/>
        </Table>
    </>

    return <>
        <div className='editor'>
            {type == 1 && <GraphBarLine graphId={1} exampleData={exampleTableData} />}
            {type == 2 && <GraphBarLine graphId={2} exampleData={exampleTableData} />}
            {type == 3 && <GraphPie simple={true} />}
            {type == 4 && <GraphPie simple={false} />}
        </div>

        <div className='flex justify-center mt-5 w-11/12 mb-8'>
            {exampleTableData}
        </div>
    </>
}
