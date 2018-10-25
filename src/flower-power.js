const flowerPower = require('flower-power-ble');

module.exports = {
  connectToFP: (appWindow) => {

    appWindow.webContents.send('connecting');

    flowerPower.discoverAll((fp) => {
      fp.connectAndSetup((error) => {

        appWindow.webContents.send('connected');

        if (error) { console.log(error); }

        fp.readFriendlyName((error, sensorName) => {
          if (error) { console.log(error); }
          appWindow.webContents.send('sensor-name', sensorName);
        });

        fp.readSerialNumber((error, serial) => {
          if (error) { console.log(error); }
          appWindow.webContents.send('serial-number', serial);
        });

        fp.readBatteryLevel((error, batteryLevel) => {
          if (error) { console.log(error); }
          appWindow.webContents.send('update-battery-level', batteryLevel);
        });

        fp.readSoilMoisture((error, SoilMoisture) => {
          if (error) { console.log(error); }
          appWindow.webContents.send('soil-moisture-level', SoilMoisture);
        });

        fp.readAirTemperature((error, airTemp) => {
          if (error) { console.log(error); }
          appWindow.webContents.send('air-temp-level', airTemp);
        });

        fp.readSoilTemperature((error, soilTemp) => {
          if (error) { console.log(error); }
          appWindow.webContents.send('soil-temp-level', soilTemp);
        });

        // getFirstIndex(fp)
        //   .then((firstSessionIndex) => {
        //     return getHistory(fp, firstSessionIndex);
        //   })
        //   .then((history) => {
        //     // parse the base64 encode result
        //     let buf = Buffer.from(history, 'base64');

        //     // parse the byes to JSON
        //     console.log(history);
        //     console.log(JSON.stringify(buf));
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });

      });
    });
  }
};

function getFirstIndex(fp) {
  return new Promise((resolve, reject) => {
    fp.getHistoryCurrentSessionID((err, index) => {
      if (err) {
        reject(err);
      }

      resolve(index);
    })
  });
}

function getHistory(fp, index) {
  return new Promise((resolve, reject) => {
    fp.getHistory(index, (err, history) => {
      if (err) {
        reject(err);
      }

      resolve(history);
    });
  });
}