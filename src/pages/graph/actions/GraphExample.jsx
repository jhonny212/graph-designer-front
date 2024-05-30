import { createTemplateBar } from '../generators/barLine'
import ReactECharts from 'echarts-for-react';
import { createPie } from '../generators/pie';
import { Toggle } from '../../../components/forms';
import { useState } from 'react';

export const GraphExample = ({ selectedGraphType }) => {
    const [glineBar, setGlineBar] = useState("bar")
    const [enableHorizontal, setEnableHorizontal] = useState(false)

    switch (selectedGraphType) {
        case "line":
        case "bar":
        case "pie":
            return <>
                <ReactECharts
                    option={createTemplateBar(false, 1, selectedGraphType)}
                    style={{ width: "100%", height: "60vh" }}
                    notMerge={true}
                />
            </>
        case "pie_bar_line":
            return <>
                <div className=''>
                    <div className='grid grid-cols-2'>
                        <Toggle message={'Habilitar Barras/Lineas'} setStatus={(e) => { setGlineBar(!glineBar) }} />
                        <Toggle message={'Habilitar Barras vertical/Horizontal'} setStatus={(ev) => { setEnableHorizontal(!enableHorizontal) }} />
                    </div>
                    <div className='mt-5 text-white bg-white'>
                        <ReactECharts
                            option={createPie(true, enableHorizontal, 1, glineBar ? 'bar' : 'line')}
                            style={{ width: "100%", height: "60vh" }}
                            notMerge={true}
                        ></ReactECharts>
                    </div>
                </div>


            </>

        default:
            break;
    }
}
