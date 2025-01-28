var cursorWindow = require('ti.cursorwindow');
const win = Ti.UI.createWindow();
cursorWindow.init(100 * 1024 * 1024)
win.open();
