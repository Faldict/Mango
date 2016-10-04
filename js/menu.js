const remote = require('electron').remote;
const Menu = remote.Menu;
const MenuItem = remote.MenuItem;

const template = [
  {
  	label: 'File',
  	submenu: [
  	  {
  	  	label: 'New',
  	  	accelerator: 'CmdOrCtrl+N',
  	  	click () {
  	  		const {BrowserWindow} = require('electron').remote;
  	  		let win = new BrowserWindow({width: 800, height: 600});
  	  		win.loadURL(`file://${__dirname}/index.html`);
  	  		win.on('closed', () => {
    			win = null;
  			})
  	  	}
  	  },
  	  {
  	  	label: 'Save',
  	  	accelerator: 'CmdOrCtrl+S',
  	  	click () {
  	  		$('#saveModal').modal('show');
  	  	}
  	  },
  	  {
  	  	label: 'Quit',
  		accelerator: 'CmdOrCtrl+Q',
	  	click () {
			const app = require('electron').remote.app;
			app.quit();
  	  	}
  	  }
  	]
  },
  {
    label: 'Edit',
    submenu: [
      {
        role: 'undo'
      },
      {
        role: 'redo'
      },
      {
        type: 'separator'
      },
      {
        role: 'cut'
      },
      {
        role: 'copy'
      },
      {
        role: 'paste'
      },
      {
        role: 'pasteandmatchstyle'
      },
      {
        role: 'delete'
      },
      {
        role: 'selectall'
      }
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click (item, focusedWindow) {
          if (focusedWindow) focusedWindow.reload()
        }
      },
      {
        label: 'Toggle Developer Tools',
        accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
        click (item, focusedWindow) {
          if (focusedWindow) focusedWindow.webContents.toggleDevTools()
        }
      },
      {
        type: 'separator'
      },
      {
        role: 'resetzoom'
      },
      {
        role: 'zoomin'
      },
      {
        role: 'zoomout'
      },
      {
        type: 'separator'
      },
      {
        role: 'togglefullscreen'
      }
    ]
  },
  {
    role: 'window',
    submenu: [
      {
        role: 'minimize'
      },
      {
        role: 'close'
      }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click () { require('electron').shell.openExternal('http://electron.atom.io') }
      }
    ]
  }
];

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)