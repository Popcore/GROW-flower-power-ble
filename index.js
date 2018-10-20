const { BrowserWindow } = require('electron');
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
    pathname: path.join(__dirname, './templates/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  appWindow.webContents.on('did-finish-load', () => {
    appWindow.webContents.send('ping', 'whoooooooh!')
  })

  fp.connectToFP(appWindow);
}

// listen to events
events.createAndListen(appWindow, createWindow);