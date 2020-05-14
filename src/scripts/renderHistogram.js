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
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: {
          type: 'value',
          // boundaryGap: [0, 0.01],
          interval: 1
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
