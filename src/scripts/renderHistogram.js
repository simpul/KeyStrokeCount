/* eslint-disable no-undef */
const myChart = echarts.init(document.getElementById('histogramContainer'));
// fetch the data
fetch(`${location.href}histogramData`)
  .then((response) => response.json())
  .then(data => {
    console.log(data)
    const keysArr = []
    const valueArr = []
    data.forEach(v => {
      keysArr.push(v.key)
      valueArr.push(v.value)
    })
    const option = {
      title: {
          text: 'Total Key Stroke'
      },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'shadow'
          }
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: {
          type: 'value'
      },
      yAxis: {
          type: 'category',
          data: keysArr
      },
      series: [
          {
              name: 'keystroke',
              type: 'bar',
              data: valueArr
          }
      ]
    };
    myChart.setOption(option);
  })
  .catch(err => {
    console.log(err);
  });
