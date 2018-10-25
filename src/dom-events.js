/*
 * Dom Events contains the entry point for manipulating the app
 * HTML template.
 * It contains a single self executing function that will be called
 * from index.html. Individual DOM manipulation operations should be
 * placed within this function.
 */
const { ipcRenderer } = require('electron');

(function () {
  document.addEventListener('DOMContentLoaded', pageLoaded);

  // notify ipc main when DOM is ready
  function pageLoaded(){
    ipcRenderer.send('app-ready');
  }

  // connecting to sensor
  ipcRenderer.on('connecting', (event, arg) => {
    document.getElementById('status-bar').innerHTML += `Connecting... `;
  });

  // connected to sensor
  ipcRenderer.on('connected', (event, arg) => {
    document.getElementById('status-bar').innerHTML = ``;
  });

  // sensor name
  ipcRenderer.on('sensor-name', (event, arg) => {
    document.getElementById('sensor-name').innerHTML += `Sensor Name: ${arg} %`;
  });

  // serial number
  ipcRenderer.on('serial-number', (event, arg) => {
    document.getElementById('serial-number').innerHTML += `Serial Number: ${arg} %`;
  });

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
