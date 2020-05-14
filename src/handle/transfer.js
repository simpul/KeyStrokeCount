/* eslint-disable no-prototype-builtins */
const keyMapObj = require('./keymap');

module.exports = function transfer(keyMapCountObj) {
  const heatMapData = [];
  const histogramData = [];
  for (const key in keyMapCountObj) {
    if (keyMapCountObj.hasOwnProperty(key)) {
      heatMapData.push({
        x: keyMapObj[key].x,
        y: keyMapObj[key].y,
        value: keyMapCountObj[key],
      });
      histogramData.push({
        key: key,
        value: keyMapCountObj[key],
      })
    }
  }
  heatMapData.sort((a, b) => {
    return a.value - b.value
  }).reverse()
  histogramData.sort((a, b) => {
    return a.value - b.value
  })
  return { heatMapData, histogramData };
};
