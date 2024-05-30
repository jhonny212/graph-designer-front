import React, { useContext, useEffect, useRef, useState } from 'react'
import ReactECharts from 'echarts-for-react';
import { createTemplateBar } from '../generators/barLine'
import { LineBar } from '../common/LineBar';
import { GraphContext } from '../../provider/GraphProvider'
import { ENDPOINT_DETAIL, OPERATION } from '../../../utils/endpoints';
import { HttpStatusCode } from 'axios';
import { request } from '../../../utils/httpRequest';

export const GraphBarLine = ({ graphId }) => {

    const [enableHorizontal, setEnableHorizontal] = useState(false)
    const [groupType, setGroupType] = useState(0)
    const chart = useRef(null)
    const { graphDefinition } = useContext(GraphContext);
    const [columns, setColumns] = useState([])
    const [typeOperations, setTypeOperations] = useState([])

    function updateHorizontalStatus() {
        setEnableHorizontal(!enableHorizontal)
    }

    function updateGroupType({ target }) {
        setGroupType(target.value)
    }

    useEffect(() => {
        request.get(`${ENDPOINT_DETAIL}/${graphDefinition.endpointId}`)
            .then((res) => {
                if (res.status == HttpStatusCode.Ok) {
                    setColumns(res.data)
                }
            }).catch(err => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        request.get(`${OPERATION}`)
            .then((res) => {
                if (res.status == HttpStatusCode.Ok) {
                    setTypeOperations(res.data)
                }
            }).catch(err => {
                console.log(err);
            })

    }, [])

    return <>
        <div className='grid grid-cols-2 gap-1'>
            <div className='flex justify-center mt-5'>
                <ReactECharts
                    ref={chart}
                    option={createTemplateBar(enableHorizontal, groupType, graphId == 1 ? 'bar' : 'line')}
                    style={{ width: "80%", height: "450px" }}
                    notMerge={true}
                ></ReactECharts>
            </div>

            <form className="items-center justify-center ">
                <div>
                    <LineBar
                        enableHorizontal={updateHorizontalStatus} updateGroupType={updateGroupType} groupType={groupType}
                        optionsX={columns} keyX='nameApp'
                        orderData={columns} keyOrder='nameApp'
                        groupData={columns} keyGroup='nameApp'
                        typeOperations={typeOperations}
                    />
                </div>
            </form>
        </div>
    </>
}
