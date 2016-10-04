function preview() {
	const {BrowserWindow} = require('electron').remote;
	let win = new BrowserWindow({width: 800, height: 600});
	win.loadURL('./preview.html');
	let contents = win.webContents;
	var text = $('#preview').val();
	contents.insert(text);
}