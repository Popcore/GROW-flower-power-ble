const { app } = require('electron');

module.exports = {

  createAndListen: (appWindow, createWindowFn) => {
    app.on('ready', () => {
      createWindowFn();
    });

    app.on('window-all-closed', () => {
      app.quit();
    });

    app.on('activate', () => {
      if (appWindow === null) {
        createWindowFn();
      }
    });
  },
}