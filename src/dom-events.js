/*
 * Dom Events contains the entry point for manipulating the app
 * HTML template.
 * It contains a single self executing function that will be called
 * from index.html. Individual DOM manipulation operations should be
 * placed within this function.
 */
const { ipcRenderer } = require('electron');

(function() {
  // battery level
  ipcRenderer.on('update-battery-level', (event, arg) => {
    document.getElementById('battery-level').innerHTML += `Battery Level: ${arg} %`;
  });

  // soil moisture
  ipcRenderer.on('soil-moisture-level', (event, arg) => {
    document.getElementById('soil-moisture').innerHTML += `Soil Moisture: ${arg} %`;
  });

  // air temperature
  ipcRenderer.on('air-temp-level', (event, arg) => {
    document.getElementById('air-temp').innerHTML += `Air Temperature: ${arg} C&deg`;
  });

  // soil temperature
  ipcRenderer.on('soil-temp-level', (event, arg) => {
    document.getElementById('soil-temp').innerHTML += `Soil Temperature: ${arg} C&deg`;
  });

})();
