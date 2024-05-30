function createTemplatePie() {
  const option = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  return option;
}

function createTemplatePieConcat(horizontal, group_type, type) {
  let xAxis = { type: 'category' }
  let yAxis = { gridIndex: 0 }
  if (horizontal) {
    [xAxis, yAxis] = [yAxis, xAxis]
  }

  const options = {
    legend: {},
    tooltip: {
      trigger: 'axis',
      showContent: false
    },
    dataset: {
      source: [
        ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
        ['Search Engine', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
        ['Direct', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
      ]
    },
    xAxis,
    yAxis,
    grid: { top: '55%' },
    series: [
      {
        type,
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type,
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'pie',
        id: 'pie',
        radius: '30%',
        center: ['50%', '25%'],
        emphasis: {
          focus: 'self'
        },
        label: {
          formatter: '{b}: {@2012} ({d}%)'
        },
        encode: {
          itemName: 'product',
          value: '2012',
          tooltip: '2012'
        }
      }
    ]
  };
  
  if (group_type == 2) {
    options.series.forEach((e) => {
      e.stack = 'total'
      e.label = {
        show: true
      }
    })
  }
  return options
}

function createPie(concat, horizontal, group_type, type) {
  if (concat) {
    return createTemplatePieConcat(horizontal, group_type, type)
  }
  return createTemplatePie()
}

function updateAxisPointer(event, chart) {
  const myChart = chart.current.getEchartsInstance()
  const xAxisInfo = event.axesInfo[0];
  if (xAxisInfo) {
    const dimension = xAxisInfo.value + 1;
    myChart.setOption({
      series: {
        id: 'pie',
        label: {
          formatter: '{b}: {@[' + dimension + ']} ({d}%)'
        },
        encode: {
          value: dimension,
          tooltip: dimension
        }
      }
    });
  }
}

export { createPie, updateAxisPointer }