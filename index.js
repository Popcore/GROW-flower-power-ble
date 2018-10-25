const { BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const events = require('./src/app-events');
const fp = require('./src/flower-power');

var appWindow;

const createWindow = () => {
  appWindow = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: '#ececec',
    icon: path.join(__dirname, './assets/icons/png/64x64.png')
  });

  // load template
  appWindow.loadURL(url.format({
    pathname: path.join(__dirname, './assets/templates/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // connect to sensor(s) when app is ready
  ipcMain.on('app-ready', () => {
    fp.connectToFP(appWindow);
  });
}

// listen to events
events.createAndListen(appWindow, createWindow);