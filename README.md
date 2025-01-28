## ti.cursorwindow

This module allows you to set a higher Cursor size (default is 2MB) for e.g. SQLite access.

If you run into errors like:
```
SQLiteQuery: exception: Row too big to fit into CursorWindow requiredPos=105, totalRows=106;...
```
you can use this module to increase the value.

## Usage
* add the module to tiapp.xml
* load the module in your code (`cursorWindow = require('ti.cursorwindow')`)
* call `cursorWindow.init(value)`

## Example

```js
const cursorWindow = require('ti.cursorwindow');
const win = Ti.UI.createWindow();
win.open();

cursorWindow.init(100 * 1024 * 1024);
```
