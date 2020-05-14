/* eslint-disable no-undef */
const container = document.getElementById('heatmapContainer');
const config = {
  container,
  radius: 60,
  maxOpacity: 0.5,
  minOpacity: 0,
  blur: .65,
};
const heatmapInstance = h337.create(config);

// fetch the data
fetch(`${location.href}heatmapData`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let max
    if (data.length) {
      max = data[0].value
    } else {
      max = 10
    }
    heatmapInstance.setData({
      data,
      min: 0,
      max
    })
  })
  .catch((err) => {
    console.log(err);
  });