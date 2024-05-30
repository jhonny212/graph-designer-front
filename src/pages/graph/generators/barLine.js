function createTemplateBar(horizontal,group_type,type) {
    const data1 = {
        type: "category",
        data: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
    }
    const data2 = {
        type: "value"
    }

    const options = {
        grid: { top: 20, right: 40, bottom: 20, left: 40 },
        series: [
          {
            data: [400, 300, 350, 200, 280],
            type: type,
            smooth: true
          }
        ],
        tooltip: {
          trigger: "axis"
        }
    }
    if(horizontal) {
        options.xAxis = data2
        options.yAxis = data1
    }else{
        options.xAxis = data1
        options.yAxis = data2
    }
    if(group_type == 1 || group_type == 2 || group_type == 3){
        options.series.push({
            data: [100, 200, 350, 400, 580],
            type: type,
            smooth: true
        })
    }
    
    if(group_type == 2 || group_type == 3){
        options.series.forEach((e)=>{
            e.stack = 'total'
            e.label = {
                show:true
            }
        })
    }
    return options
}

export {createTemplateBar}